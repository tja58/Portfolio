import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// import logo from "../imgs/logo/pets-logo-white-transparent.png";
// import { pets, petFood } from "../imgs/home";
// import { Grooming, Training, PetHotel } from "../imgs/home/services";
// import ShopPet from "../imgs/home/pets";
// import favImg from "../imgs/home/favorites";
// import BrandImg from "../imgs/home/brands";
import logo from "../../imgs/PetsChoice/logo/pets-logo-white-transparent.png";
import { pets, petFood } from "../../imgs/PetsChoice/home";
import {
  Grooming,
  Training,
  PetHotel,
} from "../../imgs/PetsChoice/home/services";
import ShopPet from "../../imgs/PetsChoice/home/pets";
import favImg from "../../imgs/PetsChoice/home/favorites";
import BrandImg from "../../imgs/PetsChoice/home/brands";

function RenderContent(element) {
  return element.map((e) => {
    const isKey = e.key;
    return (
      <>
        {isKey ? (
          <div key={e.label} className="child">
            <img src={e.img} alt={e.label} />
            <Link to={e.href}>{e.label}</Link>
          </div>
        ) : (
          <div key={e.label} className="home-fav-img">
            <img src={e.img} alt={e.label} />
            <Link to={e.href}>{e.label}</Link>
          </div>
        )}
      </>
    );
  });
}

export default function Home() {
  let counter = 0;
  let infiniteCounter = 0;

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  });
  function ctnrClick(e) {
    document.getElementById("left-arrow").style.pointerEvents = "none";
    document.getElementById("right-arrow").style.pointerEvents = "none";

    setTimeout(() => {
      document.getElementById("left-arrow").style.pointerEvents = "all";
      document.getElementById("right-arrow").style.pointerEvents = "all";
    }, 500);

    document.querySelector(".wrapper").style.transition = ".5s ease all";

    if (e.target.classList.contains("left-arrow")) {
      infiniteCounter = -1;
      counter += 25;
      document.querySelector(
        ".wrapper"
      ).style.transform = `translateX(${counter}%)`;
    }

    if (e.target.classList.contains("right-arrow")) {
      infiniteCounter = 1;
      counter -= 25;
      document.querySelector(
        ".wrapper"
      ).style.transform = `translateX(${counter}%)`;
    }
  }
  let infiniteCarousel = function () {
    let wrapper = document.querySelector(".wrapper");
    wrapper.style.transition = "none";
    counter = 0;

    if (infiniteCounter === 1) {
      wrapper.appendChild(wrapper.firstElementChild);
      wrapper.style.transform = `translateX(0%)`;
    }

    if (infiniteCounter === -1) {
      wrapper.style.transform = `translateX(0%)`;
      wrapper.prepend(wrapper.lastElementChild);
    }
  };

  return (
    <div className="Ctnr">
      <div className="home-ctnr">
        <div className="home-ads">
          <div>
            <img src={petFood} alt="Pets" />
          </div>
          <div className="home-ads-content">
            <h1>Save</h1>
            <span className="home-ads-dis">15% off</span>
            <span className="home-ads-desc">
              Shop all featured products through 8/31
            </span>
            <button>Shop Now</button>
          </div>
          <div>
            <img src={pets} alt="Pet Food" />
          </div>
        </div>
        <div className="home-pets">
          <span className="home-section-header">Shop by pet</span>
          <div className="home-pets-ctnr">
            <i
              className="fa-solid fa-chevron-left left-arrow"
              id="left-arrow"
              onClick={ctnrClick}
            ></i>
            <div className="container">
              <div className="wrapper" onTransitionEnd={infiniteCarousel}>
                {RenderContent(ShopPet)}
              </div>
            </div>

            <i
              className="fa-solid fa-chevron-right right-arrow"
              id="right-arrow"
              onClick={ctnrClick}
            ></i>
          </div>
        </div>
        <div className="home-rewards">
          <div className="home-rewards-ctnr">
            <span className="home-rewards-desc">
              Earn 3x points on all pet supplies valid through 8/31
            </span>
            <div>
              <img src={logo} alt="Logo" />
            </div>
            <span>
              <Link to="#/">Earn Points</Link>
            </span>
          </div>
        </div>
        <div className="home-pet-favorites">
          <span className="home-section-header">Pet favorites</span>
          <div className="home-fav-ctnr">{RenderContent(favImg)}</div>
        </div>
        <div className="home-services">
          <span className="home-section-header">Pet services</span>
          <div className="home-services-ctnr">
            <div className="home-services-desc">
              <img src={Grooming} alt="Grooming" />
              <div>
                <Link to="#/">Grooming</Link>
                <i className="fa-solid fa-scissors fa-rotate-270"></i>
              </div>
            </div>
            <div className="home-services-desc">
              <img src={Training} alt="Training" />
              <div>
                <Link to="#/">Training</Link>
                <i className="fa-solid fa-medal"></i>
              </div>
            </div>
            <div className="home-services-desc">
              <img src={PetHotel} alt="Pet Hotel" />
              <div>
                <Link to="#/">Pets Hotel</Link>
                <i className="fa-solid fa-hotel"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="home-brands">
          <span className="home-section-header">Featured brands</span>
          <div className="home-fav-ctnr">{RenderContent(BrandImg)}</div>
        </div>
      </div>
    </div>
  );
}
