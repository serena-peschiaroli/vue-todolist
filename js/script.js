const { createApp } = Vue;

createApp({
    data() {
        return {
            // array vuoto
            newTask: "",
            tasks: [
                { text: "fare la spesa", done: false },
                { text: "pagare la luce", done: false },
                { text: "fare la lavatrice", done: false },
                { text: "buttare la plastica", done: false },
            ],
        };
    },
    // funzioni
    methods: {
        // per aggiungere nuovo todo
        addTask() {
            // Controlla se il nuovo item != spazio vuoto
            if (this.newTask.trim() !== "") {
                // Aggiunge il nuovo task all'array
                this.tasks.push({ text: this.newTask.trim(), done: false });
                // Resetta il campo di input
                this.newTask = "";
                // Log per indicare l'aggiunta del nuovo task
                console.log("Nuovo item aggiunto:", this.tasks);
            }
        },
        // per rimuovere item
        removeTask(index) {
            // Rimuove iitem all'i specificato
            this.tasks.splice(index, 1);
            // Log per  la rimozione di item
            console.log("item rimosso:", this.tasks);
        },
        // per contrassegnare l'item come done
        taskDone(index) {
            // Inverte lo stato di "done" per il task all'i
            this.tasks[index].done = !this.tasks[index].done;
            // Log per cambiamento stato 
            console.log("Stato item modificato:", this.tasks);
        },
    },
}).mount("#app");
