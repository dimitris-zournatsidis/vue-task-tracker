<template>
    <div>
        <div v-for="task in tasks" :key="task.id">
            <TaskItem :task="task" @delete-task="$emit('delete-task', task.id)"
                @toggle-reminder="$emit('toggle-reminder', task.id)" />
        </div>
    </div>
</template>

<script>
import TaskItem from './TaskItem'

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Tasks',
    props: {
        tasks: Array
    },
    components: {
        TaskItem,
    },
    emits: ['delete-task', 'toggle-reminder'],
}
</script>