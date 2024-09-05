import React from "react";
export default function Text() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-center border-2">
        So I started to walk into the water...
      </p>
      <p className="text-left border-2">
        So I started to walk into the water...
      </p>
      <p className="text-right border-2">
        So I started to walk into the water...
      </p>
      <p className="text-justify border-2">
        So I started to walk into the water...
      </p>
      <p className="text-end border-2">
        So I started to walk into the water...
      </p>
      <p className="text-start border-2">
        So I started to walk into the water...
      </p>

      <hr />
      <br />
      <h1 className="font-bold ">Text Decoration</h1>
      <p className="underline decoration-red-500">The quick brown fox ...</p>
      <p className="overline decoration-red-500">The quick brown fox ...</p>
      <p className="line-through decoration-red-500">The quick brown fox ...</p>
      <p className="no-underline decoration-red-500">The quick brown fox ...</p>

      <hr />
      <br />
      <h1 className="font-bold ">Decoration Style</h1>

      <p className="underline decoration-solid ...">The quick brown fox...</p>
      <p className="underline decoration-wavy">The quick brown fox...</p>
      <p className="underline decoration-double">The quick brown fox...</p>
      <p className="underline decoration-dotted">The quick brown fox...</p>
      <p className="underline decoration-dashed">The quick brown fox...</p>

      <hr />
      <br />
      <h1 className="font-bold ">Text Transform</h1>

      <p className="normal-case ">The quick brown fox </p>
      <p className="uppercase ">The quick brown fox </p>
      <p className="lowercase ...">The quick brown fox </p>
      <p className="capitalize ">The quick brown fox </p>

      <hr />
      <br />
      <h1 className="font-bold ">Decoration thickness</h1>

      <p className="underline decoration-1">The quick brown fox...</p>
      <p className="underline decoration-2">The quick brown fox...</p>
      <p className="underline decoration-4">The quick brown fox...</p>
    </div>
  );
}
