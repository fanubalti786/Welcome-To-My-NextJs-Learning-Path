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

      <hr />
      <br />
      <h1 className="font-bold">Line Height</h1>

      <p className="leading-normal ...">
        So I started to walk into the water...
      </p>
      <p className="leading-relaxed ...">
        So I started to walk into the water...
      </p>
      <p className="leading-loose ...">
        So I started to walk into the water...
      </p>
      <hr />
      <br />

      <p className="leading-6 ...">So I started to walk into the water...</p>
      <p className="leading-7 ...">So I started to walk into the water...</p>
      <p className="leading-8 ...">So I started to walk into the water...</p>
    </div>
  );
}
