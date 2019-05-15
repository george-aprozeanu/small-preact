import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import {uglify} from 'rollup-plugin-uglify';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
	plugins: [
		replace({'process.env.NODE_ENV': JSON.stringify('production')}),
		resolve({extensions}),
		commonjs({
			include: 'node_modules/**',
			namedExports: {
				'node_modules/preact/dist/preact.js': ['h', 'render', 'Component', 'cloneElement', 'options'],
			},
		}),
		babel({extensions}),
		uglify(),
	],
	input: 'index.tsx',
	output: {
		file: 'index.js',
		format: 'cjs',
		globals: {},
	}
};
