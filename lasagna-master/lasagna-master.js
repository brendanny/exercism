/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(remainingTime) {
  switch (remainingTime) {
    case undefined:
      return "You forgot to set the timer.";
    case 0:
      return "Lasagna is done.";
    default:
      return "Not done, please wait.";
  }
}

export function preparationTime(layers, avgTimePerLayer = 2) {
  return layers.length * avgTimePerLayer;
}

export function quantities(layers) {
  let numNoodles = 0;
  let numSauce = 0;
  for (let i = 0; i < layers.length; i++) {
    switch (layers[i]) {
      case "noodles":
        numNoodles++;
        break;
      case "sauce":
        numSauce++;
        break;
    }
  }
  return {
    noodles: numNoodles * 50,
    sauce: numSauce * 0.2,
  };
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
}

export function scaleRecipe(recipe, scalar) {
  let scaledRecipe = { ...recipe };
  for (let key in scaledRecipe) {
    scaledRecipe[key] *= scalar / 2;
  }
  return scaledRecipe;
}
