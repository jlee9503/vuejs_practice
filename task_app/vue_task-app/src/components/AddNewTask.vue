<template>
	<form autocomplete="off" class="form-container" @submit="submitNewTask">
		<div class="form-controller">
			<label for="title">Task</label>
			<input
				type="text"
				v-model="title"
				name="title"
				class="input-controller"
				placeholder="Write your new task"
				required
			/>
		</div>

		<div class="form-controller">
			<label for="date">Day & Time</label>
			<input
				type="text"
				v-model="day"
				name="day"
				class="input-controller"
				placeholder="Add Day & Time"
				required
			/>
		</div>

		<div class="form-controller">
			<label for="setReminder">Set Reminder</label>
			<input type="checkbox" v-model="reminder" name="reminder" id="reminder" />
		</div>

		<div class="form-controller">
			<button>Save Task</button>
		</div>
	</form>
</template>

<script>
export default {
	name: "AddNewTask",
	data() {
		return {
			title: "",
			day: "",
			reminder: false,
		};
	},
	methods: {
		submitNewTask(e) {
			e.preventDefault();

			const newTask = {
				id: Math.floor(Math.random() * 10000),
				text: this.title,
				day: this.day,
				reminder: this.reminder,
			};

			this.$emit("add-newtask", newTask);

			this.title = "";
			this.day = "";
			this.reminder = false;
		},
	},
};
</script>

<style scoped>
.form-container {
	margin: 0 20px;
}

.form-controller {
	margin-bottom: 30px;
	display: flex;
	flex-direction: column;
}

label {
	font-size: 1.2em;
	font-weight: 600;
	margin-bottom: 5px;
}

.input-controller {
	padding: 7px 0;
	outline: none;
}

button {
	cursor: pointer;
	padding: 8px 0;
	background: #1087be;
	color: #fff;
	border: none;
	outline: none;
	border-radius: 5px;
}

button:hover {
	background: #0572a5;
}
</style>
