

new Vue({
    el: "#app",
    data: {
        filteredData: [],
        albumsList: [],
        genreToFilter: "",
    },
    methods: {
        getGeneresList() {

            const finalList = [];

            albumsList.forEach((element) => {
                if(!finalList.includes(element.genre)){
                    finalList.push(element.genre)
                }
            })
            
        },
        onSelectChange() {

            if(this.genreToFilter === ""){
                this.filteredData = this.albumsList

                return
            }

            const newFilteredData = this.albumsList.filter((album) => {
                return album.genre === this.genreToFilter
            })    
            this.filteredData = newFilteredData;      

        },


    },
    mounted() {
        
        axios.get("https://flynn.boolean.careers/exercises/api/array/music")
            .then((resp) => {
                
                const albumsList = resp.data.response;

                this.albumsList.push(...albumsList);
                //this.filteredData.push(...albumsList)

                this.getGeneresList();
            });
    }
})