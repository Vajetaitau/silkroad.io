import React from 'react';
import styled from 'styled-components';

interface dotProps {
	x: number;
	y: number;
}

export function Dot(props: dotProps) : JSX.Element {

	return (<MainDot x={props.x} y={props.y}>X</MainDot>);
}

const MainDot = styled.div(
	({ x,y }: { x: number, y: number }) => `
	position: relative;
	background-color: red;
	width: 26px;
	height: 26px;
	border-radius: 50%;
	margin-top: -13px;
	margin-left: -13px;
	top: -${y}px;
	left: ${x}px;
  `,
  )