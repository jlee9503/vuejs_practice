<template>
	<header>
		<h1>{{ title }}</h1>
		<Button
			@btn-clicked="btnClicked"
			:text="showAddTask ? 'Close' : 'Add Task'"
			:color="showAddTask ? 'red' : 'steelblue'"
		/>
	</header>
</template>

<script>
import Button from "./Button";

export default {
	name: "Header",
	props: {
		title: String,
		showAddTask: Boolean,
	},
	components: {
		Button,
	},
	methods: {
		btnClicked() {
			this.$emit("toggle-add-new-task");
		},
	},
};
</script>

<style scoped>
header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px 20px 10px 20px;
	margin-bottom: 40px;
}
</style>
