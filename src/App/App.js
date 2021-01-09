import React, {Component} from "react";
import main from "./App.module.scss";
import {Car} from "../Car/Car";
    
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
            price: "0$",
            pageTitle: "React JS",
            showCars: true
        };

        this.changeInputHandlerType    = "CHANGE INPUT HANDLER";
        this.changeNameHandlerType     = "CHANGE NAME HANDLER";
        this.changeYearHandlerType     = "CHANGE YEAR HANDLER";
        this.removeHandlerType         = "REMOVE HANDLER";
        this.reviewHandlerType         = "REVIEW HANDLER";
        this.toggleHandlerType         = "TOGGLE HANDLER";
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

    changeInputHandler(e) {
        const inputValue = e.target.value;

        this.setState({
            pageTitle: `${inputValue} - Dynamic title`
        });
    }

    changeNameHandler(name, index) { 
        const cars = this.state.cars;

        cars[index].name = name;
        this.setState({cars});
    }

    changeYearHandler(year, index) {
        const cars = this.state.cars;

        cars[index].year = year;
        this.setState({cars});
    }

    reviewHandler(name, year) {
        const namesLuxCars = [
            "Rolls Royce",
            "Lamborghini",
            "Ferari",
            "Porche",
            "Maserati"
        ];

        let priceForNameCars = 0,
            priceForYearCars = 0;

        for (let i = 0; i < namesLuxCars.length; i++) {
            if (name.toLowerCase() === namesLuxCars[i].toLowerCase()) {
                priceForNameCars = 20000;
                break;
            } else {
                priceForNameCars = 5000;
            };
        };

        year >= 2015 ? priceForYearCars = 20000 : priceForYearCars = 5000;

        const price = `${priceForNameCars + priceForYearCars}$`;

        this.setState({price});
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
                        changeYearHandler={
                            (e) => this.changeYearHandler(e.target.value, index)
                        } 
                        changeNameHandler={
                            (e) => this.changeNameHandler(e.target.value, index)
                        } 
                        removeHandler={
                            () => this.removeHandler(index)
                        }
                        reviewHandler={
                            (name, year) => this.reviewHandler(name, year)
                        }
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