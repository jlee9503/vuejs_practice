<template>
	<div class="app-wrapper">
		<div class="app">
			<Navigation />
			<Footer />
		</div>
	</div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";

export default {
	name: "app",
	components: {
		Navigation,
		Footer,
	},
	data() {
		return {};
	},
	created() {},
	mounted() {},
	methods: {},
	watch: {},
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: "Quicksand", sans-serif;
}

.app {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}

.container {
	max-width: 1440px;
	margin: 0 auto;
}

.logo__title {
	font-weight: 600;
	font-size: 24px;
	color: #000;
	text-decoration: none;
}

.link {
	cursor: pointer;
	text-decoration: none;
	text-transform: uppercase;
	color: black;
}

.link-light {
	color: #fff;
}
</style>
