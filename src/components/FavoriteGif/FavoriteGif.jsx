import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
function FavoriteGif() {
	const favorites = useSelector((store) => store.favorites);
	console.log(favorites);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch({ type: "GET_FAVORITES" });
	}, []);
	return (
		<>
			<h2>Our Favorites</h2>
			<div>
				{favorites.map((favorite, index) => (
					<img key={index} src={favorite.url} />
				))}
			</div>
		</>
	);
}

export default FavoriteGif;
