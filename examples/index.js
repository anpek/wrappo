import React from 'react';
import { render } from 'react-dom';
import { wrappo } from '../lib';

@wrappo({
    renderer: render,
    shadow: false,
    name: 'w-button',
    attributes: {
        label: 'click me'
    },
    jsxFactory: React.createElement,
})
class Button extends React.Component {

    constructor() {
        super();
    }

    render() {
        return <button onClick={this.props.onClick}>{this.props.label}</button>;
    }
}

class Input extends React.Component {

    constructor() {
        super();
    }

    render() {
        return <input type="text"></input>
    }
}


@wrappo({
    renderer: render,
    jsxFactory: React.createElement,
    name: 'w-form',
    shadow: false,
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
            <Button onClick={this.handleClick.bind(this)}/>
            <Input />
        </div>;
    }
}
