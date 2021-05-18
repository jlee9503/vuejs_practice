<template>
	<div :key="task.id" v-for="task in tasks" class="tasks-container">
		<Task
			@delete-task="$emit('delete-task', task.id)"
			@toggleReminder="$emit('toggleReminder', task.id)"
			:task="task"
		/>
	</div>
</template>

<script>
import Task from "./Task";

export default {
	name: "Tasks",
	props: {
		tasks: Array,
	},
	components: {
		Task,
	},
	emits: ["delete-task", "toggleReminder"],
};
</script>

<style scoped>
.tasks-container:last-child {
	margin-bottom: 20px;
}
</style>
