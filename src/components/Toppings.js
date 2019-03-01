import React from 'react';

export default function Toppings({
    toppings,
    selectedToppings,
    onToppingClick,
}){
    return(
        <div className = 'toppings'>
            {toppings.map(topping => {
                const { name } = topping;

                return (
                    <div
                        className = {`topping ${selectedToppings.find(({ name }) => name === topping.name) ? 'active' : ''}`}
                        key = {name}
                        onClick = {() => onToppingClick(topping)}
                    >
                        <div className = 'img'>
                            <img
                                alt = {name}
                                src = {`https://toddmotto.com/angular-pizza-creator/assets/toppings/${name}.svg`}
                            />
                        </div>
                        <span>{name}</span>
                    </div>
                )

            })} 
        </div>
    );
}

