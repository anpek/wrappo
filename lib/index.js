"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Component extends HTMLElement {
    constructor() {
        super();
    }
    set(name, val) {
        this.setAttribute(name, val);
        this.renderIntoElement();
    }
    get(name) {
        this.getAttribute(name);
    }
    connectedCallback() {
        this.renderIntoElement();
    }
    renderIntoElement() {
        const { renderer, jsxFactory, shadow, } = this.opts;
        let mountTarget;
        if (shadow) {
            mountTarget = this.attachShadow({ mode: 'open' });
        }
        else {
            mountTarget = this;
        }
        const elementAttributes = getAttributes(this);
        const finalProps = Object.assign({}, this.component.defaultProps || {}, elementAttributes);
        renderer(jsxFactory(this.component, finalProps), mountTarget);
    }
}
function getAttributes(el) {
    const attrs = {};
    for (const { nodeName, value } of el.attributes) {
        attrs[nodeName] = value;
    }
    return attrs;
}
function wrappo(opts) {
    return function (target) {
        const w = class extends Component {
        };
        w.prototype.opts = opts;
        w.prototype.component = target;
        customElements.define(opts.name, w);
        const finalProps = Object.assign({}, target.defaultProps || {}, opts.attributes);
        target.defaultProps = finalProps;
        return target;
    };
}
exports.wrappo = wrappo;
