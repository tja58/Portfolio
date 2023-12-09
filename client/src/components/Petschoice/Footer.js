import React from "react";

import { facebook, twitter, instagram } from "../../imgs/PetsChoice/socials";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-copy">Pets Choice &copy; 2023</div>
      <div className="footer-social">
        <img src={facebook} alt="facebook" />
        <img src={twitter} alt="twitter" />
        <img src={instagram} alt="instagram" />
      </div>
    </div>
  );
}
