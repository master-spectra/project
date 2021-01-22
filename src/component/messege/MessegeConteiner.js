import { MyMessege } from "./myMessege/MyMessege";
import { Messege } from "./Messege";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        messegeList: state.messege.messegeList
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getMessege: (messegeList) => {
            const messegeLists = messegeList.map(item => {
                return <MyMessege text={item.text}/>
            });

            return messegeLists;
        }
    };
};

export const MessegeConteiner = connect(mapStateToProps, mapDispatchToProps)(Messege);