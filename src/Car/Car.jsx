import React, { Component } from "react";
import cars from "./Car.module.scss";

export class Car extends Component {
    constructor(props) {
        super(props);
    }
    
    check(e) {
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
        const {name, year, changeName, changeYear, remove} = this.props;

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
                        <input type="text" className={`${cars.car_input} ${cars.green}`} value={name} onInput={(e) => this.check(e)} onChange={(e) => changeName(e, cars.green, cars.red)} />
                        <input type="text" className={`${cars.car_input} ${cars.green}`} value={year} onInput={(e) => this.check(e)} onChange={(e) => changeYear(e, cars.green, cars.red)} />
                    </form>
                    <div className={cars.car_btn_wrap}>
                        <button className={cars.car_btn} onClick={remove}>Remove</button>
                    </div>
                </div>
            </div>
        )
    }
};