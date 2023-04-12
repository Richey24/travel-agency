import React from "react";
import { Scheduler } from "../Scheduler/Scheduler";

export const Header = () => {
     return (
          <>
               <div className="video-background-wrapper">
                    <video preload="auto" autoPlay className="video-background">
                         <source type="video/mp4" src={"/video/bg_video.mp4"} />
                         {/*<source type="video/ogv" src="video/video.ogv" />*/}
                         {/*<source type="video/webm" src="video/video.webm" />*/}
                    </video>
               </div>
               <Scheduler />
          </>
     );
};
