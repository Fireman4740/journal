
import Axios from 'axios'
import React,{useState,useEffect} from 'react';
import CryptoJS from "crypto-js";

var apiSecret ="DkVHRNJ46ATgwF0n2Y9PUPydafo1B4G2PqdYNVcUfX966gl2jZ1DGkG9Ju1YMr8o";

function signature(query) {
  const s = CryptoJS.HmacSHA256(query, apiSecret).toString(CryptoJS.enc.HEX);
  return s;
}
function Test() {
    var timestamp = Date.now();
	var params = "&timestamp=" + timestamp
	var request = "https://fapi.binance.com/fapi/v2/account?" + params;
	var signa = signature(params);
    request = request + "&signature=" + signa
	

  const [comments,setComments]=useState([])
  useEffect(() => {
    fetchComments();
  }, [])
  useEffect(() => {
    console.log(comments)
  }, [comments])
  const fetchComments=async()=>{
    const response=await Axios({ method: "GET", url: request, headers:{"X-MBX-APIKEY":
    "Pm2JUMs8CVNJQ0SVHJeu6qze3FBLkXK2hZ93FrLCzcUYYbAeezhD2QY8LUd9YNAd"} }) ;
    setComments(response.data)    
  }
  return (
    <div className="Test">
        <h1>Available Balance: {comments.availableBalance} USDT</h1>
        <h1> Total Unrealized PNL: {comments.totalUnrealizedProfit} USDT</h1>
    </div>
  );
}

export default Test;