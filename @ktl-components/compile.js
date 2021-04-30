/* eslint-disable import/no-dynamic-require,prefer-template,comma-dangle */
const babelRc = Object.assign({}, require('./.babelrc.json'), {
    cache: true,
    extensions: ['.mjs', '.js', '.jsx'],
    "plugins": [
        [
            "module-resolver",
            {
                "root": ["."],
                "alias": {
                    "react": "preact/compat",
                    "react-dom": "preact/compat",
                    'create-react-class': 'preact-compat/lib/create-react-class',
                    'react-dom-factories': 'preact-compat/lib/react-dom-factories'
                }
            }
        ]
    ]
});

require('@babel/register')(babelRc);
require('./compile.mjs')['default']();
