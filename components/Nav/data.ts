export const navList = [
     { name: "Home", path: "/" },
     { name: "About Us", path: "/aboutus" },

     {
          name: "Pages",
          path: "/",
          subMenu: [
               {
                    name: "Flights",
                    path: "/booking/list/flights",
                    subMenu: [
                         { name: "Search Flights", path: "/search/flights" },
                         { name: "Booking Flights", path: "/booking/flight" },
                         { name: "Flights Checkout", path: "/checkout/flight" },
                    ],
               },
               {
                    name: "Hotels",
                    path: "/booking/list/hotels",
                    subMenu: [
                         { name: "Search Hotels", path: "/search/hotels" },
                         { name: "Booking Hotels", path: "/booking/hotel" },
                         { name: "Hotel Reservation", path: "/checkout/hotel" },
                    ],
               },
          ],
     },
     {
          name: "Gallery",
          path: "/gallery",
     },
     //  {
     //       name: "Blog",
     //       path: "/blog",
     //       subMenu: [
     //            {
     //                 name: "Right Blog",
     //                 path: "/",
     //            },
     //            {
     //                 name: " Left Blog",
     //                 path: "/",
     //            },
     //            {
     //                 name: "Right Blog",
     //                 path: "/",
     //            },
     //            {
     //                 name: " Left Blog",
     //                 path: "/",
     //            },
     //       ],
     //  },
     {
          name: "Contacts",
          path: "/contactus",
     },
];
