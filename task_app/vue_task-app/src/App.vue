<template>
	<div class="container">
		<Header
			title="Task Trakcer"
			@toggle-add-new-task="toggleAddNewTask"
			:showAddTask="showAddTask"
		/>
		<div v-show="showAddTask">
			<AddNewTask @add-newtask="addNewTask" />
		</div>
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
import AddNewTask from "./components/AddNewTask";

export default {
	name: "App",
	components: {
		Header,
		Tasks,
		AddNewTask,
	},
	data() {
		return {
			tasks: [],
			showAddTask: false,
		};
	},
	methods: {
		toggleAddNewTask() {
			this.showAddTask = !this.showAddTask;
		},

		// POST
		async addNewTask(task) {
			const res = await fetch(`api/tasks`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(task),
			});

			const data = await res.json();
			this.tasks = [...this.tasks, data];
		},

		// DELETE
		async deleteTask(id) {
			try {
				const res = await fetch(`api/tasks/${id}`, {
					method: "DELETE",
				});
				this.tasks = this.tasks.filter((task) => task.id !== id);
			} catch (err) {
				console.log(err + res.status);
			}
		},

		// PUT (Update)
		async toggleReminder(id) {
			const taskToToggle = await this.fetchCertainData(id);
			const updatedTasks = {
				...taskToToggle,
				reminder: !taskToToggle.reminder,
			};

			const res = await fetch(`api/tasks/${id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(updatedTasks),
			});

			const data = await res.json();

			this.tasks = this.tasks.map((task) =>
				task.id === id ? { ...task, reminder: data.reminder } : task
			);
		},

		// GET
		async fetchData() {
			const data = await fetch("api/tasks").then((res) => res.json());
			return data;
		},

		async fetchCertainData(id) {
			const data = await fetch(`api/tasks/${id}`).then((res) => res.json());
			return data;
		},
	},

	async created() {
		this.tasks = await this.fetchData();
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
	max-width: 400px;
	min-height: 650px;
}

.btn {
	padding: 12px 20px;
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
