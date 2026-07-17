import Image from "next/image";
import type { Artist } from "@/lib/types";
import { imagesFor } from "@/lib/client-images";
import { PORTFOLIO_CREDIT } from "@/lib/portfolio-credit";

type Props = {
  artist: Artist;
  children: React.ReactNode;
};

function cycle(images: string[], count: number, offset = 0): string[] {
  if (images.length === 0) return [];
  return Array.from({ length: count }, (_, i) => images[(i + offset) % images.length]);
}

export function InkStage({ artist, children }: Props) {
  const images = imagesFor(artist.slug);
  const credit = PORTFOLIO_CREDIT[artist.slug];
  const left = cycle(images, 5, 0);
  const right = cycle(images, 5, 2);
  const bg = cycle(images, 9, 1);

  return (
    <div className="ink-stage">
      {bg.length > 0 ? (
        <div className="ink-bg" aria-hidden>
          {bg.map((src, i) => (
            <div key={`bg-${src}-${i}`} className="ink-bg-cell">
              <Image
                src={src}
                alt=""
                fill
                sizes="33vw"
                className="ink-bg-img"
                unoptimized
                priority={i < 3}
              />
            </div>
          ))}
          <div className="ink-bg-veil" />
        </div>
      ) : (
        <div className="ink-bg ink-bg-empty" aria-hidden />
      )}

      <aside className="ink-rail ink-rail-left" aria-hidden={left.length === 0}>
        {left.map((src, i) => (
          <div key={`L-${src}-${i}`} className="ink-rail-cell">
            <Image
              src={src}
              alt=""
              fill
              sizes="22vw"
              className="ink-rail-img"
              unoptimized
              priority={i < 2}
            />
          </div>
        ))}
      </aside>

      <div className="ink-center">{children}</div>

      <aside className="ink-rail ink-rail-right" aria-hidden={right.length === 0}>
        {right.map((src, i) => (
          <div key={`R-${src}-${i}`} className="ink-rail-cell">
            <Image
              src={src}
              alt=""
              fill
              sizes="22vw"
              className="ink-rail-img"
              unoptimized
              priority={i < 2}
            />
          </div>
        ))}
      </aside>

      {credit ? (
        <p className="ink-credit">
          Work from{" "}
          <a href={credit.url} target="_blank" rel="noreferrer">
            {credit.label}
          </a>
        </p>
      ) : null}
    </div>
  );
}
