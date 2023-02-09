import { useSelector, useDispatch } from "react-redux";

function GifList() {
	const gifs = useSelector((store) => store.gifReducer);
	const dispatch = useDispatch();
	return (
		<div className="gif-list">
			{gifs.map((gif, index) => (
				<>
					<img key={index} gif={gif} src={gif.images?.original?.url} />
					<button id="fav-button">Favorite</button>
				</>
			))}
		</div>
	);
}

export default GifList;
