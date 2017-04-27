import React from 'react';

class Component extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.renderIntoElement();
    }

    renderIntoElement() {
        const { renderer } = this.opts;
        const ComponentToRender = this.component;
        renderer(<ComponentToRender />, this);
    }

}

export function wrappo(opts) {
    return function(target) {
        const w = class extends Component {};

        w.prototype.opts = opts;
        w.prototype.component = target;

        return w;
    };
}