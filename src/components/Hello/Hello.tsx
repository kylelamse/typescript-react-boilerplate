import * as React from "react";
import './hello.css';


interface HelloProps { compiler: string; framework: string; }
const Hello = (props: HelloProps) => <h1 className="header">Hello from {props.compiler} and {props.framework}!</h1>;

export {
    Hello,
    HelloProps
};