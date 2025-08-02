/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  if (extras.length === 0) {
    if (pizza === "Margherita") {
      return 7;
    }
    if (pizza === "Caprese") {
      return 9;
    }
    if (pizza === "Formaggio") {
      return 10;
    }
    return 0;
  }

  return (
    pizzaPrice(pizza, ...extras.slice(1)) +
    (extras.at(0) === "ExtraSauce" ? 1 : 2)
  );
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  return pizzaOrders.reduce((acc, order) => {
    return acc + pizzaPrice(order.pizza, ...order.extras);
  }, 0);
}
