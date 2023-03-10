import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle(
        "I want to feel peace again",
        "Ukrainians mark a year since Russian invasion"
      )}
      {newsArticle(
        "Ukraine war",
        "India abstains from UN vote on Russian invasion"
      )}
      {newsArticle("US billionaire dead", "Thomas Lee found dead at 78")}
      {newsArticle(
        "Asia news (China)",
        "US plans to expand training of Taiwanese forces"
      )}
    </div>
  );
}

export default Widgets;
