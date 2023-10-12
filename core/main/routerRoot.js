export default class RouterRoots {
    constructor(router){
        this.router = router;
    }

    static convertHTML(HTML){
      if (HTML) return new String(HTML)
      return ""
    } 

    }
