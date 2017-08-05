import * as React from 'react';
import { ComponentClass } from 'react';
import * as ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';
import { App } from './containers';

import './types/globals';

function render (Root: ComponentClass): void {
    ReactDOM.render(
        <AppContainer>
            <Root />
        </AppContainer>,
    document.getElementById('root')
  );
}

render(App);

if (module.hot) {
    module.hot.accept('./containers', () => { render(App); });
}
