import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { Hello, IHelloProps } from './index';

describe('<Hello />', () => {
    test('renders test as expected', () => {
        const wrapper: ShallowWrapper<any, any> = shallow(<Hello compiler="Typescript" framework="React" />);
        const expected: string = 'Hello from Typescript and React!';
        expect(wrapper.text()).toEqual(expected);
    });
});
