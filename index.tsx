import {render, h} from 'preact';

function HelloWorld({name}: { name: string }) {
	return <h1>Hello {name}</h1>
}


render(<HelloWorld name="Cici"/>, document.body);

