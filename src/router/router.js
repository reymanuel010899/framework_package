import Reyyx from "../../documentInit"
import RouterRoots from "./routerRoot"

//component
import Message from "../componet/messege"
import title from "../componet/title"
import Layaout from "../componet/manolo"

export default function router (){
    var componet = [
        Message(),
        title(),
        Layaout()
    ]
  
    return(
       RouterRoots.convertHTML(componet)
    )
}