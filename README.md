# Wrappo :mouse:

Wrappo will wrap your react/preact components inside a webcomponent.
Use the @wrappo decorator provided by the library to convert any class component to a web-component.


Example:

```js
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
        this.setState({text: 'I was clicked'})
    }

    render() {
        return (
            <div>
                <label>{this.state.text}</label>
                <button onClick={this.handleClick.bind(this)}>
                    Click me!
                <button/>
            </div>
        );
    }
}
```
