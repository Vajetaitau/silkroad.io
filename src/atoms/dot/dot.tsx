import React from 'react';
import styled from 'styled-components';

interface dotProps {
	x: number;
	y: number;
	width: number;
	height: number;
	color: string;
}

export function Dot(props: dotProps) : JSX.Element {

	return (<MainDot x={props.x} y={props.y} width={props.width} height={props.height} color={props.color}></MainDot>);
}

const MainDot = styled.div(
	({ x,y,width,height,color }: { x: number, y: number, width: number, height: number, color: string }) => `
	position: absolute;
	background-color:${color};
	width: ${width}px;
	height: ${height}px;
	border-radius: 50%;
	margin-top: -${width / 2}px;
	margin-left: -${height / 2}px;
	top: ${y}px;
	left: ${x}px;
	-moz-transition: all 0.15s ease-in-out;
         transition: all 0.15s ease-in-out;    
  `,
  )