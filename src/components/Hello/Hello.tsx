import * as React from "react";
import './hello.css';

interface IHelloProps { compiler: string; framework: string; }
const Hello = (props: IHelloProps) => <h1 className="header">Hello from {props.compiler} and {props.framework}!</h1>;

export {
    Hello,
    IHelloProps
};
