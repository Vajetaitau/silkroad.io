import React, { useState, useEffect } from 'react';
import {FullWidthRectangle} from './atoms/rectangle/rectangle';
import { Dot } from './atoms/dot/dot';
import { Camel } from './molecules/camel/camel';
import styled from 'styled-components';
import './App.css';

interface AppProps {}
type Direction = "ArrowLeft" | "ArrowRight" | "ArrowUp" | "ArrowDown";

function GetOppositeDirection(direction: Direction) : Direction | undefined {
	if (direction === "ArrowLeft") {
		return "ArrowRight";
	} else if (direction === "ArrowRight") {
		return "ArrowLeft";
	} else if (direction === "ArrowUp") {
		return "ArrowDown";
	} else if (direction === "ArrowDown") {
		return "ArrowUp";
	}
}

function IsDirection(direction: string) {
	return direction === "ArrowLeft" || direction === "ArrowRight" || direction === "ArrowUp" || direction === "ArrowDown";
}

function App({}: AppProps) {
	const [x, setX] = useState(50);
	const [y, setY] = useState(50);	
	const windowHeight = window.innerHeight;
	const movementSpeed = 10;
	const [movingDirection, setMovingDirection] = useState<Direction[]>([]);

	function Move() {
		if (movingDirection.length > 0) {
			const step = movingDirection.length > 1
				? movementSpeed * 1.414
				: movementSpeed * 2;
			for (let dirIndex in movingDirection) {
				const direction = movingDirection[dirIndex];
				switch (direction) {
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
					default:
						break;
				}
			}
		}
	}
	function StartMoving(direction: Direction) {
		if (movingDirection.length > 0) {
			const isMovingToThisDirection = movingDirection.find(dir => dir === direction) !== undefined;
			if (isMovingToThisDirection) {
				return;
			} else {
				const oppositeDirection = GetOppositeDirection(direction);
				const isMovingToOppositeDirection = movingDirection.find(dir => dir === oppositeDirection) !== undefined;
				if (isMovingToOppositeDirection) {
					setMovingDirection(movingDirection.filter(dir => dir !== oppositeDirection));
					return;
				} else {
					setMovingDirection([...movingDirection, direction]);
					return;
				}
			}
		} else {
			setMovingDirection([...movingDirection, direction]);
			return;
		}
	}

	function StopMoving(direction: Direction) {
		if (movingDirection.length > 0) {
			const isMovingToThisDirection = movingDirection.find(dir => dir === direction) !== undefined;
			if (isMovingToThisDirection) {
				setMovingDirection(movingDirection.filter(dir => dir !== direction));
				return;
			}
		}
	}

	useEffect(() => {
		function ArrowKeysListenerKeyDown(event: KeyboardEvent) {
			if (IsDirection(event.key)) {
				const direction = event.key as Direction;
				StartMoving(direction);
			}
		}

		function ArrowKeysListenerKeyUp(event: KeyboardEvent) {
			if (IsDirection(event.key)) {
				const direction = event.key as Direction;
				StopMoving(direction);
			}
		}
		window.addEventListener('keydown', ArrowKeysListenerKeyDown);
		window.addEventListener('keyup', ArrowKeysListenerKeyUp);
		return () => {
			window.removeEventListener("keydown", ArrowKeysListenerKeyDown);
			window.removeEventListener("keyup", ArrowKeysListenerKeyUp);
		};
	}, [JSON.stringify(movingDirection)]);

	useEffect(() => {
		const interval = setInterval(() => {
			Move();
		}, 100);
		return () => clearInterval(interval);
	}, [JSON.stringify(movingDirection), x, y]);

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
