import React, {Component} from "react";
import * as axios from "axios";

export class Users extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        const {setState} = this.props;

        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(resolve => {
                console.log(resolve.data);
                setState(resolve.data.items);
            });
    }

    render = () => {
        const {usersList, getUser} = this.props;

        return (
            <div>{getUser(usersList)}</div>
        );
    }
}