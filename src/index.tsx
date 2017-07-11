import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';

import { Hello, IHelloProps } from './components/Hello';

const render = (Component: any) => {
    ReactDOM.render(
        <AppContainer>
            <Component compiler="TypeScript" framework="React" />
        </AppContainer>,
    document.getElementById('root')
  );
};

render(Hello);

declare const module: any;

if (module.hot) {
    module.hot.accept('./components/Hello', () => { render(Hello); });
}
