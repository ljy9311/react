import React from 'react';

class Calculator extends React.Component {
    state = {
        num1: '',
        num2: '',
        selectedValue: '+',
        number: 0
    }

    reset = () => {
        this.setState({
            num1: '',
            num2: '',
            selectedValue: '+',
            number: 0
        })
    }

    result = () => {
        var num = 0
        if (this.selectedValue == '+') {
            num = parseFloat(this.state.num1) + parseFloat(this.state.num2)
        } else {
            num = eval(this.state.num1 + this.state.selectedValue + this.state.num2)
        }

        // if (this.state.selectedValue === '+') {
        //     this.setState({
        //         number: (parseFloat(this.state.num1) + parseFloat(this.state.num2))
        //     })
        // };
        this.setState({
            number: num
            //eval((parseFloat(this.state.num1) + (this.state.selectedValue).toString() + parseFloat(this.state.num2)))
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Calculator</h1>
                <div>
                    값: {this.state.number}
                    <button onClick={this.reset}> CE </button>
                </div>


                <input
                    placeholder="값1"
                    name="num1"
                    value={this.state.num1}
                    onChange={this.handleChange}
                />

                <select name='selectedValue' value={this.state.selectedValue} onChange={this.handleChange}>
                    <option value='+'> + </option>
                    <option value='-'> - </option>
                    <option value='*'> * </option>
                    <option value='/'> / </option>
                </select>

                <input
                    placeholder="값2"
                    name="num2"
                    value={this.state.num2}
                    onChange={this.handleChange}
                />

                <button onClick={this.result}> = </button>
            </div>
        )
    }
}

export default Calculator;