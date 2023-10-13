// import Reyyx from "../core/documentInit"
import RouterRoots from "../../core/js/routerRoot"
import InitComponet from "../componet/__init__"
//component
import Message from "../componet/messege"
import title from "../componet/title"
import Layaout from "../componet/manolo"

export default function router (){
    var routers = [
        InitComponet(),
        Message(),
    ]
    return(
       RouterRoots.convertHTML(routers)
    )
}