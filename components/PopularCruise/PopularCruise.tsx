import React from "react";
import { Carousel } from "../Carousel/Carousel";
import { tours } from "./data";
import { TourCard } from "../TourCard/TourCard";

export const PopularCruise = () => {
     return (
          <div id="popular_cruises1">
               <div className="container">
                    <h2 className="animated">POPULAR CRUISES</h2>
                    <div className="title1 animated">
                         Welcome to our revolutionary new booking site that is dedicated to serving
                         the needs of religious travelers. We're not your average travel provider -
                         we're partnering with major religious organizations to offer their members
                         a specialized and personalized booking experience. <br />
                         Our team understand and value your faith
                    </div>
                    <br />
                    <br />
                    <Carousel data={tours} card={TourCard} />
               </div>
          </div>
     );
};
