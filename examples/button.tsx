import * as React from 'react';
import { Component } from '../src/Component';


class Button extends Component {
    constructor() {
        super();
    }

    public render() {
        return <button>dd</button>;
    }
}

customElements.define('w-button', Button);
