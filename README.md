# Self-Forcing 1.3B · Training-free Loop Design Space

这是一个 **Self-Forcing 1.3B + Wan2.1 T2V 1.3B DMD checkpoint** 的 training-free loop 超参数对照展示站。  
用同一个 checkpoint、同一组 prompt、同一个 seed，只改变 inference-time loop 的配置，观察不同配置生成的视频差异。

站点是纯静态页面（HTML + `data.js` + mp4/封面），可以直接用浏览器打开，也可以部署到 GitHub Pages。

---

## 在线预览

开启 GitHub Pages 后访问：

```
https://vibe-hust.github.io/video_showcase/
```

本地预览：

```bash
# 任意静态服务器都可以；需要支持 Range 请求，视频才能拖动进度
python range_server.py 8766
# 然后打开 http://127.0.0.1:8766/
```

> `range_server.py` 是一个带 HTTP Range 支持的多线程静态服务器。  
> 如果直接用 `python -m http.server`，视频不支持 Range，拖动进度条会失效。

---

## 站点内容

- **48 个默认网格配置**
  - 42 个为本轮新生成
  - 6 个为此前 sweep 已跑过、直接复用（页面里带黄色「复用」标记）
- **每个配置 3 条 prompt**，共 **144 个视频**
- 视频参数：`832×480`、`16 fps`、81 帧、**5.0625 秒**
- 所有配置使用同一个 checkpoint、`seed=0`、相同的 4 步 denoising schedule

### 默认 48 网格

```
loop_indices ∈ {1, 28, 14, 1-3}          # 4 种 layer 选择
loop_k       ∈ {1, 2, 4}                 # 3 种 K
early_late   ∈ {off, 0-1}                # 2 种采样步窗口
weak_strong  ∈ {off, {weak_k:1, f:0.5}}  # 2 种视频 chunk 调度
```

笛卡尔积 = `4 × 3 × 2 × 2 = 48` 个配置。  
配置目录名形如 `d000_l1_k1_earlyoff_weakoff`：

- `d000`：配置编号
- `l1`：`loop_indices=1`
- `k1`：`loop_k=1`
- `earlyoff`：`early-late` 关闭
- `weakoff`：`weak-strong` 关闭

---

## 页面怎么用

顶部有四组分类/过滤：

| 控件 | 作用 |
|---|---|
| **Prompt** | 切换 P1 / P2 / P3；同一个 prompt 横向比较 |
| **Layer** | 只看某个 layer（L1 / L14 / L28 / L1-3），或全部 |
| **K** | 只看 K=1 / K=2 / K=4，或全部 |
| **early-late** | 只看 early off / early 0-1 |
| **weak-strong** | 只看 weak off / weak 1 |

**矩阵视图**：按 layer 分组，行 = K，列 = 4 种调度组合。  
同一行只差 K；同一列只差调度；配合固定的 prompt，可以直接横向对照。

每个视频卡片包含：

- 视频播放器（默认只加载封面图，点击播放才拉取 mp4）
- 显眼的 config 条：短 ID + `layer · K · early · weak`
- 参数徽章：layers / K / steps / weak K + strong% / update mode / XSA / 时长
- 调度示意：
  - 4 个采样步（t0=1000 → t3=250）哪些施加 loop
  - 7 个视频 chunk 的 strong / weak 分布
  - 30 层 transformer 中参与 loop 的层
- 星级评分（写入浏览器 localStorage）
- 「对比」按钮：最多选 4 个，可勾选「同步播放/暂停」一起看

顶部还有 **提亮** 开关和 1.0–2.2× 滑杆（默认 1.35×）。  
提亮只作用于网页显示（CSS `brightness/contrast`），**不修改源 mp4**。  
暗画面可能来自 prompt 本身（黄昏/夜景）或 loop 失败；判断失败时请关掉提亮看原始亮度。

---

## 超参数含义

### `loop_indices`（layer）

参与 loop 的 transformer block 范围，**0-based、闭区间**，模型共 30 层（0–29）。

- 单层：`28`
- 连续区间：`1-3` 表示 block 1、2、3 作为一整组
- 整组重复：`1-3` + K=2 的执行顺序是 `1,2,3,1,2,3`
- 不支持不相交的多个集合；需要拆成多次运行

### `loop_k`（K）

选中的层组在**每次 denoising call** 中的**总执行次数**。

