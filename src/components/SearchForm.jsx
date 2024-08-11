import { useState } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
	// const [search, setSearch] = useState("");
	const { setSearchTerm } = useGlobalContext();

	const handleSubmit = (e) => {
		e.preventDefault();
		const searchValue = e.target.elements.search.value;
		if (!searchValue) {
			alert("Please enter a search term");
			return;
		}
		setSearchTerm(searchValue);
	};

	return (
		<section>
            <h1 className="title">Unsplash Images</h1>
			<form
				className="search-form"
				onSubmit={handleSubmit}>
				<input
					className="form-input search-input"
					type="text"
					placeholder="Search whatever you want"
					name="search"
				/>
				<button
					className="btn"
					type="submit">
					Search
				</button>
			</form>
		</section>
	);
};
export default SearchForm;
