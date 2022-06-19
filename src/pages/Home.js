import React from "react";
import Test from "../tools/Balance";

const Home = () => {

	// const dataAccount = getAccountInfo();
	// console.log(dataAccount);
	return (
		<div>
			<header className="bg-white shadow">
				<div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
					<h1 className="text-3xl font-bold text-gray-900">
						Dashboard
					</h1>
				</div>
			</header>
			<main>
				<div className=" mx-auto py-6 sm:px-6 lg:px-8">
					<div className="gap-8 columns-2">
						<div className=" h-96 bg-lime-700 ">
						<button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                   
                  >
                    <Test/>
					
                  </button>
						</div>
						
					</div>
				</div>
			</main>
		</div>
	);
};

export default Home;
