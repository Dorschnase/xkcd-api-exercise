class XKCDWidget {
    constructor(options = {}) {
      this.options = {
        container: "#xkcd-widget"
      };

      Object.assign(this.options, options);

    this.init();
    }

    init(){
        apiUrl = "http://xkcd.com/:id/info.0.json"

        this.registerEvents;
    }

    registerEvents(){
        const formId = document.querySelector("#search-by-id");
        const inputID = document.querySelector("#input-id");

        formId.addEventListener("submit", e =>{
            e.preventDefault;
            
            let id = inputID.value.trim();
            
        })
    }

  }

export default XKCDWidget;