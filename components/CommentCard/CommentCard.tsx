import React, { FC } from "react";
import { CommentCardProps } from "./types";

export const CommentCard: FC<CommentCardProps> = ({ imageUrl, name, date, content, isReply }) => {
     return (
          <div className={`comment-block clearfix ${isReply && "left1"}`}>
               <figure>
                    <img src={imageUrl} alt="" className="img-responsive" />
               </figure>
               <div className="caption">
                    <div className="top clearfix">
                         <div className="txt1">
                              By <a href="#">{name}</a>
                         </div>
                         <span>|</span>
                         <div className="txt2">{date as string}</div>
                         <span>|</span>
                         <div className="txt3">
                              <a href="#">Reply</a>
                         </div>
                    </div>
                    <div className="txt">{content}</div>
               </div>
          </div>
     );
};
