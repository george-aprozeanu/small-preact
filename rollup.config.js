import resolve from '@rollup/plugin-node-resolve'
import babel from 'rollup-plugin-babel'

const extensions = ['.js', '.jsx']

export default {
    plugins: [
        resolve({ extensions }),
        babel({
            extensions,
            'plugins': [
                '@babel/plugin-transform-react-jsx'
            ]
        })
    ],
    input: 'index.jsx',
    output: {
        file: 'index.js',
        format: 'cjs'
    }
}
