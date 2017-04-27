class Component extends HTMLElement {

    public opts: any;
    public component: any;

    constructor() {
        super();
    }

    public set(name, val) {
        this.setAttribute(name, val);
        this.renderIntoElement();
    }

    public get(name) {
        this.getAttribute(name);
    }

    private connectedCallback() {
        this.renderIntoElement();
    }

    private renderIntoElement() {
        const {
            renderer,
            jsxFactory,
            shadow,
        } = this.opts;

        let mountTarget;
        if (shadow) {
            mountTarget = this.attachShadow({mode: 'open'});
        } else {
            mountTarget = this;
        }

        const elementAttributes = getAttributes(this);
        const finalProps = Object.assign({}, this.component.defaultProps || {}, elementAttributes);

        renderer(jsxFactory(this.component, finalProps), mountTarget);
    }

}

function getAttributes(el) {
    const attrs = {};
    for (const {nodeName, value} of el.attributes) {
        attrs[nodeName] = value;
    }
    return attrs;
}

export function wrappo(opts) {
    return function(target) {
        const w = class extends Component {};

        w.prototype.opts = opts;
        w.prototype.component = target;

        customElements.define(opts.name, w);

        const finalProps = Object.assign({}, target.defaultProps || {}, opts.attributes);
        target.defaultProps = finalProps;

        return target;
    };
}
