import TabPanel from "./TabPanel";
import MultiCarousel from "./MultiCarousel";
import { Title } from "./styles";

import { hourFormat } from "../lib/utils";
import StarRate from "./StarRate";
import Cast from "./Cast";
import { ClockIcon } from "./Layout/icons/ClockIcon";
import { CalendarIcon } from "./Layout/icons/CalendarIcon";

export default function MediaDetails({
  data,
  videos,
  similarMedia,
  type,
  mediaRecommendations,
}) {
  const bgImage = `https://image.tmdb.org/t/p/w1280//${data.backdrop_path}`;

  return (
    <div className="flex flex-col min-h-screen">
      <div
        style={{
          backgroundImage: `linear-gradient(175deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.1) 23%, rgba(0, 0, 0, 1) 80% ), url(${bgImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "center",
          backgroundPosition: "top",
        }}
        className="w-full h-screen pb-4 "
      >
        <div className="w-full h-full flex flex-col items-start justify-end gap-2 px-4">
          <h1 className="text-3xl font-semibold  text-white">
            {data.title ? data.title : data.name}{" "}
          </h1>
          <div className="flex flex-col items-start gap-4 ">
            <div className="flex gap-4">
              {data.runtime && (
                <span>
                  <span className="mr-2">
                    <ClockIcon />
                  </span>
                  <time>{hourFormat(data.runtime)}</time>
                </span>
              )}
              <span className="flex gap-2">
                <span>
                  <CalendarIcon />
                </span>
                <time>{new Date(data.release_date).toLocaleDateString()}</time>
              </span>
            </div>
            <span>
              <StarRate rating={data.vote_average} />
            </span>

            <Cast data={data.cast} />
          </div>
        </div>
      </div>
      <div className="bg-black mb-12 ">
        <p className="text-md mb-4 text-neutral-400 flex-1 px-4">
          {data.overview}
        </p>
        <TabPanel
          similarMedia={similarMedia}
          videos={videos}
          data={data}
          imdb_id={data.imdb_id || data.external_ids.imdb_id}
          type={type}
        />
      </div>
      {mediaRecommendations.length > 0 && (
        <div className="pl-3 pr-3 bg-transparent mb-8">
          <Title>Talvez você goste</Title>
          <MultiCarousel data={mediaRecommendations} />
        </div>
      )}
      {similarMedia.length > 0 && (
        <div className="pl-3 pr-3">
          <Title>Similares</Title>
          <MultiCarousel data={similarMedia} type={type} />
        </div>
      )}
    </div>
  );
}
