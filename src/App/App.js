import React, { Component } from "react";
import main from "./App.module.scss";
import { Car } from "../Car/Car.js";

export class App extends Component {
    constructor () {
        super();

        this.state = {
            cars: [
                {
                    name: "Ford",
                    year: "2020",
                },
                {
                    name: "Audi",
                    year: "1990",   
                },
                {
                    name: "Mazda",
                    year: "2017"
                }
            ],
            price: "Price: 0$",
            pageTitle: "React JS",
            showCars: true
        };
    }

    removeHandler(index) {
        const cars = this.state.cars;

        cars.splice(index, 1);
        this.setState({cars});
    }
    
    toggleHandler() {
        const showCars = this.state.showCars;
        
        this.setState({
            showCars: !showCars
        });
    }

    getPriceHendler(name, year) {
        let priceForName = 0,
            priceForYear = 0;

        const namesLuxCars = [
            "Rolls Royce",
            "Porche",
            "Buggati"
        ];

        for (let i = 0; i < namesLuxCars.length; i++) {
            if (name.toLowerCase() === namesLuxCars[i].toLowerCase()) {
                priceForName = 10000;
                break;
            } else {
                priceForName = 5000;
            };
        };

        year >= 2015 ? priceForYear = 10000 : priceForYear = 5000;


        const price = `price: ${priceForYear + priceForName}$`;

        this.setState({price}); 
    }

    changeInputHandler(e) {
        const inputValue = e.target.value;

        this.setState({
            pageTitle: `${inputValue} - Dynamic title`
        });
    }

    changeNameHandler(text, index) {
        const cars = this.state.cars;

        cars[index].text = text;
        this.setState({cars});
    }

    changeYearHandler(text, index) {
        const cars = this.state.cars;

        cars[index].text = text;
        this.setState({cars});
    }

    render() {        
        const data = this.state.cars.map((item, index) => {
            if (this.state.showCars === true) {
                return (
                    <Car 
                        key={index} 
                        name={item.name} 
                        year={item.year} 
                        price={this.state.price}
                        getPriceHendler={
                            () => this.getPriceHendler(item.name, item.year)
                        }
                        changeNameHandler={
                            this.changeNameHandler.bind(this, item.name, index)
                        }
                        changeYearHandler={
                            this.changeYearHandler.bind(this, item.year, index)
                        }
                        removeHandler={() => this.removeHandler(index)}
                    />
                )
            } else { 
                return null;
            };
        });
        
        return (
            <div className={main.page}>
                <h1 className={main.page_title}>
                    {this.state.pageTitle}
                </h1>
                <form action="#">
                    <input type="text" onChange={(e) => this.changeInputHandler(e)} />
                </form>
                <button className={main.page_btn_change_title} onClick={() => this.toggleHandler()}>
                    Show/Hide cars
                </button>
                {data}
            </div>
        );
    }
};