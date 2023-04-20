import React from "react";
import star1 from "../../assets/images/star1.png";
import star2 from "../../assets/images/star2.png";
import Image from "next/image";

export const StarCount = ({ rateCount }: { rateCount: number }) => {
     return (
          <div className="stars1">
               {[...Array(5)].map((_, count) => {
                    if (count < rateCount) {
                         return <Image src={star1} alt="" key={count} />;
                    }
                    return <Image src={star2} alt="" key={count} />;
               })}
          </div>
     );
};
