import React from "react";
import { Pagebanner } from "../../../components/PageBanner/Pagebanner";
import { Breadcumbs } from "../../../components/Breadcumbs/Breadcumbs";
import { Scheduler } from "../../../components/Scheduler/Scheduler";
import Script from "next/script";
import { ListContainer } from "../../../components/ListContainer/ListContainer";
const paths = [{ name: "Home", url: "/" }, { name: "Pages", url: "/" }, { name: "Hotels" }];

const List = () => {
     return (
          <div className="not-front page-pages page-hotels page-about">
               <div id="main">
                    <Pagebanner />
                    <Breadcumbs paths={paths} />
                    <Scheduler />
                    <ListContainer />
               </div>
          </div>
     );
};

export default List;
