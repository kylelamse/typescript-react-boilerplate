import * as React from 'react';
import './hello.css';

interface IHelloProps { compiler: string; framework: string; }
const Hello = (props: IHelloProps) => (
    <h1 className="header" onClick={() => import('../../log').then((mod) => {mod.log(); })}>Hello from {props.compiler} and {props.framework}!</h1>
);

export {
    Hello,
    IHelloProps
};
