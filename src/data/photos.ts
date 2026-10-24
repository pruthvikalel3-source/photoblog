import type { Photo } from '../lib/photo';

// DEMO PHOTOS: these point at hosted placeholder images so the site works out of the box.
// TODO(you): download your own photos into public/images/ and change src to
// '/images/your-photo.webp' — then fill in YOUR real title, caption, tags, colors,
// focalPoint, alt text, and date. Never invent metadata you don't know.
const DEMO = {
  sunset: 'https://d3p662obnq9uz2.cloudfront.net/generated-images/df812c05.webp',
  forest: 'https://d3p662obnq9uz2.cloudfront.net/generated-images/d15ee778.webp',
  astro: 'https://d3p662obnq9uz2.cloudfront.net/generated-images/6bd7bcfb.webp',
  mountain: 'https://d3p662obnq9uz2.cloudfront.net/generated-images/3d64642e.webp',
};

export const photos: Photo[] = [
  {
    id: 'golden-ridge',
    src: DEMO.sunset,
    title: 'Golden Ridge',
    category: 'sunset',
    tags: ['golden hour', 'ridgelines', 'haze'],
    colors: ['#c98a3a', '#7a4a2b'],
    mood: 'serene',
    focalPoint: { x: 62, y: 38 },
    caption: 'Layered ridgelines dissolving into warm evening haze.',
    alt: 'Sunset over layered mountain ridgelines in golden light.',
    date: '2026-10-20',
  },
  {
    id: 'misty-pines',
    src: DEMO.forest,
    title: 'Misty Pines',
    category: 'forest',
    tags: ['fog', 'pines', 'dawn'],
    colors: ['#8fa385', '#4a5544'],
    mood: 'quiet',
    focalPoint: { x: 50, y: 55 },
    caption: 'Fog drifting between pines in first light.',
    alt: 'Foggy pine forest at dawn with soft morning light.',
    date: '2026-10-21',
  },
  {
    id: 'milky-way-arch',
    src: DEMO.astro,
    title: 'Milky Way Arch',
    category: 'astro',
    tags: ['night sky', 'milky way', 'stars'],
    colors: ['#6d7fc4', '#2b3350'],
    mood: 'vast',
    focalPoint: { x: 50, y: 30 },
    caption: 'The galactic core above a dark horizon.',
    alt: 'Milky Way arching over silhouetted mountains.',
    date: '2026-10-22',
  },
  {
    id: 'blue-hour-peaks',
    src: DEMO.mountain,
    title: 'Blue Hour Peaks',
    category: 'mountain',
    tags: ['snow', 'blue hour', 'panorama'],
    colors: ['#aebcc9', '#5d6b7a'],
    mood: 'expansive',
    focalPoint: { x: 45, y: 40 },
    caption: 'Crisp snow ridges under a fading blue sky.',
    alt: 'Snow-capped mountain peaks at blue hour.',
    date: '2026-10-23',
  },
];
