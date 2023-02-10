import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./FavoriteGif.css";

function FavoriteGif() {
	const favorites = useSelector((store) => store.favorites);
	const [currentCategory, setCurrentCategory] = useState("");
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch({ type: "GET_FAVORITES" });
	}, []);

	console.log(currentCategory);

	const handleSubmit = (event, id) => {
		event.preventDefault();
		dispatch({
			type: "UPDATE_CATEGORY",
			payload: {
				id: Number(id),
				category_id: Number(currentCategory),
			},
		});
	};
	return (
		<>
			<h2 className="favorite-title">Favorites</h2>
			<div className="favorite-container">
				{favorites.map((favorite, index) => (
					<>
						<img key={index} src={favorite.url} />
						<form
							className="input"
							onChange={(event) => setCurrentCategory(event.target.value)}
							onSubmit={(event) => handleSubmit(event, favorite.id)}
						>
							<label for="funny">Funny</label>
							<input
								type="radio"
								className="radio-button"
								name="category"
								value="1"
							></input>
							<br />
							<label for="cohort">Cohort</label>
							<input
								type="radio"
								className="radio-button"
								name="category"
								value="2"
							></input>
							<br />
							<label for="cartoon">Cartoon</label>
							<input
								type="radio"
								className="radio-button"
								name="category"
								value="3"
							></input>
							<br />
							<label for="nsfw">NSFW</label>
							<input
								type="radio"
								className="radio-button"
								name="category"
								value="4"
							></input>
							<br />
							<label for="meme">Meme</label>
							<input
								type="radio"
								className="radio-button"
								name="category"
								value="5"
							></input>
							<br />
							<button className="update-button" type="submit">
								Update
							</button>
						</form>
					</>
				))}
			</div>
		</>
	);
}

export default FavoriteGif;
