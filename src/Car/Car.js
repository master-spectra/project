import React, { Component } from "react";
import cars from "./Car.module.scss";

export class Car extends Component {
    constructor(props) {
        super(props);
    }
    
    checkHandler(e) {
        const text = e.target.value;

        if (text.length > 0) {
            e.target.classList.remove(cars.red);
            e.target.classList.add(cars.green);
        } else {
            e.target.classList.remove(cars.green);
            e.target.classList.add(cars.red);
        };
    }

    render() {
        const {name, year, changeNameHandler, changeYearHandler, removeHandler, reviewHandler, price} = this.props;

        return (
            <div className={cars.car}>
                <div className={cars.wrapper}>
                    <h1 className={cars.car_main_title} >
                        Car name: 
                        <span>{name}</span>
                    </h1>
                    <p className={cars.car_text}>
                        Year:
                        <span> {year}</span>
                    </p>
                    <form>
                        <input type="text" className={`${cars.car_input} ${cars.green}`} value={name} onInput={(e) => this.checkHandler(e)} onChange={(e) => changeNameHandler(e)} />
                        <input type="text" className={`${cars.car_input} ${cars.green}`} value={year} onInput={(e) => this.checkHandler(e)} onChange={(e) => changeYearHandler(e)} />
                    </form>
                    <p className={cars.car_price}>Price: {price}</p>
                    <div className={cars.car_btn_wrap}>
                        <button className={cars.car_btn} onClick={removeHandler}>Remove</button>
                        <button className={cars.car_btn} onClick={() => reviewHandler(name, year)}>Review</button>
                    </div>
                </div>
            </div>
        )
    }
};