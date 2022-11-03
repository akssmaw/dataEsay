async function $request(url, json,db) {
	let dataJson = '';
	let request_URL = ''
	let jsonLength = json.length
	var dataJsons = [];

	if (typeof json == "object") {
		for (var i = 0; i < jsonLength; i++) {


			for (const key in json[i]) {


				dataJson += key + "=" + json[i][key] + "&"

			}
		}

	}
	request_URL = url + "?" + dataJson+"dbList="+db
	console.log(request_URL)
	await fetch(request_URL)
		.then(function(response) {
			console.log();
			if (response.status == 200) {
				return response.json()
			}
			alert("报错了")
			return false;
		})
		.catch(err => {
			console.log("服务器没有链接")
		})
		.then(data => {

			dataJsons = data

		});

	return dataJsons;
}