- `K=1`：等于不循环
- `K=4`：整组层执行 4 遍
- 不是“额外次数”；clean-context refresh 始终只执行 1 遍

### `early_late_enabled` / `loop_sampling_steps`

每个视频 chunk 有 4 次 denoising call：

```
t0 = 1000
t1 ≈ 750
t2 ≈ 500
t3 ≈ 250
```

`early-late` 决定哪些 call 施加 loop：

| 设置 | 行为 |
|---|---|
| `early off` | 4 步都按 K 循环 |
| `early 0-1` | 只有 t0、t1 循环；t2、t3 自动 K=1 |
| `early 2-3` | 只有 t2、t3 循环；t0、t1 自动 K=1 |

索引是**去噪 call 的序号**，不是 timestep 数值，也不受 timestep warping 影响。

### `weak_strong_enabled` / `strong_fraction` / `weak_k`

沿**视频时间方向**按 chunk 改变 K。

- `latent_frames=21` → 7 个 chunk（每 3 个 latent 帧 = 1 个 chunk = 0.75 秒）
- `strong_fraction=0.5` → 前 `ceil(7×0.5)=4` 个 chunk 用 strong K（即 `loop_k`）
- 其余 3 个 chunk 用 `weak_k`（默认 1）

默认序列：

```
[K, K, K, K, 1, 1, 1]
```

即 **Strong Loop in early video segment, Weak Loop in late video segment**。

注意：当 `K=1` 时 strong 和 weak 都是 1，weak-strong 实际不起作用。

### `loop_update_mode`

| 模式 | 行为 |
|---|---|
| `standard` | 整组层直接重复执行 |
| `ode` | 每个完整 pass 后做松弛更新 `h + (g(h) - h) / K` |

### `loop_xsa`

是否启用 XSA（去掉与 value 平行的 attention 分量）。  
本网格统一 **XSA off**；在更早的 sweep 中，XSA on 常让画面出现更明显的颗粒噪声。

### `latent_frames`

生成帧数：

```
F = 4 × (L - 1) + 1
时长 = F / 16 秒
```

| latent_frames | 帧数 | 时长 | chunk 数 |
|---:|---:|---:|---:|
| 21 | 81 | 5.0625 s | 7 |
| 81 | 321 | 20.0625 s | 27 |

### 其他固定项

- `seed=0`：每个 config 重置到 seed；同一 config 内按 prompt 顺序推进 RNG
- `denoising_steps=[1000, 750, 500, 250]`
- `timestep_shift=5.0`
- `context_noise=0`
- checkpoint：`self_forcing_dmd.pt`，只含 `generator_ema`
  - `--no-ema` 会直接 `KeyError: 'generator'`，本 checkpoint 只能走 EMA
- **guidance**：当前 DMD few-step 路径是单条件分支，没有 CFG/uncond，
  `guidance_scale` 不生效；本批次没有搜索该轴

---

## 三个 prompt

1. A quiet coastal village at blue hour, waves moving under lantern light
2. A vibrant tropical fish swimming gracefully among colorful coral reefs in a clear, turquoise ocean. The fish has bright blue and yellow scales with a small, distinctive orange spot on its side, its fins moving fluidly. The coral reefs are alive with a variety of marine life, including small schools of colorful fish and sea turtles gliding by. The water is crystal clear, allowing for a view of the sandy ocean floor below. The reef itself is adorned with a mix of hard and soft corals in shades of red, orange, and green. The photo captures the fish from a slightly elevated angle, emphasizing its lively movements and the vivid colors of its surroundings. A close-up shot with dynamic movement.
3. A vibrant anime illustration in a lush green style of a large plant monster walking through a bustling airport. The creature has a body composed of various leaves, vines, and flowers, with large green eyes and a mischievous grin. Its limbs are thick and robust, allowing it to move with ease through the terminal. The background features a busy airport with people rushing past, luggage carts, and overhead lights. The ceiling is adorned with hanging plants and tropical foliage. The camera angle is from behind the monster, capturing its dynamic stride and the chaotic environment around it.

---

## 复现

### 单配置

```bash
python batch_infer.py \
  --prompt-file prompt.txt \
  --latent-frames 21 \
  --seed 0 \
  --loop-indices 28 \
  --loop-k 4 \
  --loop-update-mode ode \
  --no-loop-xsa \
  --early-late-settings 0-1 \
  --weak-strong-settings '[null]' \
  --output-dir outputs/my_run
```

