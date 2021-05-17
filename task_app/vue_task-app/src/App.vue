<template>
	<div class="container">
		<Header title="Task Trakcer" />
		<Tasks
			@delete-task="deleteTask"
			@toggleReminder="toggleReminder"
			:tasks="tasks"
		/>
	</div>
</template>

<script>
import Header from "./components/Header";
import Tasks from "./components/Tasks";

export default {
	name: "App",
	components: {
		Header,
		Tasks,
	},
	data() {
		return {
			tasks: [],
		};
	},
	methods: {
		deleteTask(id) {
			this.tasks = this.tasks.filter((task) => task.id !== id);
		},
		toggleReminder(id) {
			this.tasks = this.tasks.map((task) =>
				task.id === id ? { ...task, reminder: !task.reminder } : task
			);
		},
	},
	created() {
		this.tasks = [
			{
				id: 1,
				text: "Doctors Appointment",
				day: "March 1st at 2:30pm",
				reminder: true,
			},
			{
				id: 2,
				text: "Meeting at School",
				day: "March 3rd at 1:30pm",
				reminder: true,
			},
			{
				id: 3,
				text: "Food Shopping",
				day: "March 4th at 12:30pm",
				reminder: false,
			},
			{
				id: 4,
				text: "School Homework",
				day: "March 4th at 8:30pm",
				reminder: true,
			},
		];
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
	min-height: 800px;
}

.btn {
	padding: 15px 20px;
	background: #575353ec;
	color: #fff;
	border-radius: 5px;
	cursor: pointer;
	border: none;
	outline: none;
	transition: all 0.3s ease-in-out;
}

.btn:hover {
	transform: scale(1.1);
}
</style>
