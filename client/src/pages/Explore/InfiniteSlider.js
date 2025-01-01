import React, { useEffect, useRef } from "react";

const InfiniteSlider = () => {
  return (
    <div className="overflow-hidden w-full">
      <div className="flex animate-scroller">
        {/* Original Items */}
        {[
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTWZ2Yg5bTeIAIap7n9rueLTazh5jM_hxXMmkLm1YFOYAhM8ANmJUNz00L5dEv7r81Egey-GA_ofLUYfG0TNTQdXCDWjhZuT4iovCw8oR6ghAsDuB1fGcpk&usqp=CAE",
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTWZ2Yg5bTeIAIap7n9rueLTazh5jM_hxXMmkLm1YFOYAhM8ANmJUNz00L5dEv7r81Egey-GA_ofLUYfG0TNTQdXCDWjhZuT4iovCw8oR6ghAsDuB1fGcpk&usqp=CAE",
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTWZ2Yg5bTeIAIap7n9rueLTazh5jM_hxXMmkLm1YFOYAhM8ANmJUNz00L5dEv7r81Egey-GA_ofLUYfG0TNTQdXCDWjhZuT4iovCw8oR6ghAsDuB1fGcpk&usqp=CAE",
          "https://shop.barikothi.com/cdn/shop/products/8100000232912Q3-2_0418b9d7-32dd-4a77-bc94-1d44a3738406.jpg?v=1705656368",
        ].map((value, index) => (
          <div key={index} className="w-64 h-64 mx-2">
            <img
              src={value}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {/* Duplicate Items for Seamless Loop */}
        {[
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTWZ2Yg5bTeIAIap7n9rueLTazh5jM_hxXMmkLm1YFOYAhM8ANmJUNz00L5dEv7r81Egey-GA_ofLUYfG0TNTQdXCDWjhZuT4iovCw8oR6ghAsDuB1fGcpk&usqp=CAE",
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTWZ2Yg5bTeIAIap7n9rueLTazh5jM_hxXMmkLm1YFOYAhM8ANmJUNz00L5dEv7r81Egey-GA_ofLUYfG0TNTQdXCDWjhZuT4iovCw8oR6ghAsDuB1fGcpk&usqp=CAE",
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTWZ2Yg5bTeIAIap7n9rueLTazh5jM_hxXMmkLm1YFOYAhM8ANmJUNz00L5dEv7r81Egey-GA_ofLUYfG0TNTQdXCDWjhZuT4iovCw8oR6ghAsDuB1fGcpk&usqp=CAE",
          "https://shop.barikothi.com/cdn/shop/products/8100000232912Q3-2_0418b9d7-32dd-4a77-bc94-1d44a3738406.jpg?v=1705656368",
        ].map((value, index) => (
          <div key={index + 4} className="w-64 h-64 mx-2">
            <img
              src={value}
              alt={`Duplicate Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;
