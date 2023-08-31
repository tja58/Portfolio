import React from "react";
import { Link } from "react-router-dom";

import { pets, petFood } from "../imgs/home";
import { Dog, Cat, Fish, Bird, Reptile, SmallPet, Farm } from "../imgs/pets";
import {
  dogToy,
  catTower,
  essential,
  essentialPromo,
} from "../imgs/home/essentials";

import {
  dogBed,
  dogCrate,
  catTowerFav,
  litterBox,
  dogTreat,
  dogFood,
  catFood,
  catLitter,
  aquarium,
  reptileEnclosure,
  smallAnimalHay,
  birdFeed,
} from "../imgs/home/favorites";
import logo from "../imgs/logo/pets-logo-white-transparent.png";

const ShopPet = [
  {
    img: Farm,
    label: "Farm & Backyard Animal",
    href: "#/",
    key: 7,
  },
  {
    img: Dog,
    label: "Dog",
    href: "#/",
    key: 1,
  },
  {
    img: Cat,
    label: "Cat",
    href: "#/",
    key: 2,
  },
  {
    img: Fish,
    label: "Fish",
    href: "#/",
    key: 3,
  },
  {
    img: Bird,
    label: "Bird",
    href: "#/",
    key: 4,
  },
  {
    img: Reptile,
    label: "Reptile",
    href: "#/",
    key: 5,
  },
  {
    img: SmallPet,
    label: "Small Pet",
    href: "#/",
    key: 6,
  },
];
const favImg = [
  {
    src: dogBed,
    label: "Dog Beds & Furniture",
  },
  {
    src: dogCrate,
    label: "Dog Carriers & Crates",
  },
  {
    src: catTowerFav,
    label: "Cat Furniture & Towers",
  },
  {
    src: litterBox,
    label: "Litter Box",
  },
  {
    src: dogTreat,
    label: "Dog Treats",
  },
  {
    src: dogFood,
    label: "Dog Fresh Food",
  },
  {
    src: catFood,
    label: "Cat Wet Food",
  },
  {
    src: catLitter,
    label: "Cat Litter",
  },
  {
    src: aquarium,
    label: "Aquariums",
  },
  {
    src: reptileEnclosure,
    label: "Reptile Starter Kits",
  },
  {
    src: smallAnimalHay,
    label: "Small Pet Hay",
  },
  {
    src: birdFeed,
    label: "Bird Food",
  },
];

function RenderContent() {
  return ShopPet.map((e) => {
    return (
      <div className={"child child" + e.key} key={e.key}>
        <img src={e.img} alt={e.label} />
        <Link to={e.href}>{e.label}</Link>
      </div>
    );
  });
}
function RenderFav() {
  return favImg.map((e) => {
    return (
      <div key={e.label} className="home-fav-img">
        <img src={e.src} alt={e.label} />
        <Link to="#/">{e.label}</Link>
      </div>
    );
  });
}

export default function Home() {
  let counter = 0;
  let infiniteCounter = 0;

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
                {RenderContent()}
              </div>
            </div>

            <i
              className="fa-solid fa-chevron-right right-arrow"
              id="right-arrow"
              onClick={ctnrClick}
            ></i>
          </div>
        </div>
        <div className="home-essentials">
          <span className="home-section-header ">Pet essentials</span>
          <div className="home-essential-imgs">
            <div className="essential-container">
              <img src={essential} alt="Essential" className="essential-img" />
              <div className="essential-img-text-ctnr">
                <div className="essential-img-text">
                  <Link to="#/">Summer Fun</Link>
                </div>
              </div>
            </div>

            <div className="essential-container">
              <img src={essentialPromo} alt="Promo" className="essential-img" />
              <div className="essential-img-text-ctnr">
                <div className="essential-img-text">
                  <Link to="#/">Summer Sales</Link>
                </div>
              </div>
            </div>

            <div className="essential-container">
              <img src={dogToy} alt="Dog Toy" className="essential-img" />
              <div className="essential-img-text-ctnr">
                <div className="essential-img-text">
                  <Link to="#/">Dog Toys</Link>
                </div>
              </div>
            </div>

            <div className="essential-container">
              <img src={catTower} alt="Cat Tower" className="essential-img" />
              <div className="essential-img-text-ctnr">
                <div className="essential-img-text">
                  <Link to="#/">Cat Toys</Link>
                </div>
              </div>
            </div>
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
          <div className="home-fav-ctnr">{RenderFav()}</div>
        </div>
        <div className="home-services">
          <span className="home-section-header">Pet services</span>
        </div>
        <div className="home-brands">
          <span className="home-section-header">Featured brands</span>
        </div>
        <div className="home-resources">
          <span className="home-section-header">Pet parent resources</span>
        </div>
      </div>
    </div>
  );
}
