// import Reyyx from "../core/documentInit"
import RouterRoots from "../../core/main/routerRoot"

//component
import Message from "../componet/messege"
import title from "../componet/title"
import Layaout from "../componet/manolo"

export default function router (){
    var routers = [
        Message(),
        title(),
        Layaout()
    ]
  
    return(
       RouterRoots.convertHTML(routers)
    )
}