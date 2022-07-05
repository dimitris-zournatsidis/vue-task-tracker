<template>
    <div>
        <transition name="slide-fade">
            <AddTask v-show="showAddTask" @add-task="addTask" />
        </transition>
        <Tasks :tasks="tasks" @delete-task="deleteTask" @toggle-reminder="toggleReminder" />
    </div>
</template>

<script>
import Tasks from '../components/Tasks.vue';
import AddTask from '../components/AddTask';

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Home',
    props: {
        showAddTask: Boolean,
    },
    components: {
        Tasks,
        AddTask,
    },
    data() {
        return {
            tasks: []
        }
    },
    methods: {
        async addTask(newTask) {
            const res = await fetch('api/tasks', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(newTask)
            })
            const data = await res.json();
            this.tasks = [...this.tasks, data];
        },
        async deleteTask(id) {
            if (confirm('Are you sure?')) {
                const res = await fetch(`api/tasks/${id}`, {
                    method: 'DELETE'
                })
                res.status === 200 ? this.tasks = this.tasks.filter(task => task.id !== id) : alert('Error deleting task');
            }
        },
        async toggleReminder(id) {
            const taskToToggle = await this.fetchTask(id);
            const updateTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

            const res = await fetch(`api/tasks/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(updateTask)
            })
            const data = await res.json();
            this.tasks = this.tasks.map(task => task.id === id ? { ...task, reminder: data.reminder } : task)
        },
        async fetchTasks() {
            const res = await fetch('api/tasks'); // api instead of http://localhost:5000/tasks --- check out vue.config.js file ---
            const data = await res.json();
            return data;
        },
        async fetchTask(id) {
            const res = await fetch(`api/tasks/${id}`);
            const data = await res.json();
            return data;
        },
    },
    async created() {
        this.tasks = await this.fetchTasks();
    }
}
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-50px);
  opacity: 0;
}
</style>