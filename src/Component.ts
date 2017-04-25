import * as React from 'react';
import { render } from 'react-dom';

export class Component extends HTMLElement {
    constructor() {
        super();
    }

    public render() {
        // Not called
    }

    private renderIntoElement() {
        const el: any = this.render();
        render(el, this);
    }

    private connectedCallback() {
        this.renderIntoElement();
    }

}
