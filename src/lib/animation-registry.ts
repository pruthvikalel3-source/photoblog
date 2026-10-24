import type { Photo, PhotoCategory } from './photo';

export interface PresetConfig {
  reveal: 'scale-fade' | 'clip-up' | 'wave' | 'drift' | 'expand';
  durationMs: number;
  parallax: number;          // 0 = none, 0.2 = strong; disabled on touch/reduced-motion
  accent: string;
  effect?: 'glow' | 'mist' | 'stars';
}

// Central registry: category -> animation preset.
// Keep animation logic OUT of gallery/blog components; they read from here.
export const ANIMATION_PRESETS: Record<PhotoCategory, PresetConfig> = {
  sunset:  { reveal: 'scale-fade', durationMs: 1100, parallax: 0.12, accent: '#c9a86a', effect: 'glow'  },
  forest:  { reveal: 'clip-up',    durationMs: 1000, parallax: 0.18, accent: '#9aa88f', effect: 'mist'  },
  water:   { reveal: 'wave',       durationMs: 1200, parallax: 0.10, accent: '#7fa8b8'                  },
  astro:   { reveal: 'drift',      durationMs: 1400, parallax: 0.06, accent: '#7c8fd4', effect: 'stars' },
  mountain:{ reveal: 'expand',     durationMs: 1100, parallax: 0.15, accent: '#aebcc9'                  },
  macro:   { reveal: 'clip-up',    durationMs: 900,  parallax: 0.08, accent: '#b8a9c9'                  },
  city:    { reveal: 'expand',     durationMs: 800,  parallax: 0.06, accent: '#9aa3ad'                  },
};

export const CATEGORIES: { key: PhotoCategory; label: string }[] = [
  { key: 'sunset',  label: 'Sunsets' },
  { key: 'forest',  label: 'Forests' },
  { key: 'water',   label: 'Water' },
  { key: 'astro',   label: 'Night Sky' },
  { key: 'mountain',label: 'Mountains' },
  { key: 'macro',   label: 'Macro' },
  { key: 'city',    label: 'Cityscapes' },
];

export function getPreset(photo: Photo): PresetConfig {
  // Graceful fallback: unknown/missing metadata -> calm default, never crash.
  return ANIMATION_PRESETS[photo.preset ?? photo.category] ?? ANIMATION_PRESETS.sunset;
}

export function accentOf(photo: Photo): string {
  const preset = getPreset(photo);
  const c = photo.colors?.[0];
  return c && /^#[0-9a-fA-F]{3,8}$/.test(c) ? c : preset.accent;
}
