import Image from "next/image";
import type { Artist } from "@/lib/types";
import { imagesFor } from "@/lib/client-images";
import { PORTFOLIO_CREDIT } from "@/lib/portfolio-credit";

type Props = {
  artist: Artist;
};

export function PortfolioGallery({ artist }: Props) {
  const images = imagesFor(artist.slug);
  const credit = PORTFOLIO_CREDIT[artist.slug];

  if (images.length === 0) {
    return (
      <div className="portfolio-empty">
        <p>
          No scrapable tattoo photos on their public site yet — open{" "}
          {credit ? (
            <a href={credit.url} target="_blank" rel="noreferrer">
              {credit.label}
            </a>
          ) : (
            "their Instagram"
          )}{" "}
          while you demo, or drop files into{" "}
          <code>public/clients/{artist.slug}/</code>.
        </p>
      </div>
    );
  }

  const [hero, ...rest] = images;

  return (
    <section className="portfolio" aria-label={`${artist.studio} portfolio`}>
      <div className="portfolio-hero">
        <Image
          src={hero}
          alt={`${artist.studio} tattoo work`}
          width={1200}
          height={900}
          className="portfolio-hero-img"
          priority
          unoptimized
        />
      </div>
      {rest.length > 0 ? (
        <div className="portfolio-grid">
          {rest.map((src) => (
            <div key={src} className="portfolio-cell">
              <Image
                src={src}
                alt={`${artist.studio} tattoo`}
                width={600}
                height={600}
                className="portfolio-cell-img"
                unoptimized
              />
            </div>
          ))}
        </div>
      ) : null}
      {credit ? (
        <p className="portfolio-credit">
          Work from{" "}
          <a href={credit.url} target="_blank" rel="noreferrer">
            {credit.label}
          </a>{" "}
          — shown here for this InkHold sales demo only. Not affiliated until
          they sign up.
        </p>
      ) : null}
    </section>
  );
}
