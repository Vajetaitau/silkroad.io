import React from 'react';
import styled from "styled-components";

interface RectangleProps {

}

interface FullWidthRectangleProps {
	height: string;
	color: string;
}

export function FullWidthRectangle(props: FullWidthRectangleProps) {
	return (<MainFullWidthRectangle height={props.height} color={props.color}></MainFullWidthRectangle>);
}

const MainFullWidthRectangle = styled.div(
	({ height,color }: { height: string, color:string }) => `
	background-color:${color};
	width: 100%;
	height: ${height};
  `,
)