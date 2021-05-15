<template>
	<div class="container">
		<Header title="Task Trakcer" />
	</div>
</template>

<script>
import Header from "./components/Header";

export default {
	name: "App",
	components: {
		Header,
	},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=KoHo:wght@400;600&display=swap");

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	font-family: "KoHo", sans-serif;
}

.container {
	border: 1.3px solid #1087be;
	border-radius: 10px;
	box-shadow: 10px 10px 5px #1087be, -10px -10px 5px #1087be;
	margin: 40px auto;
	max-width: 600px;
	min-height: 600px;
}

.btn {
	padding: 15px 10px;
	background: #575353ec;
	color: #fff;
	border-radius: 5px;
	cursor: pointer;
	border: none;
	transition: all 0.3s ease-in-out;
}

.btn:hover {
	background: #2b2929ec;
	transform: scale(1.1);
}
</style>
