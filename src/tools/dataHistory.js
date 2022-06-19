import Axios from "axios";
import React, { useState, useEffect } from "react";
import CryptoJS from "crypto-js";

var apiSecret =
	"DkVHRNJ46ATgwF0n2Y9PUPydafo1B4G2PqdYNVcUfX966gl2jZ1DGkG9Ju1YMr8o";

function signature(query) {
	const s = CryptoJS.HmacSHA256(query, apiSecret).toString(
		CryptoJS.enc.HEX,
	);
	return s;
}
function DataHistory() {
	var timestamp = Date.now();
	var params =
		"symbol=BTCUSDT&incomeType=REALIZED_PNL&timestamp=" + timestamp;
	var request = "https://fapi.binance.com/fapi/v1/income?" + params;
	var signa = signature(params);
	request = request + "&signature=" + signa;

	const [comments, setComments] = useState([]);
	useEffect(() => {
		fetchComments();
	}, []);
	useEffect(() => {
		//console.log(comments);
	}, [comments]);
	const fetchComments = async () => {
		const response = await Axios({
			method: "GET",
			url: request,
			headers: {
				"X-MBX-APIKEY":
					"Pm2JUMs8CVNJQ0SVHJeu6qze3FBLkXK2hZ93FrLCzcUYYbAeezhD2QY8LUd9YNAd",
			},
		});
		setComments(response.data);
	};
    let className=' bg-green-400 rounded-full my-3 py-2 w-2/4'
    if (comments.income < 0){
        className = 'bg-red-400 rounded-full my-3 py-2 w-2/4'
        console.log(comments.income)
    }
	return (
		<div className="Test">
			{comments &&
				comments.map((comment) => {
					return (
                        <div className=" flex items-center justify-center h=2.5">
						<div className={className} key={comment.id}>
							
                                    <span className=" text-base text-white">{comment.symbol} {comment.incomeType} :  {comment.income} {comment.asset}</span>
									
                            
						</div>
                        </div>
					);
				})}
		</div>
	);
}

export default DataHistory;
