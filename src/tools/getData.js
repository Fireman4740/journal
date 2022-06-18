import CryptoJS from "crypto-js";

var apiSecret ="DkVHRNJ46ATgwF0n2Y9PUPydafo1B4G2PqdYNVcUfX966gl2jZ1DGkG9Ju1YMr8o";

function signature(query) {
  const s = CryptoJS.HmacSHA256(query, apiSecret).toString(CryptoJS.enc.HEX);
  console.log(s);
  return s;
}

async function gethistory(symbol,incomeType) {
	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");
	myHeaders.append(
		"X-MBX-APIKEY",
		"Pm2JUMs8CVNJQ0SVHJeu6qze3FBLkXK2hZ93FrLCzcUYYbAeezhD2QY8LUd9YNAd",
	);

	var timestamp = Date.now();
  console.log(timestamp)
	var params = "symbol="+symbol+"&incomeType="+incomeType + "&timestamp=" + timestamp
	var request = "https://fapi.binance.com/fapi/v1/income?" + params  ;
  var signa = signature(params);
	var requestOptions = {
		method: "GET",
		headers: myHeaders,
		redirect: "follow",
	};

	fetch(
		request + "&signature=" + signa,
		requestOptions,
	)
		.then((response) => response.text())
		.then((result) => console.log(result))
		.catch((error) => console.log("error", error));
}

export { gethistory };
