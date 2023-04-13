import React from 'react'

export const PassangerFilter = () => {
  return (
       <form action="javascript:;" className="form2 form2_flights">
            <div className="select1_wrapper clearfix">
                 <label>Passenger:</label>
                 <div className="select1_inner">
                      <select
                           className="select2 select select3"
                           style={{
                                width: "100%",
                           }}
                      >
                           <option value={1}>1</option>
                           <option value={2}>2</option>
                           <option value={3}>3</option>
                           <option value={4}>4</option>
                           <option value={5}>5</option>
                           <option value={6}>6</option>
                           <option value={7}>7</option>
                           <option value={8}>8</option>
                      </select>
                 </div>
            </div>
       </form>
  );
}
