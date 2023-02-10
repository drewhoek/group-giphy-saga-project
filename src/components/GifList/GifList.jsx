import { useSelector, useDispatch } from "react-redux";
import "./Giflist.css";

function GifList() {
	const gifs = useSelector((store) => store.gifReducer);
	const dispatch = useDispatch();

	return (
		<div className="gif-list">
			{gifs.map((gif, index) => (
				<>
					<img key={index} src={gif.images?.original?.url} />
					<br />
					<br />
					<br />
					<button
						className="favorite-button"
						id="fav-button"
						onClick={() =>
							dispatch({
								type: "ADD_FAVORITE",
								payload: {
									name: gif.title,
									url: gif.images?.original?.url,
								},
							})
						}
					>
						Favorite
					</button>
				</>
			))}
		</div>
	);
}

export default GifList;
