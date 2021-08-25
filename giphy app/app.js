const app = Vue.createApp({
	data() {
		return {
			apiUrl: "http://api.giphy.com/v1/gifs",
			apiKey: "Z3ejHqEEmlIp5wJkTjaaOpkUO6yorISG",
			gifs: null,
		};
	},
	methods: {
		fetchData() {
			const url = `${this.apiUrl}/trending?api_key=${this.apiKey}`;

			//////////////////////////////////
			////// 3 ways to fetch data //////
			//////////////////////////////////
			// jQuery Ajax
			$.ajax({
				method: "GET",
				url: url,
				success: function (data) {
					console.log(data.data);
          $.map(data, function (post, i) {
            $('#gif')
          })
				},
			});

			// JavaScript fetch function
			// fetch(url)
			// 	.then((res) => res.json())
			// 	.then((data) => {
			// 		console.log(data.data);
			// 		this.gifs = data.data;
			// 	})
			// 	.catch((err) => {
			// 		console.warn(err, "File not exist");
			// 	});

			// Axios
		},
	},
	created: function () {
		this.fetchData();
	},
});

app.mount("#app");
