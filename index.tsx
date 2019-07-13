import { render, h, Component } from 'preact';

class HelloWorld extends Component<{ name?: string }>{
	props = {
		name: 'World'
	}
	render({name}) {
		return <div>Hello, {name}</div>
	}
}

render(<HelloWorld name='Cici' />, document.querySelector('#main'));