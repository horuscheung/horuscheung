import React from "react";

/* Split a title into per-char masked spans for reveal animations. */
const Chars: React.FC<{ text: string }> = ({ text }) => (
  <>
    {text.split(" ").map((word, wi) => (
      <span className="w" key={wi}>
        {word.split("").map((c, ci) => (
          <span className="cm" key={ci}>
            <span className="c">{c}</span>
          </span>
        ))}
      </span>
    ))}
  </>
);

export default Chars;
