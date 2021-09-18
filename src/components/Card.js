import React, { useState, useEffect } from "react";
import "/home/saurav/Documents/the_odin_project/memory-card/src/App.css";

function Card(props) {
	const [isClicked, setIsClicked] = useState(false);

	const handleClick = () => {
		props.randomize();
		console.log(isClicked);
		props.parentCallback(isClicked);
		setIsClicked(true);
	};

	useEffect(() => {
		if (props.isGameOver === true) {
			setIsClicked(false);
		}
	}, [props.isGameOver]);

	return (
		<div className="card-container" onClick={handleClick}>
			<img src={props.img} alt={props.description} />
			<p className="description">{props.description}</p>
		</div>
	);
}

export default Card;
