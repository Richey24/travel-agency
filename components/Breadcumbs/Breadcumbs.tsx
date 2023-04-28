import Link from "next/link";
import React, { FC } from "react";
import { BreadcumbsProps } from "./types";

export const Breadcumbs: FC<BreadcumbsProps> = ({ paths }) => {
     return (
          <div className="breadcrumbs1_wrapper">
               <div className="container">
                    <div className="breadcrumbs1">
                         {paths.map((path, idx) =>
                              path?.url ? (
                                   <>
                                        <Link href={path?.url} key={idx}>
                                             {path?.name}
                                        </Link>
                                        <span>/</span>
                                   </>
                              ) : (
                                   path?.name
                              ),
                         )}
                    </div>
               </div>
          </div>
     );
};