### 只生成计划、不加载模型

```bash
python batch_infer.py --plan-only ...
```

### 默认 48 网格

```bash
python batch_infer.py \
  --prompt-file prompt.txt \
  --latent-frames 21 \
  --seed 0 \
  --no-loop-xsa \
  --loop-indices 1 28 14 1-3 \
  --loop-k 1 2 4 \
  --early-late-settings off 0-1 \
  --weak-strong-settings '[null, {"weak_k": 1, "strong_fraction": 0.5}]' \
  --output-dir outputs/default_grid
```

`batch_infer.py` 会把四类配置做笛卡尔积，每个 config 对 prompt 文件的每一行生成一个视频。

---

## 实验设置

- 模型：Self-Forcing 1.3B（Wan2.1 T2V 1.3B backbone + DMD few-step checkpoint）
- 精度/权重：EMA
- 硬件：1 × NVIDIA A100-PCIE-40GB
- 分辨率：832×480
- 每个 config 3 条 prompt
- 5 秒视频单 config 约 150–170 秒（含模型加载）
- 20 秒视频单 config 约 310–350 秒

---

## 观察到的现象（定性，仅供参考）

这些是我们在更早、更大范围的 sweep 中肉眼观察到的趋势，**不是定量结论**；
本仓库的 48 网格是为了让你自己横向对照，最终判断以视频为准。

- **全层 / 多层 loop 很容易崩坏**：出现噪声、纯色、网格纹理或黑屏。
- **层位置非常关键**：在这个 checkpoint 上，单独循环 block 28 在 K=2/3/4 下都能保持场景；
  block 27 在部分 prompt 上后期撕裂；block 29 褪色发白；block 14 语义漂移；
  任何包含 28 的多层区间（27-29、26-29、24-29 等）都更容易崩。
- **K 不是越大越好**：block 28 上 K=2/3/4 稳定，K=6 开始出现颗粒噪声。
- **采样步窗口**：全层实验里只有只在 step 0 循环偶尔能撑住；`0-1` 与 `2-3` 更容易崩。
- **20 秒长视频**：在更早的 20s sweep 中，只有 `block 28 + K=4 + 仅 steps 0-1` 全程保持连贯；
  全步 K=2/K=4 和 strong50%/weak1 约 10 秒后出现横向彩色条纹；多层区间从 5 秒起就退化。
- **XSA on** 会让 block 28 出现明显颗粒噪声，且不能救回其他层。
- `flicker` / `drift` 是帧间灰度差代理指标，**不是质量分数**；
  崩坏成静态纹理时数值反而会变低。

---

## 目录结构

```
.
├── index.html          # 静态页面（矩阵视图、过滤、对比、评分、提亮）
├── data.js             # 48 个配置的元数据 + 视频索引
├── videos/
│   ├── d000_l1_k1_earlyoff_weakoff/
│   │   ├── prompt_1.mp4
│   │   ├── prompt_1.jpg   # 封面图
│   │   └── ...
│   └── ...
├── .nojekyll           # 让 GitHub Pages 不做 Jekyll 处理
└── README.md
```

---

## 部署到 GitHub Pages

1. 仓库 Settings → General → 确认仓库为 **Public**
2. Settings → Pages
3. Source 选 **Deploy from a branch**
4. Branch 选 **main**，目录选 **/ (root)**
5. Save，等待 1–2 分钟
6. 访问 `https://<org>.github.io/<repo>/`

> 注意：private 仓库在免费计划下不能开公开 Pages；如果仓库保持 private，
> 需要把 Pages 设为仅组织成员可见（需要相应付费计划）。

---

## 限制

- 只覆盖 inference-time loop，不包含 training-based loop 的训练代码
- 只有一个 checkpoint、一个 seed、3 条 prompt；结论未必泛化到其他模型/数据
- 没有自动质量指标；所有比较以人工观看为准
- 当前 DMD few-step 路径不支持 CFG/guidance
- 6 个「复用」格子来自此前的 sweep，生成参数与默认网格一致，但不是同一次运行

---

## License / 致谢

模型与权重遵循其原始仓库/许可证；本仓库只包含实验产物与展示页面，用于研究与对比。
