import { render, h } from 'preact/src'

/** @jsx h */
/** @jsxFrag Fragment */

function HelloWorld({ name }) {
    return <div>Hello, {name}</div>
}

function Main() {
    const props = { name: 'Preact2' }
    return <HelloWorld {...props} />
}

document.addEventListener('DOMContentLoaded',
    () => render(<Main/>, document.querySelector('#main')))