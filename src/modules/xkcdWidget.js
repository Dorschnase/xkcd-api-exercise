class XKCDWidget {
    constructor(options = {}) {
      this.options = {
        container: "#xkcd-widget"
      };

      Object.assign(this.options, options);
    this.init();

    }

    init(){
        this.apiUrl = "https://cors-anywhere.dominik-hanke.de/http://xkcd.com";
        this.apiEndpoint = "/:id/info.0.json";
        this.formId = document.querySelector("#search-by-id");
        this.inputID = document.querySelector("#input-id");
        this.registerEvents();
    }

    registerEvents(){

        this.formId.addEventListener("submit", e =>{
            e.preventDefault();
            
            let id = Number(this.inputID.value.trim());
            let buildUrl = `${this.apiUrl}${this.apiEndpoint.replace(":id", id)}`;
            
            const xkcdComic = fetch(buildUrl);

            xkcdComic
            .then((response) => response.json())
            .then((data) => { console.log() })
            .catch((error) =>{
                console.log(error)
            });
        });
    };

    console.log(xkcdComic);


  }

export default XKCDWidget;