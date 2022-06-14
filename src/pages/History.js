import React from "react";
import HistoricItem from "../Components/HistoricItem";

export function History() {
	return (
		<div className="bg-white">
  <div>
		<header className="bg-white shadow">
					<div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
						<h1 className="text-3xl font-bold text-gray-900">
							History
						</h1>
					</div>
				</header>
				<main>
          <div className="max-w-5xl mx-auto py-4 sm:px-10 lg:px-5">
					<HistoricItem></HistoricItem>
          </div>
          <div className="max-w-5xl mx-auto sm:px-10 lg:px-5">
					<HistoricItem></HistoricItem>
          </div>
          <div className="max-w-5xl mx-auto py-4 sm:px-10 lg:px-5">
					<HistoricItem></HistoricItem>
          </div>
				</main>
                </div>
</div>
	);
}

export default History;
