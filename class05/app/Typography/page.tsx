import React from "react";

export default function Typographi() {
  return (
    <div>
      <h1 className="font-mono hover:font-sans text-2xl font-bold ">
        Garlic bread with cheese: What the science tells us
      </h1>

      <p className="subpixel-antialiased">The quick brown fox ...</p>
      <p className="antialiased hover:subpixel-antialiased">
        The quick brown fox ...
      </p>


        <hr />
        <br />
    <h1 className="font-bold">Letter Spacing</h1>
      <p className="tracking-tight ...">The quick brown fox ...</p>
      <p className="tracking-normal ...">The quick brown fox ...</p>
      <p className="tracking-wide ...">The quick brown fox ...</p>
    </div>
  );
}
