function GifList({ gifs }) {
	return (
		<div className="gif-list">
			{gifs.map((gif) => (
				<img key={gif} gif={gif} />
			))}
		</div>
	);
}

export default GifList;
