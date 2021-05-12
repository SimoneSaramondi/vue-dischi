

new Vue({
    el: "#app",
    data: {
        filteredData: [],
        albumsList: []
    },
    methods: {
        getGeneresList() {
            const finalList = []

            albumsList.forEach((element) => {
                if(!finalList.includes(element.genre)){
                    finalList.push(element.genre)
                }
            })
        },
        onSelectChange(event) {
            const select = event.currentTarget
            

        }
    },
    mounted() {
        /*
        Tramite axios recuperiamo i dati del server.
        */
        axios.get("https://flynn.boolean.careers/exercises/api/array/music")
            .then((resp) => {
                /*
                  Array di oggetti con le seguenti chiavi
                    "poster"
                    "title"
                    "author"
                    "genre"
                    "year"
                */
                const albumsList = resp.data.response;

                /*
                    una  volta ricevuti i dati dal server, 
                    prima ancora di salvarli nella variabile di vue, 
                    posso eseguire il sort in modo da salvare poi i dati già ordinati
                */
            });
    }
})