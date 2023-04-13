import React from "react";
import { Pagebanner } from "../../components/PageBanner/Pagebanner";
import { Breadcumbs } from "../../components/Breadcumbs/Breadcumbs";
import { FilterContainer } from "../../components/FilterContainer/FilterContainer";
import Script from "next/script";
const paths = [{ name: "Home", url: "/" }, { name: "Search", url: "/" }, { name: "Hotels" }];

const Search = () => {
     return (
          <div className="not-front page-post page-about">
               <div id="main">
                    <Pagebanner />
                    <Breadcumbs paths={paths} />
                    <FilterContainer />
                    <Script src="/loadedJs/script.js" crossOrigin="anonymous" defer></Script>{" "}
               </div>
          </div>
     );
};

export default Search;
