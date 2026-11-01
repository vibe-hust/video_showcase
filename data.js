window.GRID_DATA = {
 "prompts": [
  {
   "index": 1,
   "line": 1,
   "text": "A quiet coastal village at blue hour, waves moving under lantern light"
  },
  {
   "index": 2,
   "line": 2,
   "text": "A vibrant tropical fish swimming gracefully among colorful coral reefs in a clear, turquoise ocean. The fish has bright blue and yellow scales with a small, distinctive orange spot on its side, its fins moving fluidly. The coral reefs are alive with a variety of marine life, including small schools of colorful fish and sea turtles gliding by. The water is crystal clear, allowing for a view of the sandy ocean floor below. The reef itself is adorned with a mix of hard and soft corals in shades of red, orange, and green. The photo captures the fish from a slightly elevated angle, emphasizing its lively movements and the vivid colors of its surroundings. A close-up shot with dynamic movement."
  },
  {
   "index": 3,
   "line": 3,
   "text": "A vibrant anime illustration in a lush green style of a large plant monster walking through a bustling airport. The creature has a body composed of various leaves, vines, and flowers, with large green eyes and a mischievous grin. Its limbs are thick and robust, allowing it to move with ease through the terminal. The background features a busy airport with people rushing past, luggage carts, and overhead lights. The ceiling is adorned with hanging plants and tropical foliage. The camera angle is from behind the monster, capturing its dynamic stride and the chaotic environment around it."
  }
 ],
 "layers": [
  "1",
  "14",
  "28",
  "1-3"
 ],
 "ks": [
  1,
  2,
  4
 ],
 "schedules": [
  {
   "id": "off_off",
   "label": "early off · weak off"
  },
  {
   "id": "off_weak1",
   "label": "early off · weak 1"
  },
  {
   "id": "early01_off",
   "label": "early 0-1 · weak off"
  },
  {
   "id": "early01_weak1",
   "label": "early 0-1 · weak 1"
  }
 ],
 "cells": {
  "1|1|off_off": {
   "id": "d000_l1_k1_earlyoff_weakoff",
   "source": "new",
   "params": {
    "checkpoint": "/root/rivermind-data/infer/self_forcing_1b_patched/models/checkpoints/self_forcing_dmd.pt",
    "use_ema": true,
    "seed": 0,
    "latent_frames": 21,
    "kv_cache_frames": 21,
    "vae_decode_chunk_frames": 3,
    "denoising_steps": [
     1000,
     750,
     500,
     250
    ],
    "warp_denoising_step": true,
    "timestep_shift": 5.0,
    "context_noise": 0,
    "modifications_enabled": true,
    "loop_update_mode": "ode",
    "loop_xsa": false,
    "loop_cross_gate_checkpoint": null,
    "step_k_schedule": "off",
    "chunk_k_schedule": "off",
    "loop_indices": "1",
    "loop_k": 1,
    "early_late_enabled": false,
    "loop_sampling_steps": "0-1",
    "weak_strong_enabled": false,
    "strong_k": 1,
    "weak_k": 1,
    "strong_fraction": 0.5
   },
   "videos": [
    {
     "prompt": 1,
     "path": "videos/d000_l1_k1_earlyoff_weakoff/prompt_1.mp4"
    },
    {
     "prompt": 2,
     "path": "videos/d000_l1_k1_earlyoff_weakoff/prompt_2.mp4"
    },
    {
     "prompt": 3,
     "path": "videos/d000_l1_k1_earlyoff_weakoff/prompt_3.mp4"
    }
   ]
  },
  "1|1|off_weak1": {
   "id": "d001_l1_k1_earlyoff_weakw1",
   "source": "new",
   "params": {
    "checkpoint": "/root/rivermind-data/infer/self_forcing_1b_patched/models/checkpoints/self_forcing_dmd.pt",
    "use_ema": true,
    "seed": 0,
    "latent_frames": 21,
    "kv_cache_frames": 21,
    "vae_decode_chunk_frames": 3,
    "denoising_steps": [
     1000,
     750,
     500,
     250
    ],
    "warp_denoising_step": true,
    "timestep_shift": 5.0,
    "context_noise": 0,
    "modifications_enabled": true,
    "loop_update_mode": "ode",
    "loop_xsa": false,
    "loop_cross_gate_checkpoint": null,
    "step_k_schedule": "off",
    "chunk_k_schedule": "off",
    "loop_indices": "1",
    "loop_k": 1,
    "early_late_enabled": false,
    "loop_sampling_steps": "0-1",
    "weak_strong_enabled": true,
    "strong_k": 1,
    "weak_k": 1,
    "strong_fraction": 0.5
   },
   "videos": [
    {
     "prompt": 1,
     "path": "videos/d001_l1_k1_earlyoff_weakw1/prompt_1.mp4"
    },
    {
     "prompt": 2,
     "path": "videos/d001_l1_k1_earlyoff_weakw1/prompt_2.mp4"
    },
    {
     "prompt": 3,
     "path": "videos/d001_l1_k1_earlyoff_weakw1/prompt_3.mp4"
    }
   ]
  },
  "1|1|early01_off": {
   "id": "d002_l1_k1_early01_weakoff",
   "source": "new",
   "params": {
    "checkpoint": "/root/rivermind-data/infer/self_forcing_1b_patched/models/checkpoints/self_forcing_dmd.pt",
    "use_ema": true,
    "seed": 0,
    "latent_frames": 21,
    "kv_cache_frames": 21,
    "vae_decode_chunk_frames": 3,
    "denoising_steps": [
     1000,
     750,
     500,
     250
    ],
    "warp_denoising_step": true,
    "timestep_shift": 5.0,
    "context_noise": 0,
    "modifications_enabled": true,
    "loop_update_mode": "ode",
    "loop_xsa": false,
    "loop_cross_gate_checkpoint": null,
    "step_k_schedule": "off",
    "chunk_k_schedule": "off",
    "loop_indices": "1",
    "loop_k": 1,
    "early_late_enabled": true,
    "loop_sampling_steps": "0-1",
    "weak_strong_enabled": false,
    "strong_k": 1,
    "weak_k": 1,
    "strong_fraction": 0.5
   },
   "videos": [
    {
     "prompt": 1,
     "path": "videos/d002_l1_k1_early01_weakoff/prompt_1.mp4"
    },
    {
     "prompt": 2,
     "path": "videos/d002_l1_k1_early01_weakoff/prompt_2.mp4"
    },
    {
     "prompt": 3,
     "path": "videos/d002_l1_k1_early01_weakoff/prompt_3.mp4"
    }
   ]
  },
  "1|1|early01_weak1": {
   "id": "d003_l1_k1_early01_weakw1",
   "source": "new",
   "params": {
    "checkpoint": "/root/rivermind-data/infer/self_forcing_1b_patched/models/checkpoints/self_forcing_dmd.pt",
    "use_ema": true,
    "seed": 0,
    "latent_frames": 21,
    "kv_cache_frames": 21,
    "vae_decode_chunk_frames": 3,
    "denoising_steps": [
     1000,
     750,
     500,
     250
    ],
    "warp_denoising_step": true,
    "timestep_shift": 5.0,
    "context_noise": 0,
    "modifications_enabled": true,
    "loop_update_mode": "ode",
    "loop_xsa": false,
    "loop_cross_gate_checkpoint": null,
    "step_k_schedule": "off",
    "chunk_k_schedule": "off",
    "loop_indices": "1",
    "loop_k": 1,
    "early_late_enabled": true,
    "loop_sampling_steps": "0-1",
    "weak_strong_enabled": true,
    "strong_k": 1,
    "weak_k": 1,
    "strong_fraction": 0.5
   },
   "videos": [
    {
     "prompt": 1,
     "path": "videos/d003_l1_k1_early01_weakw1/prompt_1.mp4"
    },
    {
     "prompt": 2,
     "path": "videos/d003_l1_k1_early01_weakw1/prompt_2.mp4"
    },
    {
     "prompt": 3,
     "path": "videos/d003_l1_k1_early01_weakw1/prompt_3.mp4"
    }
   ]
  },
  "1|2|off_weak1": {
   "id": "d005_l1_k2_earlyoff_weakw1",
   "source": "new",
   "params": {
    "checkpoint": "/root/rivermind-data/infer/self_forcing_1b_patched/models/checkpoints/self_forcing_dmd.pt",
    "use_ema": true,
    "seed": 0,
    "latent_frames": 21,
    "kv_cache_frames": 21,
    "vae_decode_chunk_frames": 3,
    "denoising_steps": [
     1000,
     750,
     500,
     250
    ],
    "warp_denoising_step": true,
    "timestep_shift": 5.0,
    "context_noise": 0,
    "modifications_enabled": true,
    "loop_update_mode": "ode",
    "loop_xsa": false,
    "loop_cross_gate_checkpoint": null,
    "step_k_schedule": "off",
    "chunk_k_schedule": "off",
    "loop_indices": "1",
    "loop_k": 2,
    "early_late_enabled": false,
    "loop_sampling_steps": "0-1",
    "weak_strong_enabled": true,
    "strong_k": 2,
    "weak_k": 1,
    "strong_fraction": 0.5
   },
   "videos": [
    {
     "prompt": 1,
     "path": "videos/d005_l1_k2_earlyoff_weakw1/prompt_1.mp4"
    },
    {
     "prompt": 2,
     "path": "videos/d005_l1_k2_earlyoff_weakw1/prompt_2.mp4"
    },
    {
     "prompt": 3,
     "path": "videos/d005_l1_k2_earlyoff_weakw1/prompt_3.mp4"
    }
   ]
  },
  "1|2|early01_off": {
   "id": "d006_l1_k2_early01_weakoff",
   "source": "new",
   "params": {
    "checkpoint": "/root/rivermind-data/infer/self_forcing_1b_patched/models/checkpoints/self_forcing_dmd.pt",
    "use_ema": true,
    "seed": 0,
    "latent_frames": 21,
    "kv_cache_frames": 21,
    "vae_decode_chunk_frames": 3,
    "denoising_steps": [
     1000,
     750,
     500,
     250
    ],
    "warp_denoising_step": true,
    "timestep_shift": 5.0,
    "context_noise": 0,
    "modifications_enabled": true,
    "loop_update_mode": "ode",
    "loop_xsa": false,
    "loop_cross_gate_checkpoint": null,
    "step_k_schedule": "off",
    "chunk_k_schedule": "off",
    "loop_indices": "1",
    "loop_k": 2,
    "early_late_enabled": true,
    "loop_sampling_steps": "0-1",
    "weak_strong_enabled": false,
    "strong_k": 2,
    "weak_k": 1,
    "strong_fraction": 0.5
   },
   "videos": [
    {
     "prompt": 1,
     "path": "videos/d006_l1_k2_early01_weakoff/prompt_1.mp4"
    },
    {
     "prompt": 2,
     "path": "videos/d006_l1_k2_early01_weakoff/prompt_2.mp4"
    },
    {
     "prompt": 3,
     "path": "videos/d006_l1_k2_early01_weakoff/prompt_3.mp4"
    }
   ]
  },
  "1|2|early01_weak1": {
   "id": "d007_l1_k2_early01_weakw1",
   "source": "new",
   "params": {
    "checkpoint": "/root/rivermind-data/infer/self_forcing_1b_patched/models/checkpoints/self_forcing_dmd.pt",
    "use_ema": true,
    "seed": 0,
    "latent_frames": 21,
    "kv_cache_frames": 21,
    "vae_decode_chunk_frames": 3,
    "denoising_steps": [
     1000,
     750,
     500,
     250
    ],
    "warp_denoising_step": true,
    "timestep_shift": 5.0,
    "context_noise": 0,
    "modifications_enabled": true,
    "loop_update_mode": "ode",
    "loop_xsa": false,
    "loop_cross_gate_checkpoint": null,
    "step_k_schedule": "off",
    "chunk_k_schedule": "off",
    "loop_indices": "1",
    "loop_k": 2,
    "early_late_enabled": true,
    "loop_sampling_steps": "0-1",
    "weak_strong_enabled": true,
    "strong_k": 2,
    "weak_k": 1,
    "strong_fraction": 0.5
   },
   "videos": [
    {
     "prompt": 1,
     "path": "videos/d007_l1_k2_early01_weakw1/prompt_1.mp4"
    },
    {
     "prompt": 2,
     "path": "videos/d007_l1_k2_early01_weakw1/prompt_2.mp4"
    },
    {
     "prompt": 3,
     "path": "videos/d007_l1_k2_early01_weakw1/prompt_3.mp4"
    }
   ]
  },
  "1|4|off_off": {
   "id": "d008_l1_k4_earlyoff_weakoff",
   "source": "new",
   "params": {
    "checkpoint": "/root/rivermind-data/infer/self_forcing_1b_patched/models/checkpoints/self_forcing_dmd.pt",
    "use_ema": true,
    "seed": 0,
    "latent_frames": 21,
    "kv_cache_frames": 21,
    "vae_decode_chunk_frames": 3,
    "denoising_steps": [
     1000,
     750,
     500,
     250
    ],
    "warp_denoising_step": true,
    "timestep_shift": 5.0,
    "context_noise": 0,
    "modifications_enabled": true,
    "loop_update_mode": "ode",
    "loop_xsa": false,
    "loop_cross_gate_checkpoint": null,
    "step_k_schedule": "off",
    "chunk_k_schedule": "off",
    "loop_indices": "1",
    "loop_k": 4,
    "early_late_enabled": false,
    "loop_sampling_steps": "0-1",
    "weak_strong_enabled": false,
    "strong_k": 4,
    "weak_k": 1,
    "strong_fraction": 0.5
   },
   "videos": [
    {
     "prompt": 1,
     "path": "videos/d008_l1_k4_earlyoff_weakoff/prompt_1.mp4"
    },
    {
     "prompt": 2,
     "path": "videos/d008_l1_k4_earlyoff_weakoff/prompt_2.mp4"
    },
    {
     "prompt": 3,
     "path": "videos/d008_l1_k4_earlyoff_weakoff/prompt_3.mp4"
    }
   ]
  },
  "1|4|off_weak1": {
   "id": "d009_l1_k4_earlyoff_weakw1",
   "source": "new",
   "params": {
    "checkpoint": "/root/rivermind-data/infer/self_forcing_1b_patched/models/checkpoints/self_forcing_dmd.pt",
    "use_ema": true,
    "seed": 0,
    "latent_frames": 21,
    "kv_cache_frames": 21,
    "vae_decode_chunk_frames": 3,
    "denoising_steps": [
     1000,
     750,
     500,
     250
    ],
    "warp_denoising_step": true,
    "timestep_shift": 5.0,
    "context_noise": 0,
    "modifications_enabled": true,
    "loop_update_mode": "ode",
    "loop_xsa": false,
    "loop_cross_gate_checkpoint": null,
    "step_k_schedule": "off",
    "chunk_k_schedule": "off",
    "loop_indices": "1",
    "loop_k": 4,
    "early_late_enabled": false,
    "loop_sampling_steps": "0-1",
    "weak_strong_enabled": true,
    "strong_k": 4,
    "weak_k": 1,
    "strong_fraction": 0.5
   },
   "videos": [
    {
     "prompt": 1,
     "path": "videos/d009_l1_k4_earlyoff_weakw1/prompt_1.mp4"
    },
    {
     "prompt": 2,
     "path": "videos/d009_l1_k4_earlyoff_weakw1/prompt_2.mp4"
    },
    {
     "prompt": 3,
     "path": "videos/d009_l1_k4_earlyoff_weakw1/prompt_3.mp4"
    }
   ]
  },
  "1|4|early01_off": {
   "id": "d010_l1_k4_early01_weakoff",
   "source": "new",
   "params": {
    "checkpoint": "/root/rivermind-data/infer/self_forcing_1b_patched/models/checkpoints/self_forcing_dmd.pt",
    "use_ema": true,
    "seed": 0,
    "latent_frames": 21,
    "kv_cache_frames": 21,
    "vae_decode_chunk_frames": 3,
    "denoising_steps": [
     1000,
     750,
     500,
     250
    ],
    "warp_denoising_step": true,
    "timestep_shift": 5.0,
    "context_noise": 0,
    "modifications_enabled": true,
    "loop_update_mode": "ode",
    "loop_xsa": false,
    "loop_cross_gate_checkpoint": null,
    "step_k_schedule": "off",
    "chunk_k_schedule": "off",
    "loop_indices": "1",
    "loop_k": 4,
    "early_late_enabled": true,
    "loop_sampling_steps": "0-1",
    "weak_strong_enabled": false,
    "strong_k": 4,
    "weak_k": 1,
    "strong_fraction": 0.5
   },
   "videos": [
    {
     "prompt": 1,
     "path": "videos/d010_l1_k4_early01_weakoff/prompt_1.mp4"
    },
    {
     "prompt": 2,
     "path": "videos/d010_l1_k4_early01_weakoff/prompt_2.mp4"
    },
    {
     "prompt": 3,
     "path": "videos/d010_l1_k4_early01_weakoff/prompt_3.mp4"
    }
   ]
  },
  "1|4|early01_weak1": {
   "id": "d011_l1_k4_early01_weakw1",
   "source": "new",
   "params": {
    "checkpoint": "/root/rivermind-data/infer/self_forcing_1b_patched/models/checkpoints/self_forcing_dmd.pt",
    "use_ema": true,
    "seed": 0,
    "latent_frames": 21,
    "kv_cache_frames": 21,
    "vae_decode_chunk_frames": 3,
    "denoising_steps": [
     1000,
     750,
     500,
     250
    ],
    "warp_denoising_step": true,
    "timestep_shift": 5.0,
    "context_noise": 0,
    "modifications_enabled": true,
    "loop_update_mode": "ode",
    "loop_xsa": false,
    "loop_cross_gate_checkpoint": null,
    "step_k_schedule": "off",
    "chunk_k_schedule": "off",
    "loop_indices": "1",
    "loop_k": 4,
    "early_late_enabled": true,
    "loop_sampling_steps": "0-1",
    "weak_strong_enabled": true,
    "strong_k": 4,
    "weak_k": 1,
    "strong_fraction": 0.5
   },
   "videos": [
    {
     "prompt": 1,
     "path": "videos/d011_l1_k4_early01_weakw1/prompt_1.mp4"
    },
    {
     "prompt": 2,
     "path": "videos/d011_l1_k4_early01_weakw1/prompt_2.mp4"
    },
    {
     "prompt": 3,
     "path": "videos/d011_l1_k4_early01_weakw1/prompt_3.mp4"
    }
   ]
  },
  "28|1|off_off": {
   "id": "d012_l28_k1_earlyoff_weakoff",
   "source": "new",
   "params": {
    "checkpoint": "/root/rivermind-data/infer/self_forcing_1b_patched/models/checkpoints/self_forcing_dmd.pt",
    "use_ema": true,
    "seed": 0,
    "latent_frames": 21,
    "kv_cache_frames": 21,
    "vae_decode_chunk_frames": 3,
    "denoising_steps": [
     1000,
     750,
     500,
     250
    ],
    "warp_denoising_step": true,
    "timestep_shift": 5.0,
    "context_noise": 0,
    "modifications_enabled": true,
    "loop_update_mode": "ode",
    "loop_xsa": false,
    "loop_cross_gate_checkpoint": null,
    "step_k_schedule": "off",
    "chunk_k_schedule": "off",
    "loop_indices": "28",
    "loop_k": 1,
    "early_late_enabled": false,
    "loop_sampling_steps": "0-1",
    "weak_strong_enabled": false,
    "strong_k": 1,
    "weak_k": 1,
    "strong_fraction": 0.5
   },
   "videos": [
    {
     "prompt": 1,
     "path": "videos/d012_l28_k1_earlyoff_weakoff/prompt_1.mp4"
    },
    {
     "prompt": 2,
     "path": "videos/d012_l28_k1_earlyoff_weakoff/prompt_2.mp4"
    },
    {
     "prompt": 3,
     "path": "videos/d012_l28_k1_earlyoff_weakoff/prompt_3.mp4"
    }
   ]
  },
  "28|1|off_weak1": {
   "id": "d013_l28_k1_earlyoff_weakw1",
   "source": "new",
   "params": {
    "checkpoint": "/root/rivermind-data/infer/self_forcing_1b_patched/models/checkpoints/self_forcing_dmd.pt",
    "use_ema": true,
    "seed": 0,
    "latent_frames": 21,
    "kv_cache_frames": 21,
    "vae_decode_chunk_frames": 3,
    "denoising_steps": [
     1000,
     750,
     500,
     250
    ],
    "warp_denoising_step": true,
    "timestep_shift": 5.0,
    "context_noise": 0,
    "modifications_enabled": true,
    "loop_update_mode": "ode",
    "loop_xsa": false,
    "loop_cross_gate_checkpoint": null,
    "step_k_schedule": "off",
    "chunk_k_schedule": "off",
    "loop_indices": "28",
    "loop_k": 1,
    "early_late_enabled": false,
    "loop_sampling_steps": "0-1",
    "weak_strong_enabled": true,
    "strong_k": 1,
    "weak_k": 1,
    "strong_fraction": 0.5
   },
   "videos": [
    {
     "prompt": 1,
     "path": "videos/d013_l28_k1_earlyoff_weakw1/prompt_1.mp4"
    },
    {
     "prompt": 2,
     "path": "videos/d013_l28_k1_earlyoff_weakw1/prompt_2.mp4"
    },
    {
     "prompt": 3,
     "path": "videos/d013_l28_k1_earlyoff_weakw1/prompt_3.mp4"
    }
   ]
  },
  "28|1|early01_off": {
   "id": "d014_l28_k1_early01_weakoff",
   "source": "new",
   "params": {
    "checkpoint": "/root/rivermind-data/infer/self_forcing_1b_patched/models/checkpoints/self_forcing_dmd.pt",
    "use_ema": true,
    "seed": 0,
    "latent_frames": 21,
    "kv_cache_frames": 21,
    "vae_decode_chunk_frames": 3,
    "denoising_steps": [
     1000,
     750,
     500,
     250
    ],
    "warp_denoising_step": true,
    "timestep_shift": 5.0,
    "context_noise": 0,
    "modifications_enabled": true,
    "loop_update_mode": "ode",
    "loop_xsa": false,
    "loop_cross_gate_checkpoint": null,
    "step_k_schedule": "off",
    "chunk_k_schedule": "off",
    "loop_indices": "28",
    "loop_k": 1,
    "early_late_enabled": true,
    "loop_sampling_steps": "0-1",
    "weak_strong_enabled": false,
    "strong_k": 1,
    "weak_k": 1,
    "strong_fraction": 0.5
   },
   "videos": [
    {
     "prompt": 1,
     "path": "videos/d014_l28_k1_early01_weakoff/prompt_1.mp4"
    },
    {
     "prompt": 2,
     "path": "videos/d014_l28_k1_early01_weakoff/prompt_2.mp4"
    },
    {
     "prompt": 3,
     "path": "videos/d014_l28_k1_early01_weakoff/prompt_3.mp4"
    }
   ]
  },
  "28|1|early01_weak1": {
   "id": "d015_l28_k1_early01_weakw1",
   "source": "new",
   "params": {
    "checkpoint": "/root/rivermind-data/infer/self_forcing_1b_patched/models/checkpoints/self_forcing_dmd.pt",
    "use_ema": true,
    "seed": 0,
    "latent_frames": 21,
    "kv_cache_frames": 21,
    "vae_decode_chunk_frames": 3,
    "denoising_steps": [
     1000,
     750,
     500,
     250
    ],
    "warp_denoising_step": true,
    "timestep_shift": 5.0,
    "context_noise": 0,
    "modifications_enabled": true,
    "loop_update_mode": "ode",
    "loop_xsa": false,
    "loop_cross_gate_checkpoint": null,
    "step_k_schedule": "off",
    "chunk_k_schedule": "off",
    "loop_indices": "28",
    "loop_k": 1,
    "early_late_enabled": true,
    "loop_sampling_steps": "0-1",
    "weak_strong_enabled": true,
    "strong_k": 1,
    "weak_k": 1,
    "strong_fraction": 0.5
   },
   "videos": [
    {
     "prompt": 1,
     "path": "videos/d015_l28_k1_early01_weakw1/prompt_1.mp4"
    },
    {
     "prompt": 2,
     "path": "videos/d015_l28_k1_early01_weakw1/prompt_2.mp4"
    },
    {
     "prompt": 3,
     "path": "videos/d015_l28_k1_early01_weakw1/prompt_3.mp4"
    }
   ]
  },
  "28|2|early01_weak1": {
   "id": "d019_l28_k2_early01_weakw1",
   "source": "new",
   "params": {
    "checkpoint": "/root/rivermind-data/infer/self_forcing_1b_patched/models/checkpoints/self_forcing_dmd.pt",
    "use_ema": true,
    "seed": 0,
    "latent_frames": 21,
    "kv_cache_frames": 21,
    "vae_decode_chunk_frames": 3,
    "denoising_steps": [
     1000,
     750,
     500,
     250
    ],
    "warp_denoising_step": true,
    "timestep_shift": 5.0,
    "context_noise": 0,
    "modifications_enabled": true,
    "loop_update_mode": "ode",
    "loop_xsa": false,
    "loop_cross_gate_checkpoint": null,
    "step_k_schedule": "off",
    "chunk_k_schedule": "off",
    "loop_indices": "28",
    "loop_k": 2,
    "early_late_enabled": true,
    "loop_sampling_steps": "0-1",
    "weak_strong_enabled": true,
    "strong_k": 2,
    "weak_k": 1,
    "strong_fraction": 0.5
   },
   "videos": [
    {
     "prompt": 1,
     "path": "videos/d019_l28_k2_early01_weakw1/prompt_1.mp4"
    },
    {
     "prompt": 2,
     "path": "videos/d019_l28_k2_early01_weakw1/prompt_2.mp4"
    },
    {
     "prompt": 3,
     "path": "videos/d019_l28_k2_early01_weakw1/prompt_3.mp4"
    }
   ]
  },
  "28|4|off_weak1": {
   "id": "d021_l28_k4_earlyoff_weakw1",
   "source": "new",
   "params": {
    "checkpoint": "/root/rivermind-data/infer/self_forcing_1b_patched/models/checkpoints/self_forcing_dmd.pt",
    "use_ema": true,
    "seed": 0,
    "latent_frames": 21,
    "kv_cache_frames": 21,
    "vae_decode_chunk_frames": 3,
    "denoising_steps": [
     1000,
     750,
     500,
     250
    ],
    "warp_denoising_step": true,
    "timestep_shift": 5.0,
    "context_noise": 0,
    "modifications_enabled": true,
    "loop_update_mode": "ode",
    "loop_xsa": false,
    "loop_cross_gate_checkpoint": null,
    "step_k_schedule": "off",
    "chunk_k_schedule": "off",
    "loop_indices": "28",
    "loop_k": 4,
    "early_late_enabled": false,
    "loop_sampling_steps": "0-1",
    "weak_strong_enabled": true,
    "strong_k": 4,
    "weak_k": 1,
    "strong_fraction": 0.5
   },
   "videos": [
    {
     "prompt": 1,
     "path": "videos/d021_l28_k4_earlyoff_weakw1/prompt_1.mp4"
    },
    {
     "prompt": 2,
     "path": "videos/d021_l28_k4_earlyoff_weakw1/prompt_2.mp4"
    },
    {
     "prompt": 3,
     "path": "videos/d021_l28_k4_earlyoff_weakw1/prompt_3.mp4"
    }
   ]
  },
  "28|4|early01_off": {
   "id": "d022_l28_k4_early01_weakoff",
   "source": "new",
   "params": {
    "checkpoint": "/root/rivermind-data/infer/self_forcing_1b_patched/models/checkpoints/self_forcing_dmd.pt",
    "use_ema": true,
    "seed": 0,
    "latent_frames": 21,
    "kv_cache_frames": 21,
    "vae_decode_chunk_frames": 3,
    "denoising_steps": [
     1000,
     750,
     500,
     250
    ],
    "warp_denoising_step": true,
    "timestep_shift": 5.0,
    "context_noise": 0,
    "modifications_enabled": true,
    "loop_update_mode": "ode",
    "loop_xsa": false,
    "loop_cross_gate_checkpoint": null,
    "step_k_schedule": "off",
    "chunk_k_schedule": "off",
    "loop_indices": "28",
    "loop_k": 4,
    "early_late_enabled": true,
    "loop_sampling_steps": "0-1",
    "weak_strong_enabled": false,
    "strong_k": 4,
    "weak_k": 1,
    "strong_fraction": 0.5
   },
   "videos": [
    {
     "prompt": 1,
     "path": "videos/d022_l28_k4_early01_weakoff/prompt_1.mp4"
    },
    {
     "prompt": 2,
     "path": "videos/d022_l28_k4_early01_weakoff/prompt_2.mp4"
    },
    {
     "prompt": 3,
     "path": "videos/d022_l28_k4_early01_weakoff/prompt_3.mp4"
    }
   ]
  },
  "28|4|early01_weak1": {
   "id": "d023_l28_k4_early01_weakw1",
   "source": "new",
   "params": {
    "checkpoint": "/root/rivermind-data/infer/self_forcing_1b_patched/models/checkpoints/self_forcing_dmd.pt",
    "use_ema": true,
    "seed": 0,
    "latent_frames": 21,
    "kv_cache_frames": 21,
    "vae_decode_chunk_frames": 3,
    "denoising_steps": [
     1000,
     750,
     500,
     250
    ],
    "warp_denoising_step": true,
    "timestep_shift": 5.0,
    "context_noise": 0,
    "modifications_enabled": true,
    "loop_update_mode": "ode",
    "loop_xsa": false,
    "loop_cross_gate_checkpoint": null,
    "step_k_schedule": "off",
    "chunk_k_schedule": "off",
    "loop_indices": "28",
    "loop_k": 4,
    "early_late_enabled": true,
    "loop_sampling_steps": "0-1",
    "weak_strong_enabled": true,
    "strong_k": 4,
    "weak_k": 1,
    "strong_fraction": 0.5
   },
   "videos": [
    {
     "prompt": 1,
     "path": "videos/d023_l28_k4_early01_weakw1/prompt_1.mp4"
    },
    {
     "prompt": 2,
     "path": "videos/d023_l28_k4_early01_weakw1/prompt_2.mp4"
    },
    {
     "prompt": 3,
     "path": "videos/d023_l28_k4_early01_weakw1/prompt_3.mp4"
    }
   ]
  },
  "14|1|off_off": {
   "id": "d024_l14_k1_earlyoff_weakoff",
   "source": "new",
   "params": {
    "checkpoint": "/root/rivermind-data/infer/self_forcing_1b_patched/models/checkpoints/self_forcing_dmd.pt",
    "use_ema": true,
    "seed": 0,
    "latent_frames": 21,
    "kv_cache_frames": 21,
    "vae_decode_chunk_frames": 3,
    "denoising_steps": [
     1000,
     750,
     500,
     250
    ],
    "warp_denoising_step": true,
    "timestep_shift": 5.0,
    "context_noise": 0,
    "modifications_enabled": true,
    "loop_update_mode": "ode",
    "loop_xsa": false,
    "loop_cross_gate_checkpoint": null,
    "step_k_schedule": "off",
    "chunk_k_schedule": "off",
    "loop_indices": "14",
    "loop_k": 1,
    "early_late_enabled": false,
    "loop_sampling_steps": "0-1",
    "weak_strong_enabled": false,
    "strong_k": 1,
    "weak_k": 1,
    "strong_fraction": 0.5
   },
   "videos": [
    {
     "prompt": 1,
     "path": "videos/d024_l14_k1_earlyoff_weakoff/prompt_1.mp4"
    },
    {
     "prompt": 2,
     "path": "videos/d024_l14_k1_earlyoff_weakoff/prompt_2.mp4"
    },
    {
     "prompt": 3,
     "path": "videos/d024_l14_k1_earlyoff_weakoff/prompt_3.mp4"
    }
   ]
  },
  "14|1|off_weak1": {
   "id": "d025_l14_k1_earlyoff_weakw1",
   "source": "new",
   "params": {
    "checkpoint": "/root/rivermind-data/infer/self_forcing_1b_patched/models/checkpoints/self_forcing_dmd.pt",
    "use_ema": true,
    "seed": 0,
    "latent_frames": 21,
    "kv_cache_frames": 21,
    "vae_decode_chunk_frames": 3,
    "denoising_steps": [
     1000,
     750,
     500,
     250
    ],
    "warp_denoising_step": true,
    "timestep_shift": 5.0,
    "context_noise": 0,
    "modifications_enabled": true,
    "loop_update_mode": "ode",
    "loop_xsa": false,
    "loop_cross_gate_checkpoint": null,
    "step_k_schedule": "off",
    "chunk_k_schedule": "off",
    "loop_indices": "14",
    "loop_k": 1,
    "early_late_enabled": false,
    "loop_sampling_steps": "0-1",
    "weak_strong_enabled": true,
    "strong_k": 1,
    "weak_k": 1,
    "strong_fraction": 0.5
   },
   "videos": [
    {
     "prompt": 1,
     "path": "videos/d025_l14_k1_earlyoff_weakw1/prompt_1.mp4"
    },
    {
     "prompt": 2,
     "path": "videos/d025_l14_k1_earlyoff_weakw1/prompt_2.mp4"
    },
    {
     "prompt": 3,
     "path": "videos/d025_l14_k1_earlyoff_weakw1/prompt_3.mp4"
    }
   ]
  },
  "14|1|early01_off": {
   "id": "d026_l14_k1_early01_weakoff",
   "source": "new",
   "params": {
    "checkpoint": "/root/rivermind-data/infer/self_forcing_1b_patched/models/checkpoints/self_forcing_dmd.pt",
    "use_ema": true,
    "seed": 0,
    "latent_frames": 21,
    "kv_cache_frames": 21,
    "vae_decode_chunk_frames": 3,
    "denoising_steps": [
     1000,
     750,
     500,
     250
    ],
    "warp_denoising_step": true,
    "timestep_shift": 5.0,
    "context_noise": 0,
    "modifications_enabled": true,
    "loop_update_mode": "ode",
    "loop_xsa": false,
    "loop_cross_gate_checkpoint": null,
    "step_k_schedule": "off",
    "chunk_k_schedule": "off",
    "loop_indices": "14",
    "loop_k": 1,
    "early_late_enabled": true,
    "loop_sampling_steps": "0-1",
    "weak_strong_enabled": false,
    "strong_k": 1,
    "weak_k": 1,
    "strong_fraction": 0.5
   },
   "videos": [
    {
     "prompt": 1,
     "path": "videos/d026_l14_k1_early01_weakoff/prompt_1.mp4"
    },
    {
     "prompt": 2,
     "path": "videos/d026_l14_k1_early01_weakoff/prompt_2.mp4"
    },
    {
     "prompt": 3,
     "path": "videos/d026_l14_k1_early01_weakoff/prompt_3.mp4"
    }
   ]
  },
  "14|1|early01_weak1": {
   "id": "d027_l14_k1_early01_weakw1",
   "source": "new",
   "params": {
    "checkpoint": "/root/rivermind-data/infer/self_forcing_1b_patched/models/checkpoints/self_forcing_dmd.pt",
    "use_ema": true,
    "seed": 0,
    "latent_frames": 21,
    "kv_cache_frames": 21,
    "vae_decode_chunk_frames": 3,
    "denoising_steps": [
     1000,
     750,
     500,
     250
    ],
    "warp_denoising_step": true,
    "timestep_shift": 5.0,
    "context_noise": 0,
    "modifications_enabled": true,
    "loop_update_mode": "ode",
    "loop_xsa": false,
    "loop_cross_gate_checkpoint": null,
    "step_k_schedule": "off",
    "chunk_k_schedule": "off",
    "loop_indices": "14",
    "loop_k": 1,
    "early_late_enabled": true,
    "loop_sampling_steps": "0-1",
    "weak_strong_enabled": true,
    "strong_k": 1,
    "weak_k": 1,
    "strong_fraction": 0.5
   },
   "videos": [
    {
     "prompt": 1,
     "path": "videos/d027_l14_k1_early01_weakw1/prompt_1.mp4"
    },
    {
     "prompt": 2,
     "path": "videos/d027_l14_k1_early01_weakw1/prompt_2.mp4"
    },
    {
     "prompt": 3,
     "path": "videos/d027_l14_k1_early01_weakw1/prompt_3.mp4"
    }
   ]
  },
  "14|2|off_weak1": {
   "id": "d029_l14_k2_earlyoff_weakw1",
   "source": "new",
   "params": {
    "checkpoint": "/root/rivermind-data/infer/self_forcing_1b_patched/models/checkpoints/self_forcing_dmd.pt",
    "use_ema": true,
    "seed": 0,
    "latent_frames": 21,
    "kv_cache_frames": 21,
    "vae_decode_chunk_frames": 3,
    "denoising_steps": [
     1000,
     750,
     500,
     250
    ],
    "warp_denoising_step": true,
    "timestep_shift": 5.0,
    "context_noise": 0,
    "modifications_enabled": true,
    "loop_update_mode": "ode",
    "loop_xsa": false,
    "loop_cross_gate_checkpoint": null,
    "step_k_schedule": "off",
    "chunk_k_schedule": "off",
    "loop_indices": "14",
    "loop_k": 2,
    "early_late_enabled": false,
    "loop_sampling_steps": "0-1",
    "weak_strong_enabled": true,
    "strong_k": 2,
    "weak_k": 1,
    "strong_fraction": 0.5
   },
   "videos": [
    {
     "prompt": 1,
     "path": "videos/d029_l14_k2_earlyoff_weakw1/prompt_1.mp4"
    },
    {
     "prompt": 2,
     "path": "videos/d029_l14_k2_earlyoff_weakw1/prompt_2.mp4"
    },
    {
     "prompt": 3,
     "path": "videos/d029_l14_k2_earlyoff_weakw1/prompt_3.mp4"
    }
   ]
  },
  "14|2|early01_off": {
   "id": "d030_l14_k2_early01_weakoff",
   "source": "new",
   "params": {
    "checkpoint": "/root/rivermind-data/infer/self_forcing_1b_patched/models/checkpoints/self_forcing_dmd.pt",
    "use_ema": true,
    "seed": 0,
    "latent_frames": 21,
    "kv_cache_frames": 21,
    "vae_decode_chunk_frames": 3,
    "denoising_steps": [
     1000,
     750,
     500,
     250
    ],
    "warp_denoising_step": true,
    "timestep_shift": 5.0,
    "context_noise": 0,
    "modifications_enabled": true,
    "loop_update_mode": "ode",
    "loop_xsa": false,
    "loop_cross_gate_checkpoint": null,
    "step_k_schedule": "off",
    "chunk_k_schedule": "off",
    "loop_indices": "14",
    "loop_k": 2,
    "early_late_enabled": true,
    "loop_sampling_steps": "0-1",
    "weak_strong_enabled": false,
    "strong_k": 2,
    "weak_k": 1,
    "strong_fraction": 0.5
   },
   "videos": [
    {
     "prompt": 1,
     "path": "videos/d030_l14_k2_early01_weakoff/prompt_1.mp4"
    },
    {
     "prompt": 2,
     "path": "videos/d030_l14_k2_early01_weakoff/prompt_2.mp4"
    },
    {
     "prompt": 3,
     "path": "videos/d030_l14_k2_early01_weakoff/prompt_3.mp4"
    }
   ]
  },
  "14|2|early01_weak1": {
   "id": "d031_l14_k2_early01_weakw1",
   "source": "new",
   "params": {
    "checkpoint": "/root/rivermind-data/infer/self_forcing_1b_patched/models/checkpoints/self_forcing_dmd.pt",
    "use_ema": true,
    "seed": 0,
    "latent_frames": 21,
    "kv_cache_frames": 21,
    "vae_decode_chunk_frames": 3,
    "denoising_steps": [
     1000,
     750,
     500,
     250
    ],
    "warp_denoising_step": true,
    "timestep_shift": 5.0,
    "context_noise": 0,
    "modifications_enabled": true,
    "loop_update_mode": "ode",
    "loop_xsa": false,
    "loop_cross_gate_checkpoint": null,
    "step_k_schedule": "off",
    "chunk_k_schedule": "off",
    "loop_indices": "14",
    "loop_k": 2,
    "early_late_enabled": true,
    "loop_sampling_steps": "0-1",
    "weak_strong_enabled": true,
    "strong_k": 2,
    "weak_k": 1,
    "strong_fraction": 0.5
   },
   "videos": [
    {
     "prompt": 1,
     "path": "videos/d031_l14_k2_early01_weakw1/prompt_1.mp4"
    },
    {
     "prompt": 2,
     "path": "videos/d031_l14_k2_early01_weakw1/prompt_2.mp4"
    },
    {
     "prompt": 3,
     "path": "videos/d031_l14_k2_early01_weakw1/prompt_3.mp4"
    }
   ]
  },
  "14|4|off_off": {
   "id": "d032_l14_k4_earlyoff_weakoff",
   "source": "new",
   "params": {
    "checkpoint": "/root/rivermind-data/infer/self_forcing_1b_patched/models/checkpoints/self_forcing_dmd.pt",
    "use_ema": true,
    "seed": 0,
    "latent_frames": 21,
    "kv_cache_frames": 21,
    "vae_decode_chunk_frames": 3,
    "denoising_steps": [
     1000,
     750,
     500,
     250
    ],
    "warp_denoising_step": true,
    "timestep_shift": 5.0,
    "context_noise": 0,
    "modifications_enabled": true,
    "loop_update_mode": "ode",
    "loop_xsa": false,
    "loop_cross_gate_checkpoint": null,
    "step_k_schedule": "off",
    "chunk_k_schedule": "off",
    "loop_indices": "14",
    "loop_k": 4,
    "early_late_enabled": false,
    "loop_sampling_steps": "0-1",
    "weak_strong_enabled": false,
    "strong_k": 4,
    "weak_k": 1,
    "strong_fraction": 0.5
   },
   "videos": [
    {
     "prompt": 1,
     "path": "videos/d032_l14_k4_earlyoff_weakoff/prompt_1.mp4"
    },
    {
     "prompt": 2,
     "path": "videos/d032_l14_k4_earlyoff_weakoff/prompt_2.mp4"
    },
    {
     "prompt": 3,
     "path": "videos/d032_l14_k4_earlyoff_weakoff/prompt_3.mp4"
    }
   ]
  },
  "14|4|off_weak1": {
   "id": "d033_l14_k4_earlyoff_weakw1",
   "source": "new",
   "params": {
    "checkpoint": "/root/rivermind-data/infer/self_forcing_1b_patched/models/checkpoints/self_forcing_dmd.pt",
    "use_ema": true,
    "seed": 0,
    "latent_frames": 21,
    "kv_cache_frames": 21,
    "vae_decode_chunk_frames": 3,
    "denoising_steps": [
     1000,
     750,
     500,
     250
    ],
    "warp_denoising_step": true,
    "timestep_shift": 5.0,
    "context_noise": 0,
    "modifications_enabled": true,
    "loop_update_mode": "ode",
    "loop_xsa": false,
    "loop_cross_gate_checkpoint": null,
    "step_k_schedule": "off",
    "chunk_k_schedule": "off",
    "loop_indices": "14",
    "loop_k": 4,
    "early_late_enabled": false,
    "loop_sampling_steps": "0-1",
    "weak_strong_enabled": true,
    "strong_k": 4,
    "weak_k": 1,
    "strong_fraction": 0.5
   },
   "videos": [
    {
     "prompt": 1,
     "path": "videos/d033_l14_k4_earlyoff_weakw1/prompt_1.mp4"
    },
    {
     "prompt": 2,
     "path": "videos/d033_l14_k4_earlyoff_weakw1/prompt_2.mp4"
    },
    {
     "prompt": 3,
     "path": "videos/d033_l14_k4_earlyoff_weakw1/prompt_3.mp4"
    }
   ]
  },
  "14|4|early01_off": {
   "id": "d034_l14_k4_early01_weakoff",
   "source": "new",
   "params": {
    "checkpoint": "/root/rivermind-data/infer/self_forcing_1b_patched/models/checkpoints/self_forcing_dmd.pt",
    "use_ema": true,
    "seed": 0,
    "latent_frames": 21,
    "kv_cache_frames": 21,
    "vae_decode_chunk_frames": 3,
    "denoising_steps": [
     1000,
     750,
     500,
     250
    ],
    "warp_denoising_step": true,
    "timestep_shift": 5.0,
    "context_noise": 0,
    "modifications_enabled": true,
    "loop_update_mode": "ode",
    "loop_xsa": false,
    "loop_cross_gate_checkpoint": null,
    "step_k_schedule": "off",
    "chunk_k_schedule": "off",
    "loop_indices": "14",
    "loop_k": 4,
    "early_late_enabled": true,
    "loop_sampling_steps": "0-1",
    "weak_strong_enabled": false,
    "strong_k": 4,
    "weak_k": 1,
    "strong_fraction": 0.5
   },
   "videos": [
    {
     "prompt": 1,
     "path": "videos/d034_l14_k4_early01_weakoff/prompt_1.mp4"
    },
    {
     "prompt": 2,
     "path": "videos/d034_l14_k4_early01_weakoff/prompt_2.mp4"
    },
    {
     "prompt": 3,
     "path": "videos/d034_l14_k4_early01_weakoff/prompt_3.mp4"
    }
   ]
  },
  "14|4|early01_weak1": {
   "id": "d035_l14_k4_early01_weakw1",
   "source": "new",
   "params": {
    "checkpoint": "/root/rivermind-data/infer/self_forcing_1b_patched/models/checkpoints/self_forcing_dmd.pt",
    "use_ema": true,
    "seed": 0,
    "latent_frames": 21,
    "kv_cache_frames": 21,
    "vae_decode_chunk_frames": 3,
    "denoising_steps": [
     1000,
     750,
     500,
     250
    ],
    "warp_denoising_step": true,
    "timestep_shift": 5.0,
    "context_noise": 0,
    "modifications_enabled": true,
    "loop_update_mode": "ode",
    "loop_xsa": false,
    "loop_cross_gate_checkpoint": null,
    "step_k_schedule": "off",
    "chunk_k_schedule": "off",
    "loop_indices": "14",
    "loop_k": 4,
    "early_late_enabled": true,
    "loop_sampling_steps": "0-1",
    "weak_strong_enabled": true,
    "strong_k": 4,
    "weak_k": 1,
    "strong_fraction": 0.5
   },
   "videos": [
    {
     "prompt": 1,
     "path": "videos/d035_l14_k4_early01_weakw1/prompt_1.mp4"
    },
    {
     "prompt": 2,
     "path": "videos/d035_l14_k4_early01_weakw1/prompt_2.mp4"
    },
    {
     "prompt": 3,
     "path": "videos/d035_l14_k4_early01_weakw1/prompt_3.mp4"
    }
   ]
  },
  "1-3|1|off_off": {
   "id": "d036_l1-3_k1_earlyoff_weakoff",
   "source": "new",
   "params": {
    "checkpoint": "/root/rivermind-data/infer/self_forcing_1b_patched/models/checkpoints/self_forcing_dmd.pt",
    "use_ema": true,
    "seed": 0,
    "latent_frames": 21,
    "kv_cache_frames": 21,
    "vae_decode_chunk_frames": 3,
    "denoising_steps": [
     1000,
     750,
     500,
     250
    ],
    "warp_denoising_step": true,
    "timestep_shift": 5.0,
    "context_noise": 0,
    "modifications_enabled": true,
    "loop_update_mode": "ode",
    "loop_xsa": false,
    "loop_cross_gate_checkpoint": null,
    "step_k_schedule": "off",
    "chunk_k_schedule": "off",
    "loop_indices": "1-3",
    "loop_k": 1,
    "early_late_enabled": false,
    "loop_sampling_steps": "0-1",
    "weak_strong_enabled": false,
    "strong_k": 1,
    "weak_k": 1,
    "strong_fraction": 0.5
   },
   "videos": [
    {
     "prompt": 1,
     "path": "videos/d036_l1-3_k1_earlyoff_weakoff/prompt_1.mp4"
    },
    {
     "prompt": 2,
     "path": "videos/d036_l1-3_k1_earlyoff_weakoff/prompt_2.mp4"
    },
    {
     "prompt": 3,
     "path": "videos/d036_l1-3_k1_earlyoff_weakoff/prompt_3.mp4"
    }
   ]
  },
  "1-3|1|off_weak1": {
   "id": "d037_l1-3_k1_earlyoff_weakw1",
   "source": "new",
   "params": {
    "checkpoint": "/root/rivermind-data/infer/self_forcing_1b_patched/models/checkpoints/self_forcing_dmd.pt",
    "use_ema": true,
    "seed": 0,
    "latent_frames": 21,
    "kv_cache_frames": 21,
    "vae_decode_chunk_frames": 3,
    "denoising_steps": [
     1000,
     750,
     500,
     250
    ],
    "warp_denoising_step": true,
    "timestep_shift": 5.0,
    "context_noise": 0,
    "modifications_enabled": true,
    "loop_update_mode": "ode",
    "loop_xsa": false,
    "loop_cross_gate_checkpoint": null,
    "step_k_schedule": "off",
    "chunk_k_schedule": "off",
    "loop_indices": "1-3",
    "loop_k": 1,
    "early_late_enabled": false,
    "loop_sampling_steps": "0-1",
    "weak_strong_enabled": true,
    "strong_k": 1,
    "weak_k": 1,
    "strong_fraction": 0.5
   },
   "videos": [
    {
     "prompt": 1,
     "path": "videos/d037_l1-3_k1_earlyoff_weakw1/prompt_1.mp4"
    },
    {
     "prompt": 2,
     "path": "videos/d037_l1-3_k1_earlyoff_weakw1/prompt_2.mp4"
    },
    {
     "prompt": 3,
     "path": "videos/d037_l1-3_k1_earlyoff_weakw1/prompt_3.mp4"
    }
   ]
  },
  "1-3|1|early01_off": {
   "id": "d038_l1-3_k1_early01_weakoff",
   "source": "new",
   "params": {
    "checkpoint": "/root/rivermind-data/infer/self_forcing_1b_patched/models/checkpoints/self_forcing_dmd.pt",
    "use_ema": true,
    "seed": 0,
    "latent_frames": 21,
    "kv_cache_frames": 21,
    "vae_decode_chunk_frames": 3,
    "denoising_steps": [
     1000,
     750,
     500,
     250
    ],
    "warp_denoising_step": true,
    "timestep_shift": 5.0,
    "context_noise": 0,
    "modifications_enabled": true,
    "loop_update_mode": "ode",
    "loop_xsa": false,
    "loop_cross_gate_checkpoint": null,
    "step_k_schedule": "off",
    "chunk_k_schedule": "off",
    "loop_indices": "1-3",
    "loop_k": 1,
    "early_late_enabled": true,
    "loop_sampling_steps": "0-1",
    "weak_strong_enabled": false,
    "strong_k": 1,
    "weak_k": 1,
    "strong_fraction": 0.5
   },
   "videos": [
    {
     "prompt": 1,
     "path": "videos/d038_l1-3_k1_early01_weakoff/prompt_1.mp4"
    },
    {
     "prompt": 2,
     "path": "videos/d038_l1-3_k1_early01_weakoff/prompt_2.mp4"
    },
    {
     "prompt": 3,
     "path": "videos/d038_l1-3_k1_early01_weakoff/prompt_3.mp4"
    }
   ]
  },
  "1-3|1|early01_weak1": {
   "id": "d039_l1-3_k1_early01_weakw1",
   "source": "new",
   "params": {
    "checkpoint": "/root/rivermind-data/infer/self_forcing_1b_patched/models/checkpoints/self_forcing_dmd.pt",
    "use_ema": true,
    "seed": 0,
    "latent_frames": 21,
    "kv_cache_frames": 21,
    "vae_decode_chunk_frames": 3,
    "denoising_steps": [
     1000,
     750,
     500,
     250
    ],
    "warp_denoising_step": true,
    "timestep_shift": 5.0,
    "context_noise": 0,
    "modifications_enabled": true,
    "loop_update_mode": "ode",
    "loop_xsa": false,
    "loop_cross_gate_checkpoint": null,
    "step_k_schedule": "off",
    "chunk_k_schedule": "off",
    "loop_indices": "1-3",
    "loop_k": 1,
    "early_late_enabled": true,
    "loop_sampling_steps": "0-1",
    "weak_strong_enabled": true,
    "strong_k": 1,
    "weak_k": 1,
    "strong_fraction": 0.5
   },
   "videos": [
    {
     "prompt": 1,
     "path": "videos/d039_l1-3_k1_early01_weakw1/prompt_1.mp4"
    },
    {
     "prompt": 2,
     "path": "videos/d039_l1-3_k1_early01_weakw1/prompt_2.mp4"
    },
    {
     "prompt": 3,
     "path": "videos/d039_l1-3_k1_early01_weakw1/prompt_3.mp4"
    }
   ]
  },
  "1-3|2|off_off": {
   "id": "d040_l1-3_k2_earlyoff_weakoff",
   "source": "new",
   "params": {
    "checkpoint": "/root/rivermind-data/infer/self_forcing_1b_patched/models/checkpoints/self_forcing_dmd.pt",
    "use_ema": true,
    "seed": 0,
    "latent_frames": 21,
    "kv_cache_frames": 21,
    "vae_decode_chunk_frames": 3,
    "denoising_steps": [
     1000,
     750,
     500,
     250
    ],
    "warp_denoising_step": true,
    "timestep_shift": 5.0,
    "context_noise": 0,
    "modifications_enabled": true,
    "loop_update_mode": "ode",
    "loop_xsa": false,
    "loop_cross_gate_checkpoint": null,
    "step_k_schedule": "off",
    "chunk_k_schedule": "off",
    "loop_indices": "1-3",
    "loop_k": 2,
    "early_late_enabled": false,
    "loop_sampling_steps": "0-1",
    "weak_strong_enabled": false,
    "strong_k": 2,
    "weak_k": 1,
    "strong_fraction": 0.5
   },
   "videos": [
    {
     "prompt": 1,
     "path": "videos/d040_l1-3_k2_earlyoff_weakoff/prompt_1.mp4"
    },
    {
     "prompt": 2,
     "path": "videos/d040_l1-3_k2_earlyoff_weakoff/prompt_2.mp4"
    },
    {
     "prompt": 3,
     "path": "videos/d040_l1-3_k2_earlyoff_weakoff/prompt_3.mp4"
    }
   ]
  },
  "1-3|2|off_weak1": {
   "id": "d041_l1-3_k2_earlyoff_weakw1",
   "source": "new",
   "params": {
    "checkpoint": "/root/rivermind-data/infer/self_forcing_1b_patched/models/checkpoints/self_forcing_dmd.pt",
    "use_ema": true,
    "seed": 0,
    "latent_frames": 21,
    "kv_cache_frames": 21,
    "vae_decode_chunk_frames": 3,
    "denoising_steps": [
     1000,
     750,
     500,
     250
    ],
    "warp_denoising_step": true,
    "timestep_shift": 5.0,
    "context_noise": 0,
    "modifications_enabled": true,
    "loop_update_mode": "ode",
    "loop_xsa": false,
    "loop_cross_gate_checkpoint": null,
    "step_k_schedule": "off",
    "chunk_k_schedule": "off",
    "loop_indices": "1-3",
    "loop_k": 2,
    "early_late_enabled": false,
    "loop_sampling_steps": "0-1",
    "weak_strong_enabled": true,
    "strong_k": 2,
    "weak_k": 1,
    "strong_fraction": 0.5
   },
   "videos": [
    {
     "prompt": 1,
     "path": "videos/d041_l1-3_k2_earlyoff_weakw1/prompt_1.mp4"
    },
    {
     "prompt": 2,
     "path": "videos/d041_l1-3_k2_earlyoff_weakw1/prompt_2.mp4"
    },
    {
     "prompt": 3,
     "path": "videos/d041_l1-3_k2_earlyoff_weakw1/prompt_3.mp4"
    }
   ]
  },
  "1-3|2|early01_off": {
   "id": "d042_l1-3_k2_early01_weakoff",
   "source": "new",
   "params": {
    "checkpoint": "/root/rivermind-data/infer/self_forcing_1b_patched/models/checkpoints/self_forcing_dmd.pt",
    "use_ema": true,
    "seed": 0,
    "latent_frames": 21,
    "kv_cache_frames": 21,
    "vae_decode_chunk_frames": 3,
    "denoising_steps": [
     1000,
     750,
     500,
     250
    ],
    "warp_denoising_step": true,
    "timestep_shift": 5.0,
    "context_noise": 0,
    "modifications_enabled": true,
    "loop_update_mode": "ode",
    "loop_xsa": false,
    "loop_cross_gate_checkpoint": null,
    "step_k_schedule": "off",
    "chunk_k_schedule": "off",
    "loop_indices": "1-3",
    "loop_k": 2,
    "early_late_enabled": true,
    "loop_sampling_steps": "0-1",
    "weak_strong_enabled": false,
    "strong_k": 2,
    "weak_k": 1,
    "strong_fraction": 0.5
   },
   "videos": [
    {
     "prompt": 1,
     "path": "videos/d042_l1-3_k2_early01_weakoff/prompt_1.mp4"
    },
    {
     "prompt": 2,
     "path": "videos/d042_l1-3_k2_early01_weakoff/prompt_2.mp4"
    },
    {
     "prompt": 3,
     "path": "videos/d042_l1-3_k2_early01_weakoff/prompt_3.mp4"
    }
   ]
  },
  "1-3|2|early01_weak1": {
   "id": "d043_l1-3_k2_early01_weakw1",
   "source": "new",
   "params": {
    "checkpoint": "/root/rivermind-data/infer/self_forcing_1b_patched/models/checkpoints/self_forcing_dmd.pt",
    "use_ema": true,
    "seed": 0,
    "latent_frames": 21,
    "kv_cache_frames": 21,
    "vae_decode_chunk_frames": 3,
    "denoising_steps": [
     1000,
     750,
     500,
     250
    ],
    "warp_denoising_step": true,
    "timestep_shift": 5.0,
    "context_noise": 0,
    "modifications_enabled": true,
    "loop_update_mode": "ode",
    "loop_xsa": false,
    "loop_cross_gate_checkpoint": null,
    "step_k_schedule": "off",
    "chunk_k_schedule": "off",
    "loop_indices": "1-3",
    "loop_k": 2,
    "early_late_enabled": true,
    "loop_sampling_steps": "0-1",
    "weak_strong_enabled": true,
    "strong_k": 2,
    "weak_k": 1,
    "strong_fraction": 0.5
   },
   "videos": [
    {
     "prompt": 1,
     "path": "videos/d043_l1-3_k2_early01_weakw1/prompt_1.mp4"
    },
    {
     "prompt": 2,
     "path": "videos/d043_l1-3_k2_early01_weakw1/prompt_2.mp4"
    },
    {
     "prompt": 3,
     "path": "videos/d043_l1-3_k2_early01_weakw1/prompt_3.mp4"
    }
   ]
  },
  "1-3|4|off_off": {
   "id": "d044_l1-3_k4_earlyoff_weakoff",
   "source": "new",
   "params": {
    "checkpoint": "/root/rivermind-data/infer/self_forcing_1b_patched/models/checkpoints/self_forcing_dmd.pt",
    "use_ema": true,
    "seed": 0,
    "latent_frames": 21,
    "kv_cache_frames": 21,
    "vae_decode_chunk_frames": 3,
    "denoising_steps": [
     1000,
     750,
     500,
     250
    ],
    "warp_denoising_step": true,
    "timestep_shift": 5.0,
    "context_noise": 0,
    "modifications_enabled": true,
    "loop_update_mode": "ode",
    "loop_xsa": false,
    "loop_cross_gate_checkpoint": null,
    "step_k_schedule": "off",
    "chunk_k_schedule": "off",
    "loop_indices": "1-3",
    "loop_k": 4,
    "early_late_enabled": false,
    "loop_sampling_steps": "0-1",
    "weak_strong_enabled": false,
    "strong_k": 4,
    "weak_k": 1,
    "strong_fraction": 0.5
   },
   "videos": [
    {
     "prompt": 1,
     "path": "videos/d044_l1-3_k4_earlyoff_weakoff/prompt_1.mp4"
    },
    {
     "prompt": 2,
     "path": "videos/d044_l1-3_k4_earlyoff_weakoff/prompt_2.mp4"
    },
    {
     "prompt": 3,
     "path": "videos/d044_l1-3_k4_earlyoff_weakoff/prompt_3.mp4"
    }
   ]
  },
  "1-3|4|off_weak1": {
   "id": "d045_l1-3_k4_earlyoff_weakw1",
   "source": "new",
   "params": {
    "checkpoint": "/root/rivermind-data/infer/self_forcing_1b_patched/models/checkpoints/self_forcing_dmd.pt",
    "use_ema": true,
    "seed": 0,
    "latent_frames": 21,
    "kv_cache_frames": 21,
    "vae_decode_chunk_frames": 3,
    "denoising_steps": [
     1000,
     750,
     500,
     250
    ],
    "warp_denoising_step": true,
    "timestep_shift": 5.0,
    "context_noise": 0,
    "modifications_enabled": true,
    "loop_update_mode": "ode",
    "loop_xsa": false,
    "loop_cross_gate_checkpoint": null,
    "step_k_schedule": "off",
    "chunk_k_schedule": "off",
    "loop_indices": "1-3",
    "loop_k": 4,
    "early_late_enabled": false,
    "loop_sampling_steps": "0-1",
    "weak_strong_enabled": true,
    "strong_k": 4,
    "weak_k": 1,
    "strong_fraction": 0.5
   },
   "videos": [
    {
     "prompt": 1,
     "path": "videos/d045_l1-3_k4_earlyoff_weakw1/prompt_1.mp4"
    },
    {
     "prompt": 2,
     "path": "videos/d045_l1-3_k4_earlyoff_weakw1/prompt_2.mp4"
    },
    {
     "prompt": 3,
     "path": "videos/d045_l1-3_k4_earlyoff_weakw1/prompt_3.mp4"
    }
   ]
  },
  "1-3|4|early01_off": {
   "id": "d046_l1-3_k4_early01_weakoff",
   "source": "new",
   "params": {
    "checkpoint": "/root/rivermind-data/infer/self_forcing_1b_patched/models/checkpoints/self_forcing_dmd.pt",
    "use_ema": true,
    "seed": 0,
    "latent_frames": 21,
    "kv_cache_frames": 21,
    "vae_decode_chunk_frames": 3,
    "denoising_steps": [
     1000,
     750,
     500,
     250
    ],
    "warp_denoising_step": true,
    "timestep_shift": 5.0,
    "context_noise": 0,
    "modifications_enabled": true,
    "loop_update_mode": "ode",
    "loop_xsa": false,
    "loop_cross_gate_checkpoint": null,
    "step_k_schedule": "off",
    "chunk_k_schedule": "off",
    "loop_indices": "1-3",
    "loop_k": 4,
    "early_late_enabled": true,
    "loop_sampling_steps": "0-1",
    "weak_strong_enabled": false,
    "strong_k": 4,
    "weak_k": 1,
    "strong_fraction": 0.5
   },
   "videos": [
    {
     "prompt": 1,
     "path": "videos/d046_l1-3_k4_early01_weakoff/prompt_1.mp4"
    },
    {
     "prompt": 2,
     "path": "videos/d046_l1-3_k4_early01_weakoff/prompt_2.mp4"
    },
    {
     "prompt": 3,
     "path": "videos/d046_l1-3_k4_early01_weakoff/prompt_3.mp4"
    }
   ]
  },
  "1-3|4|early01_weak1": {
   "id": "d047_l1-3_k4_early01_weakw1",
   "source": "new",
   "params": {
    "checkpoint": "/root/rivermind-data/infer/self_forcing_1b_patched/models/checkpoints/self_forcing_dmd.pt",
    "use_ema": true,
    "seed": 0,
    "latent_frames": 21,
    "kv_cache_frames": 21,
    "vae_decode_chunk_frames": 3,
    "denoising_steps": [
     1000,
     750,
     500,
     250
    ],
    "warp_denoising_step": true,
    "timestep_shift": 5.0,
    "context_noise": 0,
    "modifications_enabled": true,
    "loop_update_mode": "ode",
    "loop_xsa": false,
    "loop_cross_gate_checkpoint": null,
    "step_k_schedule": "off",
    "chunk_k_schedule": "off",
    "loop_indices": "1-3",
    "loop_k": 4,
    "early_late_enabled": true,
    "loop_sampling_steps": "0-1",
    "weak_strong_enabled": true,
    "strong_k": 4,
    "weak_k": 1,
    "strong_fraction": 0.5
   },
   "videos": [
    {
     "prompt": 1,
     "path": "videos/d047_l1-3_k4_early01_weakw1/prompt_1.mp4"
    },
    {
     "prompt": 2,
     "path": "videos/d047_l1-3_k4_early01_weakw1/prompt_2.mp4"
    },
    {
     "prompt": 3,
     "path": "videos/d047_l1-3_k4_early01_weakw1/prompt_3.mp4"
    }
   ]
  },
  "1|2|off_off": {
   "id": "reuse_E003_l1_ode_k2_xsaoff_stepoff_chunkoff",
   "source": "reused",
   "params": {
    "loop_indices": "1",
    "loop_k": 2,
    "loop_update_mode": "ode",
    "loop_xsa": false,
    "early_late_enabled": false,
    "loop_sampling_steps": "0-1",
    "weak_strong_enabled": false,
    "weak_k": 1,
    "strong_fraction": 0.5,
    "latent_frames": 21
   },
   "videos": [
    {
     "prompt": 1,
     "path": "videos/reuse_E003_l1_ode_k2_xsaoff_stepoff_chunkoff/prompt_1.mp4"
    },
    {
     "prompt": 2,
     "path": "videos/reuse_E003_l1_ode_k2_xsaoff_stepoff_chunkoff/prompt_2.mp4"
    },
    {
     "prompt": 3,
     "path": "videos/reuse_E003_l1_ode_k2_xsaoff_stepoff_chunkoff/prompt_3.mp4"
    }
   ]
  },
  "14|2|off_off": {
   "id": "reuse_e028_l14_ode_k2_xsaoff_stepoff_chunkoff",
   "source": "reused",
   "params": {
    "loop_indices": "14",
    "loop_k": 2,
    "loop_update_mode": "ode",
    "loop_xsa": false,
    "early_late_enabled": false,
    "loop_sampling_steps": "0-1",
    "weak_strong_enabled": false,
    "weak_k": 1,
    "strong_fraction": 0.5,
    "latent_frames": 21
   },
   "videos": [
    {
     "prompt": 1,
     "path": "videos/reuse_e028_l14_ode_k2_xsaoff_stepoff_chunkoff/prompt_1.mp4"
    },
    {
     "prompt": 2,
     "path": "videos/reuse_e028_l14_ode_k2_xsaoff_stepoff_chunkoff/prompt_2.mp4"
    },
    {
     "prompt": 3,
     "path": "videos/reuse_e028_l14_ode_k2_xsaoff_stepoff_chunkoff/prompt_3.mp4"
    }
   ]
  },
  "28|2|off_off": {
   "id": "reuse_s31_l28_ode_k2",
   "source": "reused",
   "params": {
    "loop_indices": "28",
    "loop_k": 2,
    "loop_update_mode": "ode",
    "loop_xsa": false,
    "early_late_enabled": false,
    "loop_sampling_steps": "0-1",
    "weak_strong_enabled": false,
    "weak_k": 1,
    "strong_fraction": 0.5,
    "latent_frames": 21
   },
   "videos": [
    {
     "prompt": 1,
     "path": "videos/reuse_s31_l28_ode_k2/prompt_1.mp4"
    },
    {
     "prompt": 2,
     "path": "videos/reuse_s31_l28_ode_k2/prompt_2.mp4"
    },
    {
     "prompt": 3,
     "path": "videos/reuse_s31_l28_ode_k2/prompt_3.mp4"
    }
   ]
  },
  "28|2|off_weak1": {
   "id": "reuse_s44_l28_ode_k2_ws50w1",
   "source": "reused",
   "params": {
    "loop_indices": "28",
    "loop_k": 2,
    "loop_update_mode": "ode",
    "loop_xsa": false,
    "early_late_enabled": false,
    "loop_sampling_steps": "0-1",
    "weak_strong_enabled": true,
    "weak_k": 1,
    "strong_fraction": 0.5,
    "latent_frames": 21
   },
   "videos": [
    {
     "prompt": 1,
     "path": "videos/reuse_s44_l28_ode_k2_ws50w1/prompt_1.mp4"
    },
    {
     "prompt": 2,
     "path": "videos/reuse_s44_l28_ode_k2_ws50w1/prompt_2.mp4"
    },
    {
     "prompt": 3,
     "path": "videos/reuse_s44_l28_ode_k2_ws50w1/prompt_3.mp4"
    }
   ]
  },
  "28|2|early01_off": {
   "id": "reuse_s40_l28_ode_k2_early01",
   "source": "reused",
   "params": {
    "loop_indices": "28",
    "loop_k": 2,
    "loop_update_mode": "ode",
    "loop_xsa": false,
    "early_late_enabled": true,
    "loop_sampling_steps": "0-1",
    "weak_strong_enabled": false,
    "weak_k": 1,
    "strong_fraction": 0.5,
    "latent_frames": 21
   },
   "videos": [
    {
     "prompt": 1,
     "path": "videos/reuse_s40_l28_ode_k2_early01/prompt_1.mp4"
    },
    {
     "prompt": 2,
     "path": "videos/reuse_s40_l28_ode_k2_early01/prompt_2.mp4"
    },
    {
     "prompt": 3,
     "path": "videos/reuse_s40_l28_ode_k2_early01/prompt_3.mp4"
    }
   ]
  },
  "28|4|off_off": {
   "id": "reuse_35_l28_ode_k4",
   "source": "reused",
   "params": {
    "loop_indices": "28",
    "loop_k": 4,
    "loop_update_mode": "ode",
    "loop_xsa": false,
    "early_late_enabled": false,
    "loop_sampling_steps": "0-1",
    "weak_strong_enabled": false,
    "weak_k": 1,
    "strong_fraction": 0.5,
    "latent_frames": 21
   },
   "videos": [
    {
     "prompt": 1,
     "path": "videos/reuse_35_l28_ode_k4/prompt_1.mp4"
    },
    {
     "prompt": 2,
     "path": "videos/reuse_35_l28_ode_k4/prompt_2.mp4"
    },
    {
     "prompt": 3,
     "path": "videos/reuse_35_l28_ode_k4/prompt_3.mp4"
    }
   ]
  }
 },
 "stats": {
  "new": 42,
  "reused": 6,
  "missing": []
 }
};
