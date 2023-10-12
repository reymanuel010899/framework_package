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

function Message(){
    return (`

    555555555555555555555555555555555555555555555555555
    <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 style="color:red" class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">An item</li>
      <li class="list-group-item">A second item</li>
      <li class="list-group-item">A third item</li>
    </ul>

    <div class="card-body">
      <a href="#" class="card-link">Card link</a>
      <a href="/" class="card-link">Another link</a>
    </div>
  </div>`)
}

function Layaout(){
    return (`11111111111111111111111111<form class="row g-3">
    <div class="col-md-6">
      <label for="inputEmail4" class="form-label">Email</label>
      <input type="email" class="form-control" id="inputEmail4">
    </div>
    <div class="col-md-6">
      <label for="inputPassword4" class="form-label">Password</label>
      <input type="password" class="form-control" id="inputPassword4">
    </div>
    <div class="col-12">
      <label for="inputAddress" class="form-label">Address</label>
      <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
    </div>
    <div class="col-12">
      <label for="inputAddress2" class="form-label">Address 2</label>
      <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
    </div>
    <div class="col-md-6">
      <label for="inputCity" class="form-label">City</label>
      <input type="text" class="form-control" id="inputCity">
    </div>
    <div class="col-md-4">
      <label for="inputState" class="form-label">State</label>
      <select id="inputState" class="form-select">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="col-md-2">
      <label for="inputZip" class="form-label">Zip</label>
      <input type="text" class="form-control" id="inputZip">
    </div>
    <div class="col-12">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck">
        <label class="form-check-label" for="gridCheck">
          Check me out
        </label>
      </div>
    </div>
    <div class="col-12">
      <button type="submit" class="btn btn-primary">Sign in</button>
    </div>
  </form>`)
}

function title(){
    return (`888888888888888888888888888888888<div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    ${
        Layaout()
    }
    <ul class="list-group list-group-flush">
      <li class="list-group-item">An item</li>
      <li class="list-group-item">A second item</li>
      <li class="list-group-item">A third item</li>
    </ul>
    <div class="card-body">
      <a href="#" class="card-link">Card link</a>
      <a href="/" class="card-link">Another link</a>
    </div>
  </div>`)
}

// import Reyyx from "../core/documentInit"

function router (){
    var routers = [
        Message(),
        title(),
        Layaout()
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
