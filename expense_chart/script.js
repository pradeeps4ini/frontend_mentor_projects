"use strict";


const jsonData = [
  {
    "day": "mon",
    "amount": 17.45
  },  
  {
    "day": "tue",
    "amount": 34.91
  },  
  {
    "day": "wed",
    "amount": 52.36
  },  
  {
    "day": "thu",
    "amount": 31.07
  },  
  {
    "day": "fri",
    "amount": 23.39
  },  
  {
    "day": "sat",
    "amount": 43.28
  },  
  {
    "day": "sun",
    "amount": 25.48
  }
];



const domElements =(function() {
  
  const bars = document.querySelectorAll(".bar div");
  
  return { bars };
})();


const filterJsonData = function() {
  const amounts = jsonData.map((item) => {
    return item.amount;
  });   

  return amounts;
};


const drawBars = function(div, amount, bgColor) {
  const height = amount;
  div.setAttribute("data-stat", `$${amount}`); 
  div.style.cssText += `height: ${amount * 2}px; background-color: ${bgColor};`;
}; 


const greatestNumIndex = function(arr) {
  let temp = 0;
  let index = 0
  arr.forEach((item, i) => {
    if (item > temp) {
      temp = item;
      index = i;
    };
  });

  return index;
}


const makeBars = function() {
  const amounts = filterJsonData();
  const barDivs = domElements.bars;   

  const maxBgColor = "hsl(184.2, 34.3%, 59.4%)";
  const otherBgColor = "hsl(10.4, 79.1%, 64.3%)";

  const maxAmountIndex = greatestNumIndex(amounts);
  let bgColor;

  for (let i = 0; i < amounts.length; i += 1) {
      
    (i === maxAmountIndex) ? bgColor = maxBgColor : bgColor = otherBgColor;
    drawBars(barDivs[i], amounts[i], bgColor);
  };
};


makeBars();



