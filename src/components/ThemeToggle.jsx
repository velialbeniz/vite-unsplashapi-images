import { FaSun, FaMoon } from "react-icons/fa";
import { useGlobalContext } from "../context";

const ThemeToggle = () => {
	const { isDarkTheme, toggleDarkTheme } = useGlobalContext();

	return (
		<div className="toggle-container">
			<button
				style={{ color: isDarkTheme ? "white" : "black" }}
				className="dark-toggle"
				type="button"
				onClick={toggleDarkTheme}>
				{isDarkTheme ? <FaSun /> : <FaMoon />}
			</button>
		</div>
	);
};
export default ThemeToggle;
