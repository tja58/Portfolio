import React from "react";
import { Link } from "react-router-dom";

import { Letters, AllBrands } from "../../components/Petschoice/AllBrands";

function RenderLetters() {
  return (
    <ul className="Brand-letters-ctnr">
      {Letters.map((letter) => {
        const letterFormat = `#${letter}`;
        return (
          <a href={letterFormat} className="BrandLetters" key={letterFormat}>
            {letter}
          </a>
        );
      })}
    </ul>
  );
}

function RenderBrands() {
  return (
    <>
      {AllBrands.map((e) => {
        return (
          <div className="Brands-section" id={e.letter} key={e.letter}>
            <div className="Brands-section-label">{e.letter}</div>
            <ul className="Brands-section-ctnr">
              {e.brands &&
                e.brands.map((brand) => {
                  return (
                    <Link to="#/" className="Brands" key={brand}>
                      {brand}
                    </Link>
                  );
                })}
            </ul>
          </div>
        );
      })}
    </>
  );
}

export default function Brands() {
  return (
    <div className="Ctnr">
      <div className="Brands-Ctnr">
        <div className="Brands-header">Shop By Brands</div>
        {RenderLetters()}
        {RenderBrands()}
      </div>
    </div>
  );
}
