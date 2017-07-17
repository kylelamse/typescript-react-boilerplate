import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';

import { App } from './containers/App';

function render (Root: any) {
    ReactDOM.render(
        <AppContainer>
            <Root />
        </AppContainer>,
    document.getElementById('root')
  );
}

render(App);

if ((module as any).hot) {
    (module as any).hot.accept('./containers/App', () => { render(App); });
}
