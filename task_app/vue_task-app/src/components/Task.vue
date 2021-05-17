<template>
	<div
		@dblclick="$emit('toggleReminder', task.id)"
		:class="[task.reminder ? 'reminder' : '', 'task']"
	>
		<div class="task__title">
			<h3>
				{{ task.text }}
			</h3>
			<div class="task__icons">
				<i
					@click="$emit('toggleReminder', task.id)"
					:class="[task.reminder ? 'fa-bell' : 'fa-bell-slash', 'fas']"
				></i>
				<i @click="$emit('delete-task', task.id)" class="fas fa-times"></i>
			</div>
		</div>
		<p>{{ task.day }}</p>
	</div>
</template>

<script>
export default {
	name: "Task",
	props: {
		task: Object,
	},
};
</script>

<style scoped>
.task {
	margin: 10px 20px;
	padding: 10px 20px;
	background: #a5d4e7;
	border-radius: 5px;
	cursor: pointer;
	transition: all 0.2s ease;
}

.task:hover {
	transform: scale(1.04);
}

.task__title {
	display: flex;
	justify-content: space-between;
}

.fas {
	color: #104dbe;
	transition: 0.2s all ease-in-out;
	font-size: 1.2em;
}

.fas:hover {
	color: #f56c6cdc;
	transform: scale(1.1);
}

.fa-bell {
	margin-right: 4px;
}

.reminder {
	border-left: 8px solid #1087be;
}
</style>
