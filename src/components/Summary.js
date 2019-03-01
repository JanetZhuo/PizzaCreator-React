import React from 'react';

export default ({
  selectedSize,
  selectedToppings,
  onAddToppingClick,
  onMinusToppingClick,
}) => (
  <ul className="summary">
    {selectedSize && (
      <li>
        <span>Pizza:</span>
        <span>{selectedSize.name}</span>
        <span />
        <span />
        <span>$ {selectedSize.price}</span>
      </li>
    )}
    {selectedToppings.map(topping => {
      const { name, price, amount } = topping;

      return (
        <li key={name}>
          <button onClick={() => onAddToppingClick(topping)} className="amount">+</button>
          <button onClick={() => onMinusToppingClick(topping)} className="amount">-</button>
          <span>{name}</span>
          <span>* {amount}</span>
          <span>$ {amount * price}</span>
        </li>
      )
    })}
  </ul>
);