import React from 'react';
import { render } from 'react-dom';
import { wrappo } from '../src/Component';

@wrappo({
    renderer: render,
    // shadow: false,
    // name: 'w-button',
    // props: {},
})
class Button extends React.Component {

    constructor() {
        super();
    }

    render() {
        return <button>dd</button>;
    }
}

customElements.define('w-button', Button);



@wrappo({
    renderer: render
})
class Form extends React.Component{

    constructor() {
        super();
        this.state = {};
    }

    handleClick(e) {
        this.setState({text: 'i was clicked'})
    }

    render() {
        return <div>
            <label htmlFor="">{this.state.text}</label>
            <button onClick={this.handleClick.bind(this)}>click me</button>
        </div>;
    }
}

customElements.define('w-form', Form);
