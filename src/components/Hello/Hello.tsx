import * as React from 'react';
import './hello.css';

export interface IHelloProps { compiler: string; framework: string; }
export function Hello (props: IHelloProps): React.ReactElement<IHelloProps> {
    return(
        <h1 className="header">Hello from {props.compiler} and {props.framework}!</h1>
    );
}
