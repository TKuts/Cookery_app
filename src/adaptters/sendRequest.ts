const sendRequest = async (url) => {
	const respons = await fetch(url, {
	  method: "GET",
	  headers: {
		 "Content-type": "application/json; charset=UTF-8",
	  },
	});
	const resuly = await respons.json();
	return resuly;
 };
 
 export default sendRequest;