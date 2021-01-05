import React, {Component} from "react";
import main from "./App.module.scss";
import {Car} from "../Car/Car.jsx";

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
    
            pageTitle: "React JS",
            showCars: true
        };

        this.name = "";
    }

    remove(index) {
        const cars = this.state.cars;

        cars.splice(index, 1);
        this.setState({cars});
    }
    
    toggle() {
        const showCars = this.state.showCars;
        
        this.setState({
            showCars: !showCars
        });
    }

    changeInput(e) {
        const inputValue = e.target.value;

        this.setState({
            pageTitle: `${inputValue} - Dynamic title`
        });
    }

    changeName(name, index) { 
        const cars = this.state.cars;

        cars[index].name = name;
        this.setState({cars});
    }

    changeYear(year, index) {
        const cars = this.state.cars;

        cars[index].year = year;
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
                        changeYear={
                            (e) => this.changeYear(e.target.value, index)
                        } 
                        changeName={
                            (e) => this.changeName(e.target.value, index)
                        } 
                        remove={() => this.remove(index)}
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
                    <input type="text" onChange={(e) => this.changeInput(e)} />
                </form>
                <button className={main.page_btn_change_title} onClick={() => this.toggle()}>
                    Show/Hide cars
                </button>
                {data}
            </div>
        );
    }
};