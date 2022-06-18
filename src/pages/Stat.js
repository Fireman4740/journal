import React from "react";
import Chart from "../Components/DynamicChart";
import {gethistory} from "../tools/getData";

const Home = () => {
	let ordre ;
	// const data = getdataFromBinnace(ordre);
	const afficher = () => {
		const data = gethistory("BTCUSDT","REALIZED_PNL");
		console.log(data);
	}
	// console.log(data +"data");
	return (
		<div>
			<header className="bg-white shadow">
				<div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
					<h1 className="text-3xl font-bold text-gray-900">
						Statistic
					</h1>
				</div>
			</header>
			<main>
				<div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
					<Chart/>

				</div>
				<button className="btn btn-primary" onClick={afficher()}> api</button>
			</main>
		</div>
	);
};

export default Home;
