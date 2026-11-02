window.LINEAR_DATA = {
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
 "ks": [
  2,
  3,
  4,
  6,
  8,
  12,
  16
 ],
 "layers": [
  "28",
  "10-19"
 ],
 "cells": {
  "10-19|12": {
   "id": "lin12_l10-19",
   "params": {
    "checkpoint": "/root/rivermind-data/infer/self_forcing_1b_patched/models/checkpoints/self_forcing_dmd.pt",
    "use_ema": true,
    "seed": 0,
    "latent_frames": 81,
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
    "chunk_k_schedule": "linear_up",
    "loop_indices": "10-19",
    "loop_k": 12,
    "early_late_enabled": false,
    "loop_sampling_steps": "0-1",
    "weak_strong_enabled": false,
    "strong_k": 12,
    "weak_k": 1,
    "strong_fraction": 0.5
   },
   "videos": [
    {
     "prompt": 1,
     "path": "videos/lin12_l10-19/prompt_1.mp4",
     "poster": "videos/lin12_l10-19/prompt_1.jpg"
    },
    {
     "prompt": 2,
     "path": "videos/lin12_l10-19/prompt_2.mp4",
     "poster": "videos/lin12_l10-19/prompt_2.jpg"
    },
    {
     "prompt": 3,
     "path": "videos/lin12_l10-19/prompt_3.mp4",
     "poster": "videos/lin12_l10-19/prompt_3.jpg"
    }
   ],
   "seq": [
    1,
    1,
    2,
    2,
    3,
    3,
    4,
    4,
    4,
    5,
    5,
    6,
    6,
    6,
    7,
    7,
    8,
    8,
    9,
    9,
    9,
    10,
    10,
    11,
    11,
    12,
    12
   ],
   "nchunks": 27
  },
  "28|12": {
   "id": "lin12_l28",
   "params": {
    "checkpoint": "/root/rivermind-data/infer/self_forcing_1b_patched/models/checkpoints/self_forcing_dmd.pt",
    "use_ema": true,
    "seed": 0,
    "latent_frames": 81,
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
    "chunk_k_schedule": "linear_up",
    "loop_indices": "28",
    "loop_k": 12,
    "early_late_enabled": false,
    "loop_sampling_steps": "0-1",
    "weak_strong_enabled": false,
    "strong_k": 12,
    "weak_k": 1,
    "strong_fraction": 0.5
   },
   "videos": [
    {
     "prompt": 1,
     "path": "videos/lin12_l28/prompt_1.mp4",
     "poster": "videos/lin12_l28/prompt_1.jpg"
    },
    {
     "prompt": 2,
     "path": "videos/lin12_l28/prompt_2.mp4",
     "poster": "videos/lin12_l28/prompt_2.jpg"
    },
    {
     "prompt": 3,
     "path": "videos/lin12_l28/prompt_3.mp4",
     "poster": "videos/lin12_l28/prompt_3.jpg"
    }
   ],
   "seq": [
    1,
    1,
    2,
    2,
    3,
    3,
    4,
    4,
    4,
    5,
    5,
    6,
    6,
    6,
    7,
    7,
    8,
    8,
    9,
    9,
    9,
    10,
    10,
    11,
    11,
    12,
    12
   ],
   "nchunks": 27
  },
  "10-19|16": {
   "id": "lin16_l10-19",
   "params": {
    "checkpoint": "/root/rivermind-data/infer/self_forcing_1b_patched/models/checkpoints/self_forcing_dmd.pt",
    "use_ema": true,
    "seed": 0,
    "latent_frames": 81,
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
    "chunk_k_schedule": "linear_up",
    "loop_indices": "10-19",
    "loop_k": 16,
    "early_late_enabled": false,
    "loop_sampling_steps": "0-1",
    "weak_strong_enabled": false,
    "strong_k": 16,
    "weak_k": 1,
    "strong_fraction": 0.5
   },
   "videos": [
    {
     "prompt": 1,
     "path": "videos/lin16_l10-19/prompt_1.mp4",
     "poster": "videos/lin16_l10-19/prompt_1.jpg"
    },
    {
     "prompt": 2,
     "path": "videos/lin16_l10-19/prompt_2.mp4",
     "poster": "videos/lin16_l10-19/prompt_2.jpg"
    },
    {
     "prompt": 3,
     "path": "videos/lin16_l10-19/prompt_3.mp4",
     "poster": "videos/lin16_l10-19/prompt_3.jpg"
    }
   ],
   "seq": [
    1,
    2,
    2,
    3,
    3,
    4,
    4,
    5,
    6,
    6,
    7,
    7,
    8,
    8,
    9,
    10,
    10,
    11,
    11,
    12,
    13,
    13,
    14,
    14,
    15,
    15,
    16
   ],
   "nchunks": 27
  },
  "28|16": {
   "id": "lin16_l28",
   "params": {
    "checkpoint": "/root/rivermind-data/infer/self_forcing_1b_patched/models/checkpoints/self_forcing_dmd.pt",
    "use_ema": true,
    "seed": 0,
    "latent_frames": 81,
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
    "chunk_k_schedule": "linear_up",
    "loop_indices": "28",
    "loop_k": 16,
    "early_late_enabled": false,
    "loop_sampling_steps": "0-1",
    "weak_strong_enabled": false,
    "strong_k": 16,
    "weak_k": 1,
    "strong_fraction": 0.5
   },
   "videos": [
    {
     "prompt": 1,
     "path": "videos/lin16_l28/prompt_1.mp4",
     "poster": "videos/lin16_l28/prompt_1.jpg"
    },
    {
     "prompt": 2,
     "path": "videos/lin16_l28/prompt_2.mp4",
     "poster": "videos/lin16_l28/prompt_2.jpg"
    },
    {
     "prompt": 3,
     "path": "videos/lin16_l28/prompt_3.mp4",
     "poster": "videos/lin16_l28/prompt_3.jpg"
    }
   ],
   "seq": [
    1,
    2,
    2,
    3,
    3,
    4,
    4,
    5,
    6,
    6,
    7,
    7,
    8,
    8,
    9,
    10,
    10,
    11,
    11,
    12,
    13,
    13,
    14,
    14,
    15,
    15,
    16
   ],
   "nchunks": 27
  },
  "10-19|2": {
   "id": "lin2_l10-19",
   "params": {
    "checkpoint": "/root/rivermind-data/infer/self_forcing_1b_patched/models/checkpoints/self_forcing_dmd.pt",
    "use_ema": true,
    "seed": 0,
    "latent_frames": 81,
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
    "chunk_k_schedule": "linear_up",
    "loop_indices": "10-19",
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
     "path": "videos/lin2_l10-19/prompt_1.mp4",
     "poster": "videos/lin2_l10-19/prompt_1.jpg"
    },
    {
     "prompt": 2,
     "path": "videos/lin2_l10-19/prompt_2.mp4",
     "poster": "videos/lin2_l10-19/prompt_2.jpg"
    },
    {
     "prompt": 3,
     "path": "videos/lin2_l10-19/prompt_3.mp4",
     "poster": "videos/lin2_l10-19/prompt_3.jpg"
    }
   ],
   "seq": [
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2
   ],
   "nchunks": 27
  },
  "28|2": {
   "id": "lin2_l28",
   "params": {
    "checkpoint": "/root/rivermind-data/infer/self_forcing_1b_patched/models/checkpoints/self_forcing_dmd.pt",
    "use_ema": true,
    "seed": 0,
    "latent_frames": 81,
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
    "chunk_k_schedule": "linear_up",
    "loop_indices": "28",
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
     "path": "videos/lin2_l28/prompt_1.mp4",
     "poster": "videos/lin2_l28/prompt_1.jpg"
    },
    {
     "prompt": 2,
     "path": "videos/lin2_l28/prompt_2.mp4",
     "poster": "videos/lin2_l28/prompt_2.jpg"
    },
    {
     "prompt": 3,
     "path": "videos/lin2_l28/prompt_3.mp4",
     "poster": "videos/lin2_l28/prompt_3.jpg"
    }
   ],
   "seq": [
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2
   ],
   "nchunks": 27
  },
  "10-19|3": {
   "id": "lin3_l10-19",
   "params": {
    "checkpoint": "/root/rivermind-data/infer/self_forcing_1b_patched/models/checkpoints/self_forcing_dmd.pt",
    "use_ema": true,
    "seed": 0,
    "latent_frames": 81,
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
    "chunk_k_schedule": "linear_up",
    "loop_indices": "10-19",
    "loop_k": 3,
    "early_late_enabled": false,
    "loop_sampling_steps": "0-1",
    "weak_strong_enabled": false,
    "strong_k": 3,
    "weak_k": 1,
    "strong_fraction": 0.5
   },
   "videos": [
    {
     "prompt": 1,
     "path": "videos/lin3_l10-19/prompt_1.mp4",
     "poster": "videos/lin3_l10-19/prompt_1.jpg"
    },
    {
     "prompt": 2,
     "path": "videos/lin3_l10-19/prompt_2.mp4",
     "poster": "videos/lin3_l10-19/prompt_2.jpg"
    },
    {
     "prompt": 3,
     "path": "videos/lin3_l10-19/prompt_3.mp4",
     "poster": "videos/lin3_l10-19/prompt_3.jpg"
    }
   ],
   "seq": [
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    3,
    3,
    3
   ],
   "nchunks": 27
  },
  "28|3": {
   "id": "lin3_l28",
   "params": {
    "checkpoint": "/root/rivermind-data/infer/self_forcing_1b_patched/models/checkpoints/self_forcing_dmd.pt",
    "use_ema": true,
    "seed": 0,
    "latent_frames": 81,
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
    "chunk_k_schedule": "linear_up",
    "loop_indices": "28",
    "loop_k": 3,
    "early_late_enabled": false,
    "loop_sampling_steps": "0-1",
    "weak_strong_enabled": false,
    "strong_k": 3,
    "weak_k": 1,
    "strong_fraction": 0.5
   },
   "videos": [
    {
     "prompt": 1,
     "path": "videos/lin3_l28/prompt_1.mp4",
     "poster": "videos/lin3_l28/prompt_1.jpg"
    },
    {
     "prompt": 2,
     "path": "videos/lin3_l28/prompt_2.mp4",
     "poster": "videos/lin3_l28/prompt_2.jpg"
    },
    {
     "prompt": 3,
     "path": "videos/lin3_l28/prompt_3.mp4",
     "poster": "videos/lin3_l28/prompt_3.jpg"
    }
   ],
   "seq": [
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    3,
    3,
    3
   ],
   "nchunks": 27
  },
  "10-19|4": {
   "id": "lin4_l10-19",
   "params": {
    "checkpoint": "/root/rivermind-data/infer/self_forcing_1b_patched/models/checkpoints/self_forcing_dmd.pt",
    "use_ema": true,
    "seed": 0,
    "latent_frames": 81,
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
    "chunk_k_schedule": "linear_up",
    "loop_indices": "10-19",
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
     "path": "videos/lin4_l10-19/prompt_1.mp4",
     "poster": "videos/lin4_l10-19/prompt_1.jpg"
    },
    {
     "prompt": 2,
     "path": "videos/lin4_l10-19/prompt_2.mp4",
     "poster": "videos/lin4_l10-19/prompt_2.jpg"
    },
    {
     "prompt": 3,
     "path": "videos/lin4_l10-19/prompt_3.mp4",
     "poster": "videos/lin4_l10-19/prompt_3.jpg"
    }
   ],
   "seq": [
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    4
   ],
   "nchunks": 27
  },
  "28|4": {
   "id": "lin4_l28",
   "params": {
    "checkpoint": "/root/rivermind-data/infer/self_forcing_1b_patched/models/checkpoints/self_forcing_dmd.pt",
    "use_ema": true,
    "seed": 0,
    "latent_frames": 81,
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
    "chunk_k_schedule": "linear_up",
    "loop_indices": "28",
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
     "path": "videos/lin4_l28/prompt_1.mp4",
     "poster": "videos/lin4_l28/prompt_1.jpg"
    },
    {
     "prompt": 2,
     "path": "videos/lin4_l28/prompt_2.mp4",
     "poster": "videos/lin4_l28/prompt_2.jpg"
    },
    {
     "prompt": 3,
     "path": "videos/lin4_l28/prompt_3.mp4",
     "poster": "videos/lin4_l28/prompt_3.jpg"
    }
   ],
   "seq": [
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    4
   ],
   "nchunks": 27
  },
  "10-19|6": {
   "id": "lin6_l10-19",
   "params": {
    "checkpoint": "/root/rivermind-data/infer/self_forcing_1b_patched/models/checkpoints/self_forcing_dmd.pt",
    "use_ema": true,
    "seed": 0,
    "latent_frames": 81,
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
    "chunk_k_schedule": "linear_up",
    "loop_indices": "10-19",
    "loop_k": 6,
    "early_late_enabled": false,
    "loop_sampling_steps": "0-1",
    "weak_strong_enabled": false,
    "strong_k": 6,
    "weak_k": 1,
    "strong_fraction": 0.5
   },
   "videos": [
    {
     "prompt": 1,
     "path": "videos/lin6_l10-19/prompt_1.mp4",
     "poster": "videos/lin6_l10-19/prompt_1.jpg"
    },
    {
     "prompt": 2,
     "path": "videos/lin6_l10-19/prompt_2.mp4",
     "poster": "videos/lin6_l10-19/prompt_2.jpg"
    },
    {
     "prompt": 3,
     "path": "videos/lin6_l10-19/prompt_3.mp4",
     "poster": "videos/lin6_l10-19/prompt_3.jpg"
    }
   ],
   "seq": [
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    5,
    6,
    6,
    6
   ],
   "nchunks": 27
  },
  "28|6": {
   "id": "lin6_l28",
   "params": {
    "checkpoint": "/root/rivermind-data/infer/self_forcing_1b_patched/models/checkpoints/self_forcing_dmd.pt",
    "use_ema": true,
    "seed": 0,
    "latent_frames": 81,
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
    "chunk_k_schedule": "linear_up",
    "loop_indices": "28",
    "loop_k": 6,
    "early_late_enabled": false,
    "loop_sampling_steps": "0-1",
    "weak_strong_enabled": false,
    "strong_k": 6,
    "weak_k": 1,
    "strong_fraction": 0.5
   },
   "videos": [
    {
     "prompt": 1,
     "path": "videos/lin6_l28/prompt_1.mp4",
     "poster": "videos/lin6_l28/prompt_1.jpg"
    },
    {
     "prompt": 2,
     "path": "videos/lin6_l28/prompt_2.mp4",
     "poster": "videos/lin6_l28/prompt_2.jpg"
    },
    {
     "prompt": 3,
     "path": "videos/lin6_l28/prompt_3.mp4",
     "poster": "videos/lin6_l28/prompt_3.jpg"
    }
   ],
   "seq": [
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    5,
    6,
    6,
    6
   ],
   "nchunks": 27
  },
  "10-19|8": {
   "id": "lin8_l10-19",
   "params": {
    "checkpoint": "/root/rivermind-data/infer/self_forcing_1b_patched/models/checkpoints/self_forcing_dmd.pt",
    "use_ema": true,
    "seed": 0,
    "latent_frames": 81,
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
    "chunk_k_schedule": "linear_up",
    "loop_indices": "10-19",
    "loop_k": 8,
    "early_late_enabled": false,
    "loop_sampling_steps": "0-1",
    "weak_strong_enabled": false,
    "strong_k": 8,
    "weak_k": 1,
    "strong_fraction": 0.5
   },
   "videos": [
    {
     "prompt": 1,
     "path": "videos/lin8_l10-19/prompt_1.mp4",
     "poster": "videos/lin8_l10-19/prompt_1.jpg"
    },
    {
     "prompt": 2,
     "path": "videos/lin8_l10-19/prompt_2.mp4",
     "poster": "videos/lin8_l10-19/prompt_2.jpg"
    },
    {
     "prompt": 3,
     "path": "videos/lin8_l10-19/prompt_3.mp4",
     "poster": "videos/lin8_l10-19/prompt_3.jpg"
    }
   ],
   "seq": [
    1,
    1,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    6,
    6,
    6,
    6,
    7,
    7,
    7,
    7,
    8,
    8
   ],
   "nchunks": 27
  },
  "28|8": {
   "id": "lin8_l28",
   "params": {
    "checkpoint": "/root/rivermind-data/infer/self_forcing_1b_patched/models/checkpoints/self_forcing_dmd.pt",
    "use_ema": true,
    "seed": 0,
    "latent_frames": 81,
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
    "chunk_k_schedule": "linear_up",
    "loop_indices": "28",
    "loop_k": 8,
    "early_late_enabled": false,
    "loop_sampling_steps": "0-1",
    "weak_strong_enabled": false,
    "strong_k": 8,
    "weak_k": 1,
    "strong_fraction": 0.5
   },
   "videos": [
    {
     "prompt": 1,
     "path": "videos/lin8_l28/prompt_1.mp4",
     "poster": "videos/lin8_l28/prompt_1.jpg"
    },
    {
     "prompt": 2,
     "path": "videos/lin8_l28/prompt_2.mp4",
     "poster": "videos/lin8_l28/prompt_2.jpg"
    },
    {
     "prompt": 3,
     "path": "videos/lin8_l28/prompt_3.mp4",
     "poster": "videos/lin8_l28/prompt_3.jpg"
    }
   ],
   "seq": [
    1,
    1,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    6,
    6,
    6,
    6,
    7,
    7,
    7,
    7,
    8,
    8
   ],
   "nchunks": 27
  }
 }
};
window.LINEAR_DATA.baseline = {
 "id": "baseline_20s",
 "params": {
  "checkpoint": "/root/rivermind-data/infer/self_forcing_1b_patched/models/checkpoints/self_forcing_dmd.pt",
  "use_ema": true,
  "seed": 0,
  "latent_frames": 81,
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
  "modifications_enabled": false,
  "loop_update_mode": "ode",
  "loop_xsa": false,
  "loop_cross_gate_checkpoint": null,
  "step_k_schedule": "off",
  "chunk_k_schedule": "off",
  "loop_indices": "0-29",
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
   "path": "videos/baseline_20s/prompt_1.mp4",
   "poster": "videos/baseline_20s/prompt_1.jpg"
  },
  {
   "prompt": 2,
   "path": "videos/baseline_20s/prompt_2.mp4",
   "poster": "videos/baseline_20s/prompt_2.jpg"
  },
  {
   "prompt": 3,
   "path": "videos/baseline_20s/prompt_3.mp4",
   "poster": "videos/baseline_20s/prompt_3.jpg"
  }
 ],
 "seq": [
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1
 ],
 "nchunks": 27
};
