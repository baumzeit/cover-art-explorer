module.exports = {
    extends: ['airbnb-base', 'prettier', 'prettier/react'],
    plugins: ['react', 'prettier'],
    rules: {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        'prettier/prettier': 'error',
        'prefer-arrow-callback': 'error',
        indent: ['error', 'tab'],
        camelcase: 'warn',
        'consistent-return': 'off',
        'no-underscore-dangle': 'off',
        'func-names': 'off',
        'no-plusplus': [2, { allowForLoopAfterthoughts: true }]
    },
    parser: 'babel-eslint'
};
