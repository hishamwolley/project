import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./files/Header/Header";
import Section1 from "./files/Section_1/Section1";
import Section2 from "./files/Section_2/Section2";
import Section3 from "./files/Section_3/Section3";
import Section4 from "./files/Section_4/Section4";
function App() {
	return (
		<div className="App">
			{/* ag */}
			<Header />
			<Section1 />
			<Section2 />
			<Section3 />
			<Section4 />
		</div>
	);
}

export default App;
