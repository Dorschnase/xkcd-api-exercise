class XkcdLoader {
    constructor(){
        this.apiUrl = "http://xkcd.com";
        this.apiEndpoint = "/:id/info.0.json";

        this.registerEvents;
    }

    registerEvents(){
        const formId = document.querySelector("#search-by-id");
        const inputID = document.querySelector("#input-id")

        formId.addEventListener("submit", e =>{
            e.preventDefault;
            console.log("clicked")
        })
    }
}

export default XkcdLoader;