import React, { useState, useEffect } from 'react';
import {FullWidthRectangle} from './atoms/rectangle/rectangle';
import { Dot } from './atoms/dot/dot';
import { Camel } from './molecules/camel/camel';
import styled from 'styled-components';
import './App.css';

interface AppProps {}

function App({}: AppProps) {
	const [x, setX] = useState(50);
	const [y, setY] = useState(50);	
	const step = 5;
	const windowHeight = window.innerHeight;
	useEffect(() => {
		function ArrowKeysListener(event: KeyboardEvent) {
			console.log(x);
			console.log(y);
			switch (event.key) {
				case "ArrowLeft":
					if (x - step > 0) {
						setX(x - step);
					}
					break;
				case "ArrowRight":
					if (x + step < window.innerWidth) {
						setX(x + step);
					}					
					break;
				case "ArrowUp":
					if (y - step > 0) {
						setY(y - step);
					}					
					break;
				case "ArrowDown":
					if (y + step < windowHeight) {
						setY(y + step);
					}					
					break;
			}
		}
		window.addEventListener('keydown', ArrowKeysListener);
		return () => window.removeEventListener("keydown", ArrowKeysListener);
	}, [x, y]);

  return (
	<Main height={innerHeight}>
		<FullWidthRectangle height={"10%"} color={"grey"}></FullWidthRectangle>
		<FullWidthRectangle height={"80%"} color={"white"}></FullWidthRectangle>
		
		<Dot x={x} y={y} width={50} height={50} color={"#696969"}></Dot>
		<Camel x={100} y={100}></Camel>
		<FullWidthRectangle height={"10%"} color={"grey"}></FullWidthRectangle>
	</Main>
  );
}

const Main = styled.div(
	({ height }: { height: number }) => `
	height: ${height}px;
  `,
)

export default App;
