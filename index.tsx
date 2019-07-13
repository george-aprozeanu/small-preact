import { render, h, Component } from 'preact';

class HelloWorld extends Component<{ name?: string }>{
	props = {
		name: 'World'
	}
	render({ name }) {
		return <div>Hello, {name}</div>
	}
}

function Main() {
	const props = { name: 'Preact' }
	return <HelloWorld {...props} />
}

document.addEventListener('DOMContentLoaded', () =>
	render(<Main />, document.querySelector('#main')))