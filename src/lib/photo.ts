// Typed photo metadata - the single source of truth for the animation engine.
export type PhotoCategory =
  | 'sunset' | 'forest' | 'water' | 'astro' | 'mountain' | 'macro' | 'city';

export type FocalPoint = { x: number; y: number }; // percentages 0-100

export interface Photo {
  id: string;
  src: string;              // path under /public/images
  title: string;
  category: PhotoCategory;
  tags: string[];
  colors: string[];          // dominant colors, first = primary accent
  mood: string;
  focalPoint?: FocalPoint;   // where the subject sits (used for object-position)
  preset?: PhotoCategory;    // manual animation override (defaults to category)
  caption?: string;          // factual only - never invented
  alt: string;               // required for accessibility
  date?: string;             // ISO, optional; unknown stays undefined
  location?: string;         // only if you want it public
}
