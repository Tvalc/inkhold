import type { Artist } from "@/lib/types";
import { imagesFor } from "@/lib/client-images";
import { PORTFOLIO_CREDIT } from "@/lib/portfolio-credit";
import { WorkWall } from "@/components/WorkWall";

type Props = {
  artist: Artist;
  children: React.ReactNode;
};

export function InkStage({ artist, children }: Props) {
  const images = imagesFor(artist.slug);
  const credit = PORTFOLIO_CREDIT[artist.slug];

  return (
    <div className="atelier">
      <section className="atelier-work" aria-label={`${artist.studio} work`}>
        <WorkWall
          studio={artist.studio}
          images={images}
          credit={credit}
        />
      </section>
      <section className="atelier-book">{children}</section>
    </div>
  );
}
