const url = "https://kea21-b430.restdb.io/rest/new-collection";

// The API-key
const options = {
  header: {
    "x-apikey": "6136570f43cedb6d1f97ed67",
  },
};



fetch(url,options)
.then((response)=>{​
if (!response.ok) {​
throw Error(response.statusText);
}​
return response.json();
}​)
.then((data)=> {
    // We have the data
    console.log(data);
    // handleData(data);
})
.catch((e)=> {
    console.error("An error occured", e.message);
});

