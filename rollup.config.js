import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
	plugins: [
		replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
		resolve({ extensions }),
		babel({
			extensions,
			plugins: [
				["@babel/plugin-transform-react-jsx", { "pragma": "h" }],
				["@babel/proposal-class-properties"],
				["@babel/proposal-object-rest-spread"]
			],
			presets: [
				["@babel/env"],
				["@babel/typescript", { "jsxPragma": "h" }]
			]
		})
	],
	input: 'index.tsx',
	output: {
		file: 'index.js',
		format: 'cjs',
		globals: {},
	}
};
