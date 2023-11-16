const { createApp } = Vue;

const dt = luxon.DateTime;
console.log(dt.now().setLocale('it').toLocaleString(dt.DATETIME_FULL_WITH_SECONDS));

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
            const trimmedTask = this.newTask.trim();

            if (trimmedTask !== "") {
                // Aggiunge il nuovo task all'array
                this.tasks.unshift({ text: trimmedTask, done: false });
                // Resetta il campo di input
                this.newTask = "";
                // Log per indicare l'aggiunta del nuovo task
                console.log("Nuovo item aggiunto:", this.tasks);
            }else{
                //mostra un avviso se todo vuoto
                alert("inserisci un todo valido!")
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
