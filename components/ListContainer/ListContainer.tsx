import React from "react";
import { Qoute } from "../Qoute/Qoute";
import { PassangerFilter } from "../PassangerFilter/PassangerFilter";
import { data } from "./data";
import { SalesCard } from "../SalesCard/SalesCard";
import { Pagination } from "../Pagination/Pagination";

export const ListContainer = () => {
     return (
          <div id="content">
               <div className="container">
                    <div className="row">
                         <div className="col-sm-3">
                              <PassangerFilter />
                              <ul className="ul3">
                                   <li>
                                        <a href="#">Star Raiting</a>
                                   </li>
                                   <li>
                                        <a href="#">Price Range</a>
                                   </li>
                                   <li>
                                        <a href="#">Departure Ports</a>
                                   </li>
                                   <li>
                                        <a href="#">Trip Duration</a>
                                   </li>
                                   <li>
                                        <a href="#">Ships</a>
                                   </li>
                              </ul>
                              <Qoute />
                         </div>
                         <div className="col-sm-9">
                              <form action="javascript:;" className="form3 clearfix">
                                   <div className="select1_wrapper txt">
                                        <label>Sort by:</label>
                                   </div>
                                   <div className="select1_wrapper sel">
                                        <div className="select1_inner">
                                             <select
                                                  className="select2 select"
                                                  style={{
                                                       width: "100%",
                                                  }}
                                             >
                                                  <option value={1}>Name</option>
                                                  <option value={2}>Name2</option>
                                                  <option value={2}>Name3</option>
                                             </select>
                                        </div>
                                   </div>
                                   <div className="select1_wrapper sel">
                                        <div className="select1_inner">
                                             <select
                                                  className="select2 select"
                                                  style={{
                                                       width: "100%",
                                                  }}
                                             >
                                                  <option value={1}>Price</option>
                                                  <option value={2}>Price2</option>
                                                  <option value={2}>Price3</option>
                                             </select>
                                        </div>
                                   </div>
                                   <div className="select1_wrapper sel">
                                        <div className="select1_inner">
                                             <select
                                                  className="select2 select"
                                                  style={{
                                                       width: "100%",
                                                  }}
                                             >
                                                  <option value={1}>Raiting</option>
                                                  <option value={2}>Raiting2</option>
                                                  <option value={2}>Raiting3</option>
                                             </select>
                                        </div>
                                   </div>
                                   <div className="select1_wrapper sel">
                                        <div className="select1_inner">
                                             <select
                                                  className="select2 select"
                                                  style={{
                                                       width: "100%",
                                                  }}
                                             >
                                                  <option value={1}>Popularity</option>
                                                  <option value={2}>Popularity2</option>
                                                  <option value={2}>Popularity3</option>
                                             </select>
                                        </div>
                                   </div>
                                   <div className="select1_wrapper buttons">
                                        <a href="#" className="btn-default s1" />
                                        <a href="#" className="btn-default s2" />
                                        <a href="#" className="btn-default s3" />
                                   </div>
                              </form>
                              <div className="row">
                                   {data.map((item, idx) => (
                                        <div className="col-sm-4" key={idx}>
                                             <SalesCard {...item} />
                                        </div>
                                   ))}
                              </div>
                              <Pagination />
                         </div>
                    </div>
               </div>
          </div>
     );
};
