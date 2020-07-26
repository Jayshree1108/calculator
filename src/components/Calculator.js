//it is a class component
import React, { Component } from 'react';
import Operations from './Operations.js';
import Webapp from './Webapp.css';


class Calculator extends Component {

    constructor(props){
        super(props);
        this.state = {
        inputResult : 0
      }
    }       

    updateInput = (event) => {
        if(typeof (event.target.value) === 'number'){
           var newValue = this.state.inputResult + event.target.value;
        }
        this.setState({ 
            inputResult: newValue
        })
    }

    getNumber = (num) => {
        console.log(num);
        var inputValue = document.getElementById('input');
        switch (num){
            case '1': 
            inputValue.value += '1';
            break;
            case '2': 
            inputValue.value += '2';
            break;
            case '3': 
            inputValue.value += '3';
            break;
            case '4': 
            inputValue.value += '4';
            break;
            case '5': 
            inputValue.value += '5';
            break;
            case '6': 
            inputValue.value += '6';
            break;
            case '7': 
            inputValue.value += '7';
            break;
            case '8': 
            inputValue.value += '8';
            break;
            case '9': 
            inputValue.value += '9';
            break;
            case '0': 
            inputValue.value += '0';
            break;
        }
    }

    getOperand = (operand) => {
        console.log(operand);
        var inputValue = document.getElementById('input');
        switch (operand){
            case '+': 
            inputValue.value += '+';
            break;
            case '-': 
            inputValue.value += '-';
            break;
            case '/': 
            inputValue.value += '/';
            break;
            case '*': 
            inputValue.value += '*';
            break;
            case '.': 
            inputValue.value += '.';
            break;
            case '(': 
            inputValue.value += '(';
            break;
            case ')': 
            inputValue.value += ')';
            break;
        }
    }

    clearScreen = () => {
        document.getElementById('input').value = '';
        document.getElementById('answer').value = 0;
    }

    getResult = () => {
        var inputValue = document.getElementById('input');
        var answerValue = document.getElementById('answer');

        try {
            answerValue.value = Math.floor(+eval(inputValue.value));
        } catch (e) {
            if (e instanceof SyntaxError) {
                alert(e.message);
            }
        }  
    }

    backspace = () => {
        var inputValue = document.getElementById('input');
        var x = inputValue.value;
        if(inputValue.value.length >0){
             x = x.substring(0, x.length-1);
             inputValue.value = x;
        }
    }

    render() {
        return (
            <div className='cal-border'>
                <h4>Simple Math Calculator</h4>
                <div className='row padding6'>
                    <input type="text" className='margin-btm' id='input' readOnly="readOnly"></input>
                    <input type="text" className='margin-top' id='answer'readOnly="readOnly" value={this.state.inputResult}></input>
                </div>
                <div className='row'>
                    <button className="btn-style" onClick={() => this.clearScreen()}>CE</button>
                    <button className="btn-style" onClick={() => this.getOperand('/')}>&#247;</button>
                    <button className="btn-style" onClick={() => this.getOperand('*')}>x</button>
                    <button className="btn-style" onClick={() => this.backspace()}>&#8592;</button>
                </div>
                <div className='row'>
                    <button className="btn-style" onClick={() => this.getNumber('1')}>1</button>
                    <button className="btn-style" onClick={() => this.getNumber('2')}>2</button>
                    <button className="btn-style" onClick={() => this.getNumber('3')}>3</button>
                    <button className="btn-style" onClick={() => this.getOperand('+')}>+</button>
                </div>
                <div className='row'>
                    <button className="btn-style" onClick={() => this.getNumber('4')}>4</button>
                    <button className="btn-style" onClick={() => this.getNumber('5')}>5</button>
                    <button className="btn-style" onClick={() => this.getNumber('6')}>6</button>
                    <button className="btn-style" onClick={() => this.getOperand('-')}>-</button>
                </div>
                <div className='row'>
                    <button className="btn-style" onClick={() => this.getNumber('7')}>7</button>
                    <button className="btn-style" onClick={() => this.getNumber('8')}>8</button>
                    <button className="btn-style" onClick={() => this.getNumber('9')}>9</button>
                    <button className="btn-style" onClick={() => this.getOperand('.')}>.</button>
                </div>
                <div className='row'>
                    <button className="btn-style" onClick={() => this.getOperand('(')}>(</button>
                    <button className="btn-style" onClick={() => this.getOperand(')')}>)</button>
                    <button className="btn-style" onClick={() => this.getNumber('0')}>0</button>
                    <button className="btn-style" onClick={() => this.getResult()}>=</button>
                </div>
            </div>
        )
    }
}

export default Calculator;