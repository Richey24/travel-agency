import React, { useState } from "react";

interface Coordinates {
     lat: number;
     lng: number;
}

const access_token =
     process.env.REACT_APP_MAPBOX_KEY ??
     "pk.eyJ1IjoidmlrdG9oIiwiYSI6ImNrcmpyamM1ZjA1ZG8ydnBjbWRpOWtjN2kifQ.auBvgsbud2l08nrj8lXZfg";

export function LocationSearch() {
     const [query, setQuery] = useState("");
     const [coordinates, setCoordinates] = useState<Coordinates | null>(null);

    
      const handleSearch = async () => {
           try {
                const response = await fetch(
                     `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${access_token}`,
                );
                const data = await response.json();
                console.log(data);
                const { lat, lng } = data.features[0].center;
                setCoordinates({ lat, lng });
           } catch (error) {
                console.error(error);
           }
      };

     return (
          <div>
               <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
               <button onClick={handleSearch}>Search</button>
               {coordinates && (
                    <>
                         <p>Latitude: {coordinates.lat}</p>
                         <p>Longitude: {coordinates.lng}</p>
                    </>
               )}
          </div>
     );
}
