/**
 * Use spread syntax to add new data to a data object.
 * - The license name is called "Unsplash License".
 * - The URL to the license is https://unsplash.com/license
 * References:
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 */

import data from "./data.js";
import Cardlist from "./components/Cardlist.js";
const licence = {
  licence: "Unsplash Licence",
  licenceURL: `https://unsplash.com/license`,
};

const newData = data.map((imgData) => {
  const newImgData = { ...imgData, ...licence };
  return newImgData;
});
const mainContent = document.querySelector(".main-content");

mainContent.innerHTML = Cardlist(newData);
