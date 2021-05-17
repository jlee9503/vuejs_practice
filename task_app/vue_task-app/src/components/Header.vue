<template>
	<header>
		<h1>{{ title }}</h1>
		<Button text="Add Task" color="steelblue" />
	</header>
</template>

<script>
import Button from "./Button";

export default {
	name: "Header",
	props: {
		title: String,
	},
	components: {
		Button,
	},
};
</script>

<style scoped>
header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 20px;
	margin-bottom: 40px;
}
</style>
