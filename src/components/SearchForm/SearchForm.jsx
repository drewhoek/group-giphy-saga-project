import { useState } from "react";
import { useDispatch } from "react-redux";

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
		<div>
			<h2>HELLO</h2>
			<input
				onChange={(event) => {
					setSearch(event.target.value);
				}}
				placeholder="Search Value"
				value={search}
			></input>
			<button onClick={() => handleSubmit()}>Submit</button>
		</div>
	);
}

export default SearchForm;
