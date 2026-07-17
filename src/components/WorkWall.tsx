"use client";

import { useState } from "react";
import Image from "next/image";

type Credit = { label: string; url: string } | undefined;

type Props = {
  studio: string;
  images: string[];
  credit: Credit;
};

export function WorkWall({ studio, images, credit }: Props) {
  const [active, setActive] = useState(0);

  if (images.length === 0) {
    return (
      <div className="work-empty">
        <p>Portfolio photos coming — form still books the hold.</p>
        {credit ? (
          <a href={credit.url} target="_blank" rel="noreferrer">
            {credit.label}
          </a>
        ) : null}
      </div>
    );
  }

  const featured = images[active] ?? images[0];

  return (
    <div className="work-wall">
      <div className="work-featured" key={featured}>
        <Image
          src={featured}
          alt={`${studio} tattoo`}
          width={900}
          height={1100}
          className="work-featured-img"
          priority
          unoptimized
        />
      </div>

      {images.length > 1 ? (
        <div className="work-thumbs" role="list">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              role="listitem"
              className={`work-thumb${i === active ? " is-active" : ""}`}
              onClick={() => setActive(i)}
              aria-label={`Show tattoo ${i + 1}`}
            >
              <Image
                src={src}
                alt=""
                width={200}
                height={200}
                className="work-thumb-img"
                unoptimized
              />
            </button>
          ))}
        </div>
      ) : null}

      {credit ? (
        <p className="work-credit">
          From{" "}
          <a href={credit.url} target="_blank" rel="noreferrer">
            {credit.label}
          </a>
        </p>
      ) : null}
    </div>
  );
}
