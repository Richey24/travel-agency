import React, { useEffect } from "react";
import { Pagebanner } from "../components/PageBanner/Pagebanner";
import { Breadcumbs } from "../components/Breadcumbs/Breadcumbs";
import { WhyWeSection } from "../components/WhyWeSection/WhyWeSection";
import { WhatWeOfferSection } from "../components/WhatWeOfferSection/WhatWeOfferSection";
import { AboutOurCompany } from "../components/AboutOurCompany/AboutOurCompany";
import { Teams } from "../components/Teams/Teams";
import Script from "next/script";
import { useSetRouteName } from "../redux/appState/hooks";

const paths = [{ name: "home", url: "/" }, { name: "about" }];

const Aboutus = () => {
     const setRoute = useSetRouteName();

     useEffect(() => {
          setRoute("about us");
     });

     return (
          <div className="not-front page-about">
               <div id="main">
                    <Pagebanner />
                    <Breadcumbs paths={paths} />
                    <WhyWeSection />
                    <WhatWeOfferSection />
                    <AboutOurCompany />
                    <Teams />
               </div>
          </div>
     );
};

export default Aboutus;
