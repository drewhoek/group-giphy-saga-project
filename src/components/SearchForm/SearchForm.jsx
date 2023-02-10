import { useState } from "react";
import { useDispatch } from "react-redux";
import "./SearchForm.css";

function SearchForm() {
	const [search, setSearch] = useState("");
	const dispatch = useDispatch();

	// const inInput = (event) => {
	// 	console.log("This is the event", event.target.value);
	// 	setSearch(event.target.value);
	// };

	const handleSubmit = () => {
		// setSearch(event.target.value);
		dispatch({
			type: "SEARCH_GIF",
			payload: search,
		});
		setSearch("");
	};
	return (
		<div className="search-form">
			<h2 className="search-title">SEARCH SUM GIPHYS!</h2>
			<input
				className="input"
				onChange={(event) => {
					setSearch(event.target.value);
				}}
				placeholder="Search Value"
				value={search}
			></input>
			<button className="submit-button" onClick={() => handleSubmit()}>
				Submit
			</button>
		</div>
	);
}

export default SearchForm;
