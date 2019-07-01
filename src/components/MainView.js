import React, {Component} from 'react';
import {connect} from 'react-redux';

import {add} from '../actions/calcuate';
import {minus} from "../actions/calcuate";
import {totalNum} from "../actions/calcuate";
import {previousNum} from "../actions/calcuate"

// import {num0} from "../actions/calcuate";
// import {num1} from "../actions/calcuate";
// import {num2} from "../actions/calcuate";
// import {num3} from "../actions/calcuate";
// import {num4} from "../actions/calcuate";
// import {num5} from "../actions/calcuate";
// import {num6} from "../actions/calcuate";
// import {num7} from "../actions/calcuate";
// import {num8} from "../actions/calcuate";
// import {num9} from "../actions/calcuate";

const OP_ADD = 'OP_ADD';
const OP_MINUS = 'OP_MINUS';
const OP_TIMES = 'OP_TIMES';
const OP_DIVIDE = 'OP_DIVIDE';

class MainView extends Component {

    state = {
        currentOperator: null,
        // previousNum: 0,
        // currentNum: 0,

    };

    // state = {
    //     num1: 0,
    //     num2: 1,
    // }
    //
    // Num0Submit = (event) => {
    //     event.preventDefault();
    //     console.log('this.props.num', this.props.num);
    //     const result = 0;
    //     this.props.num0Value(num0, result)
    // };
    //
    // Num1Submit = (event) => {
    //     event.preventDefault();
    //     console.log('this.props.num', this.props.num);
    //     const result = 0;
    //     this.props.num1Value(num1, result)
    // };
    //
    // AddSubmit = (event) => {
    //     event.preventDefault();
    //     console.log('this.props.num', this.props.num);
    //     const result = 0;
    //     this.props.addValue(this.props.num + 1, result);
    //     // this.props.minusValue(this.props.num - 1);
    // };
    //
    // MinusSubmit = (event) => {
    //     event.preventDefault();
    //     console.log('this.props.num', this.props.num);
    //     const result = 0;
    //     this.props.minusValue(this.props.num - 1, result);
    // };

    componentDidMount() {
        console.log('componentDidMount');
    }

    handleNumberClick = (num) => {
        console.log('num88888', num);
        const {result, pre_num, previousValue, currentValue, addValue, minusValue} = this.props;
        // addValue(num + result);
        switch (this.state.currentOperator) {
            case OP_ADD:
                addValue(result+num);
                break;

            case  OP_MINUS:
                minusValue(result-num);
                break;

            case OP_TIMES:
                break;

            case OP_DIVIDE:

                break;

            default:
                currentValue(result*10+num);
                previousValue(result,pre_num);
                //
                // this.setState({previousNum:this.state.currentNum});
                // this.setState({currentNum:currentValue(result*10+num)});
        }
    };

    handleOperatorClick = (op) => {
        console.log('Operator on click', op);

        this.setState({currentOperator:op});
    };



    render() {

        console.log('this.props.state.num', this.props.num);

        const {result} = this.props;
        const {pre_num} = this.props;
        return (
            <div>
                <div>
                    <span>{result}</span>
                    <span>{}</span>
                    <button onClick={() => this.handleNumberClick(0)}>0</button>
                <button onClick={() => this.handleNumberClick(1)}>1</button>
                <button onClick={() => this.handleNumberClick(2)}>2</button>
                <button onClick={() => this.handleNumberClick(3)}>3</button>
                <button onClick={() => this.handleNumberClick(4)}>4</button>
                <button onClick={() => this.handleNumberClick(5)}>5</button>
                <button onClick={() => this.handleNumberClick(6)}>6</button>
                <button onClick={() => this.handleNumberClick(7)}>7</button>
                <button onClick={() => this.handleNumberClick(8)}>8</button>
                <button onClick={() => this.handleNumberClick(9)}>9</button>
                </div>
                <div>
                    <span>{pre_num}</span>
                <button onClick={() => this.handleOperatorClick(OP_ADD)}> + </button>
                <button onClick={() => this.handleOperatorClick(OP_MINUS)}> - </button>
                <button onClick={() => this.handleOperatorClick(OP_TIMES)}> x </button>
                <button onClick={() => this.handleOperatorClick(OP_DIVIDE)}> / </button>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('state', state);
    return {
        result: state.calculate.result
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        currentValue: (result) => {
            dispatch(totalNum(result));
        },

        previousValue: (result, pre_num) => {
            dispatch(previousNum(result, pre_num));
        },

        addValue: (result) => {
            dispatch(add(result));
        },

        minusValue: (result) => {
            dispatch(minus(result));
        }

    };

};

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default connector(MainView);