import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

import "./teamMember.scss";

function TeamMember({ name, position, info, icon, size }) {
  return (
    <div className="card-container">
      <div className="card-img"></div>
      <div className="card-description">
        <h1 className="name">{name}</h1>
        <p className="position">{position}</p>
        {info && <p className="info">{info}</p>}
        {icon && (
          <div className="icons">
            <TwitterIcon />
            <InstagramIcon />
            <SportsEsportsIcon />
          </div>
        )}
      </div>
    </div>
  );
}

export default TeamMember;
