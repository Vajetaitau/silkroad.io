import React from 'react';
import { Dot } from '../../atoms/dot/dot';

interface CamelProps {
	x: number;
	y: number;
}

export function Camel(props: CamelProps) : JSX.Element {
	return (<Dot x={props.x} y={props.y} width={40} height={40} color={"#c19a6b"}></Dot>);
}