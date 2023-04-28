import React, { FC } from "react";
// import { useSelector } from "react-redux";
// import { RootStateProps } from "../../redux/types";
import { useNavStyles } from "./styles";
import Image from "next/image";
import logo from "../../assets/images/logo1.png";
import Link from "next/link";
import { navList } from "./data";
import { useRouter } from "next/router";
import { UrlObject } from "url";
import { useSelector } from "react-redux";
import { RootStateProps } from "../../redux/types";

export const Nav: FC<any> = () => {
     const classes = useNavStyles();
     const router = useRouter();
     const currentRoute = useSelector((state: RootStateProps) => state.appStateReducer?.routeName);

     return (
          <div className={classes.root}>
               <div className="top2_wrapper">
                    <div className="container">
                         <div className="top2 clearfix">
                              <header>
                                   <div className="logo_wrapper">
                                        <Link href="/">
                                             <div
                                                  className={"logo"}
                                                  style={{
                                                       width: 200,
                                                       height: 50,
                                                       marginTop: 20,
                                                  }}
                                             >
                                                  <Image
                                                       src={logo}
                                                       alt=""
                                                       className="img-responsive "
                                                  />
                                             </div>
                                        </Link>
                                   </div>
                              </header>
                              <div className="navbar navbar_ navbar-default">
                                   <button
                                        type="button"
                                        className="navbar-toggle collapsed"
                                        data-toggle="collapse"
                                        data-target=".navbar-collapse"
                                   >
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar" />
                                        <span className="icon-bar" />
                                        <span className="icon-bar" />
                                   </button>
                                   <div className="navbar-collapse navbar-collapse_ collapse">
                                        <ul className="nav navbar-nav sf-menu clearfix">
                                             {navList.map((nav, idx) =>
                                                  nav?.subMenu ? (
                                                       <li
                                                            className={`sub-menu sub-menu-1 ${
                                                                 nav?.name.toLowerCase() ===
                                                                 currentRoute
                                                                      ? "active"
                                                                      : ""
                                                            }`}
                                                            key={idx}
                                                       >
                                                            <Link href="#">{nav.name}</Link>
                                                            <ul>
                                                                 {nav.subMenu?.map((sub, idx) => (
                                                                      <li key={idx}>
                                                                           <Link href={sub.path}>
                                                                                {sub?.name}
                                                                           </Link>
                                                                           {(sub as any)
                                                                                ?.subMenu && (
                                                                                <ul>
                                                                                     {(
                                                                                          sub as any
                                                                                     )?.subMenu?.map(
                                                                                          (
                                                                                               navMenu: {
                                                                                                    path: string;
                                                                                                    name: string;
                                                                                               },
                                                                                               idx,
                                                                                          ) => (
                                                                                               <li
                                                                                                    key={
                                                                                                         idx
                                                                                                    }
                                                                                               >
                                                                                                    <Link
                                                                                                         href={
                                                                                                              navMenu?.path
                                                                                                         }
                                                                                                    >
                                                                                                         {
                                                                                                              navMenu?.name
                                                                                                         }
                                                                                                    </Link>
                                                                                               </li>
                                                                                          ),
                                                                                     )}
                                                                                </ul>
                                                                           )}
                                                                      </li>
                                                                 ))}
                                                            </ul>
                                                       </li>
                                                  ) : (
                                                       <li
                                                            className={
                                                                 nav?.name.toLowerCase() ===
                                                                 currentRoute
                                                                      ? "active"
                                                                      : ""
                                                            }
                                                            key={idx}
                                                       >
                                                            <Link href={nav.path}>{nav.name}</Link>
                                                       </li>
                                                  ),
                                             )}
                                        </ul>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};
