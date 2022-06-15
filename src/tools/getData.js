

async function getdataFromBinnace(){
    
    const res = await fetch('https://api.binance.com/api/v1/ticker/24hr');
    const data = await res.json();
    return data;

}

export {getdataFromBinnace};