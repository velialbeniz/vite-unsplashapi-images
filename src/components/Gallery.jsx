import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "../context";

const url = `https://api.unsplash.com/search/photos?client_id=${
    import.meta.env.VITE_API_KEY
}`;

const Gallery = () => {
	const { searchTerm } = useGlobalContext();

	const response = useQuery({
		queryKey: ["images", searchTerm],
		queryFn: async () => {
			const res = await axios.get(`${url}&query=${searchTerm}`);
			return res.data;
		},
	});

	console.log(response);

	if (response.isLoading) {
		return (
			<div className="image-container">
				<div>Loading...</div>
			</div>
		);
	}

	if (response.isError) {
		return (
			<div className="image-container">
				<h4>{response.error}</h4>
			</div>
		);
	}

	if (response.data.results.length === 0) {
		return (
			<div className="image-container">
				<h4>No images found</h4>
			</div>
		);
	}
	return (
		<div className="image-container">
			{response.data.results.map((image) => {
				return (
					<img
						key={image.id}
						className="img"
						src={image.urls.regular}
						alt={image.alt_description}
					/>
				);
			})}
		</div>
	);
};
export default Gallery;
