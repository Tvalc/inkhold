import { CLIENT_IMAGES } from "./client-images-data";

export { CLIENT_IMAGES };

export function imagesFor(slug: string): string[] {
  return CLIENT_IMAGES[slug] ?? [];
}
