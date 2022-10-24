import React, { useState } from "react";

export default function Cast({ data }) {
  const [isImgNotFound, setIsImgNotFound] = useState(false);

  function handleImgError(e) {
    e.target.onerror = null;
    setIsImgNotFound(true);
  }

  return (
    <div className="flex gap-2 items-center flex-wrap flex-1">
      {data.map((e, id) => (
        <a
          href={`/artist/${e.id}`}
          className="inline-flex flex-1 items-center"
          key={id}
        >
          <div className="overflow-hidden w-11 min-w-[2.75rem] h-11 rounded-full">
            {/* <img className="mt-auto mb-auto"  width={45} height={67} src={`https://image.tmdb.org/t/p/w45/${e.profile_path}`}/> */}
            <img
              onError={(e) => handleImgError(e)}
              className="mt-auto mb-auto"
              src={
                isImgNotFound
                  ? "/img/blank-profile-picture-44x44.png"
                  : `https://image.tmdb.org/t/p/w45/${e.profile_path}`
              }
            />
          </div>
          <p className="text-white ml-2 text-sm font-semibold inline">
            {e.name}
          </p>
        </a>
      ))}
    </div>
  );
}

// blank-profile-picture-44x44.png
