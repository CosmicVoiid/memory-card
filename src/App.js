import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import "./App.css";

function App() {
	const [imgArray, setImgArray] = useState([
		{ img: "minecraft/Grass_Block.webp", description: "Grass" },
		{ img: "minecraft/Carved_Pumpkin.webp", description: "Pumpkin" },
		{ img: "minecraft/Furnace.webp", description: "Furnace" },
		{ img: "minecraft/Oak_Planks.webp", description: "Oak Planks" },
		{ img: "minecraft/Bookshelf.webp", description: "Bookshelf" },
		{ img: "minecraft/Dispenser.webp", description: "Dispenser" },
		{ img: "minecraft/Hay_Bale.webp", description: "Hay Bale" },
		{ img: "minecraft/Ladder.webp", description: "Ladder" },
		{ img: "minecraft/Melon.webp", description: "Melon" },
		{ img: "minecraft/Oak_Log.webp", description: "Oak Log" },
		{ img: "minecraft/Stone_Bricks.webp", description: "Stone Bricks" },
		{ img: "minecraft/Chest.webp", description: "Chest" },
		{ img: "minecraft/Birch_Log.webp", description: "Birch Log" },
		{ img: "minecraft/Diamond_Ore.webp", description: "Diamond Ore" },
		{ img: "minecraft/Cobblestone.webp", description: "Cobblestone" },
	]);

	const [currentScore, setCurrentScore] = useState(0);

	const [highScore, setHighScore] = useState(0);

	const [gameOver, setGameOver] = useState(false);

	const shuffle = (array) => {
		let currentIndex = array.length,
			randomIndex;

		// While there remain elements to shuffle...
		while (currentIndex !== 0) {
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;

			// And swap it with the current element.
			[array[currentIndex], array[randomIndex]] = [
				array[randomIndex],
				array[currentIndex],
			];
		}

		return array;
	};

	const handleClick = () => {
		let arrayCopy = [...imgArray];
		arrayCopy = shuffle(arrayCopy);
		setImgArray(arrayCopy);
	};

	const updateScore = (childData) => {
		if (childData === false) {
			setCurrentScore(currentScore + 1);
		} else {
			setGameOver(true);
		}
	};

	useEffect(() => {
		setCurrentScore(0);
		setGameOver(false);
	}, [gameOver]);

	useEffect(() => {
		if (currentScore > highScore) {
			setHighScore(currentScore);
		}
	}, [currentScore, highScore]);

	return (
		<div>
			<div className="header">
				<Header />
				<h3>High Score: {highScore}</h3>
				<h3>Score: {currentScore}</h3>
				<p>Only click on each image once!</p>
			</div>
			<div className="all-cards">
				{imgArray.map((resource) => (
					<Card
						key={resource.description}
						img={resource.img}
						description={resource.description}
						randomize={handleClick}
						parentCallback={updateScore}
						isGameOver={gameOver}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
