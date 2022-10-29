import { useState, useEffect } from "react";
import "./App.scss";

import Advice from "./components/Advice/Advice";

import "./media.scss";

export async function fetchData() {
	const response = await fetch("https://api.adviceslip.com/advice", { cache: "no-store" });
	const data = await response.json();
	return data;
}

function App() {
	const [data, setData] = useState({});

	useEffect(() => {
		fetchData().then((data) => setData(data));
	}, []);

	return <div className="App">{Object.keys(data).length ? <Advice data={data} setData={setData} /> : ""}</div>;
}

export default App;
