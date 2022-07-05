<template>
    <form @submit.prevent="onSubmit" class="add-form">
        <div class="form-control">
            <label>Task</label>
            <input type="text" name="text" v-model="text" placeholder="Add Task">
        </div>
        <div class="form-control">
            <label>Day & Time</label>
            <input type="text" name="day" v-model="day" placeholder="Add Day & Time">
        </div>
        <div class="form-control form-control-check">
            <label>Set Reminder</label>
            <input type="checkbox" name="reminder" v-model="reminder">
        </div>

        <input type="submit" value="Save Task" class="btn btn-block">
    </form>
</template>

<script>
export default {
    name: 'AddTask',
    data() {
        return {
            text: '',
            day: '',
            reminder: false
        }
    },
    methods: {
        clearAllFields() {
            this.text = '';
            this.day = '';
            this.reminder = false;
        },
        onSubmit() {
            // console.log('submitted!!!');
            if (!this.text) {
                // alert('Please add a task');
                this.$toast.error('Please add a task.');
                return;
            }
            const newTask = {
                // id: Math.floor(Math.random() * 100000), // id is now provided by json-server
                text: this.text,
                day: this.day,
                reminder: this.reminder
            }
            // console.log('new task', newTask);
            this.$emit('add-task', newTask);
            this.clearAllFields();

        }
    },
    emits: ['add-task'],
}
</script>

<style scoped>
.add-form {
    margin-bottom: 40px;
}

.form-control {
    margin: 20px 0;
}

.form-control label {
    display: block;
}

.form-control input {
    width: 100%;
    height: 40px;
    margin: 5px;
    padding: 3px 7px;
    font-size: 17px;
}

.form-control-check {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.form-control-check label {
    flex: 1;
}

.form-control-check input {
    flex: 2;
    height: 20px;
}
</style>