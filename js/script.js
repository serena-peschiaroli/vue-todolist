const {createApp} = Vue;

createApp ({
    data() {
        return {
            newTask : "",
            tasks: ["task1",  "task2", "task3"],

        }
    }
}).mount('#app');