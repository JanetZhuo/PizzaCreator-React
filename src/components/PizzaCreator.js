import React from 'react';
import toppings from '../data/toppings';
import sizes from '../data/sizes';
import Toppings from './Toppings';
import Sizes from './Sizes';
import Summary from './Summary';

export default class PizzaCreator extends React.Component {
    constructor(props){
        super(props);
        
        this.state ={
            toppings,
            sizes,
            selectedTopping: [],
            selectedSize: [],
        }

        this.onToppingClick = this.onToppingClick.bind(this);
        this.onSizeClick = this.onSizeClick.bind(this);
        this.onAddToppingClick = this.onAddToppingClick.bind(this);
        this.onMinusToppingClick = this.onMinusToppingClick.bind(this);
    }

    onToppingClick(topping) {
        const { selectedToppings } = this.state;
        const isExists = this.state.selectedToppings.find(({ name }) => name === topping.name);
    
        const newSelectedToppings = !isExists 
          ? [{ ...topping, amount: 1 }, ...selectedToppings] 
          : selectedToppings.filter(({ name }) => name !== topping.name);
    
        this.setState({
          selectedToppings: newSelectedToppings,
        });
      }
    
    onSizeClick(size) {
        this.setState({
            selectedSize: size,
        });
    }
    
    onAddToppingClick(topping) {
        const { selectedToppings } = this.state;
        
        const newSelectedToppings = selectedToppings.map(selectedTopping => {
            const { name } = selectedTopping;
        
            if (name === topping.name) {
            const { amount } = topping;
            const newAmount = amount + 1;
        
            return {
                ...topping,
                amount: newAmount,
            }
            }
        
            return selectedTopping;
        });
        
        this.setState({
            selectedToppings: newSelectedToppings,
        })
    }
    
    onMinusToppingClick(topping) {
        const { selectedToppings } = this.state;
        
        const newSelectedToppings = selectedToppings
            .map(selectedTopping => {
            const { name } = selectedTopping;
        
            if (name === topping.name) {
                const { amount } = topping;
                const newAmount = amount - 1;
        
                if (newAmount === 0) {
                return undefined;
                }
        
                return {
                ...topping,
                amount: newAmount,
                }
            }
        
            return selectedTopping;
            })
            .filter(newSelectedTopping => !!newSelectedTopping);
        
        this.setState({
            selectedToppings: newSelectedToppings,
        });
    }

    render() {
        const { 
            toppings,
            selectedToppings,
            sizes,
            selectedSize,
        } = this.state;
    
        return (
            <React.Fragment>
                <div className="section">
                    <h2>Choose Your Sizes</h2>
                    <Sizes
                    sizes={sizes}
                    selectedSize={selectedSize}
                    onSizeClick={this.onSizeClick}
                    />
                </div>
                <div className="section">
                    <h2>Pick Your Toppings</h2>
                    <Toppings
                    toppings={toppings}
                    selectedToppings={selectedToppings}
                    onToppingClick={this.onToppingClick}
                    />
                </div>
                <div className="section">
                    <h2>Summary</h2>
                    <Summary
                    selectedSize={selectedSize}
                    selectedToppings={selectedToppings} 
                    onAddToppingClick={this.onAddToppingClick}
                    onMinusToppingClick={this.onMinusToppingClick}
                    />
                </div>
            </React.Fragment>
        );
    }   
}