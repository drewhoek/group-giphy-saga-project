import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
function FavoriteGif() {
	const fav = useSelector((store) => store.favorites);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch({ type: "SET_FAVORITES" });
		dispatch({ type: "ADD_FAVORITE" });
	});
	return (
		<div>
			{fav.map((index) => (
				<img key={index} gif={gif} src={gif.images?.original?.url} />
			))}
		</div>
	);
}

export default FavoriteGif;
