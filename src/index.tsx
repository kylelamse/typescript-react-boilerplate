import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Hello } from './components/Hello';

if (true) {
    console.log('hello');
}

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById('root')
);

for (let i = 0; i < 5; i++) {
    console.log(i);
}
