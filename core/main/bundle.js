'use strict';

class Reyyx {
    constructor(...args) {
        this.args = args;
    }
    static renderingApp({method}) {
        const roots = document.querySelector("#init");
        const div = document.createElement("div");
        div.innerHTML = method();
        roots.appendChild(div);
    }

    async bringMeData(url, method = "GET", header = {}) {
        if (method === "GET") {
            const result = await fetch(url);
            const data = await result.json();
            if (!result.ok) {
                return `your url is not correct "${url}"`;
            }
            return data;
        } else if (method === "POST") {
            // Implement POST logic here
            return;
        }
        return "message";
    }
}

class RouterRoots {
    constructor(router){
        this.router = router;
    }
    static convertHTML(HTML){
      if (HTML) return new String(HTML)
      return ""
    } 

    }

function InitComponet(){

    return (`<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>`)
}

function Message(){
    return (`

    <div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="First name" aria-label="First name">
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Last name" aria-label="Last name">
    </div>
  </div>`)
}

// import Reyyx from "../core/documentInit"

function router (){
    var routers = [
        InitComponet(),
        Message(),
        // title(),
        // Layaout()
    ];
    return(
       RouterRoots.convertHTML(routers)
    )
}

function Start(){
    return router()
}

function Main() {
    return {
        method: Start,
        }
}

Reyyx.renderingApp((Main()));
