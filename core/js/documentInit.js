
export default class Reyyx {
    constructor(...args) {
        this.args = args;
    }
    static renderingApp({method}) {
        const roots = document.querySelector("#init");
        const div = document.createElement("div");
        div.innerHTML = method()
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


