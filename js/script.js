const {createApp} = Vue;

createApp ({
    data() {
        return {
            // array vuoto
            newTask : "",
            tasks: ["task1",  "task2", "task3"],

        };
    },
    // funzioni
    methods: {
        // per aggiungere nuovo todo
        addTask () {
            if (this.newTask.trim() !== " "){
                this.tasks.push(this.newTask.trim());
                this.newTask = "";
            }
        }
    }
}).mount('#app');