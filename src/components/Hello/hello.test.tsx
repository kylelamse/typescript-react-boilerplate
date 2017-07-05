import * as React from 'react';
import {shallow} from 'enzyme';

import HelloDefault from './index';
import {Hello as HelloNamed} from './index';

describe('export strategy', () => {
    test('default export is the same as the named export', () => {
        expect(HelloNamed).toEqual(HelloDefault);
    });
});

describe('Hello component', () => {
    test('renders expected header', () => {
        const wrapper = shallow(<HelloDefault compiler="typescript" framework="react"/>);
        const expectedHeader = 'Hello from typescript and react!';
        expect(wrapper.text()).toEqual(expectedHeader);
    });
});