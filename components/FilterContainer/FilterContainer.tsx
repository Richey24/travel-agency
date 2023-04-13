import React from "react";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { StarRating } from "./components/StarRating/StarRating";
import { Qoute } from "../Qoute/Qoute";
import { SalesCard } from "../SalesCard/SalesCard";
import { data } from "../ListContainer/data";
import { Pagination } from "../Pagination/Pagination";

export const FilterContainer = () => {
     return (
          <div id="content">
               <div className="container">
                    <div className="row">
                         <div className="col-sm-3">
                              <Sidebar />
                              <div className="clearfix" />
                              <div className="margin-top" />
                              <StarRating />
                              <div className="clearfix" />
                              <div className="margin-top" />
                              <Qoute />
                         </div>
                         <div className="col-sm-9">
                              <form action="javascript:;" className="form3 clearfix">
                                   <div className="select1_wrapper txt">
                                        <label>Sort by:</label>
                                   </div>
                                   <div className="select1_wrapper sel2">
                                        <div className="select1_inner">
                                             <select
                                                  className="select2 select"
                                                  style={{ width: "100%" }}
                                             >
                                                  <option value={1}>Name</option>
                                                  <option value={2}>Name2</option>
                                                  <option value={2}>Name3</option>
                                             </select>
                                        </div>
                                   </div>
                                   <div className="select1_wrapper sel2">
                                        <div className="select1_inner">
                                             <select
                                                  className="select2 select"
                                                  style={{ width: "100%" }}
                                             >
                                                  <option value={1}>Price (low)</option>
                                                  <option value={2}>Price2</option>
                                                  <option value={2}>Price3</option>
                                             </select>
                                        </div>
                                   </div>
                                   <div className="select1_wrapper sel2">
                                        <div className="select1_inner">
                                             <select
                                                  className="select2 select"
                                                  style={{ width: "100%" }}
                                             >
                                                  <option value={1}>Stars</option>
                                                  <option value={2}>Raiting2</option>
                                                  <option value={2}>Raiting3</option>
                                             </select>
                                        </div>
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
