import React, {Component} from "react";
import style from "./status.module.scss";

export class Status extends Component {
    state = {editStatusMode: false, localStatus: this.props.status}

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({localStatus: this.props.status});
        };
    }

    changeEditStatusMode = () => {
        this.setState({editStatusMode: !this.state.editStatusMode});
    }

    saveStatus = value => {
        const {updateStatus} = this.props;

        this.changeEditStatusMode();
        updateStatus(value);
    }

    setStatus = localStatus => {
        this.setState({localStatus});
    }

    render = () => {
        const {status} = this.props;
        const {localStatus} = this.state;
        const input = React.createRef();

        if (!this.state.editStatusMode) {
            return (
                <div className={style.status} onDoubleClick={this.changeEditStatusMode}>
                    <p className={style.info}>О мне: {status || "----------------------"}</p>
                </div>
            );
        } else {
            return (
                <form action="" className={style.form}>
                    <input ref={input} value={localStatus} type="text" className={style.input} onChange={() => this.setStatus(input.current.value)} />
                    <button className={style.btn} onClick={() => this.saveStatus(localStatus)}>Save</button>
                </form>
            );
        };
    }
};