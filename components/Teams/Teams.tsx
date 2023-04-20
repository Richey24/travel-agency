import React from "react";
import { data } from "./data";
import { TeamCard } from "../TeamCard/TeamCard";

export const Teams = () => {
     return (
          <div id="team1">
               <div className="container">
                    <h2 className="animated">OUR TEAM</h2>
                    <div className="title1 animated">
                         Welcome to our revolutionary new booking site that is dedicated to serving
                         the needs of religious travelers. We're not your average travel provider -
                         we're partnering with major religious organizations to offer their members
                         a specialized and personalized booking experience. <br />
                         Our team understand and value your faith
                    </div>
                    <br />
                    <div className="row align-items-center justify-centent-center">
                         <div className="col-sm-2"></div>
                         {data.map((user, idx) => (
                              <div
                                   className="col-sm-4 "
                                   // style={{display:"flex", alignItems:"center", justifyContent:"center"}}
                                   key={idx}
                              >
                                   <TeamCard {...user} />
                              </div>
                         ))}
                         <div className="col-sm-2"></div>
                    </div>
               </div>
          </div>
     );
};
