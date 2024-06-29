
import "./widgetSm.css"
import { Visibility } from "@mui/icons-material"

const WidgetSm =()=>{

    return(
    <div className="widgetSm">
         <span className="widgetSmtitle">New Join Members</span>
         <ul className="WidgetSmList">
            <li className="widgetSmListItem">
                <img src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="widgetSmImg"/>
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">Anna</span>
                    <span className="widgetSmUserTiltle">S.Developer</span>
                </div>
                <button className="widgetSmButton">
                   <Visibility/>
                    Display
                </button>
              
            </li>
         </ul>
         <ul className="WidgetSmList">
            <li className="widgetSmListItem">
                <img src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="widgetSmImg"/>
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">Anna</span>
                    <span className="widgetSmUserTiltle">S.Developer</span>
                </div>
                <button className="widgetSmButton">
                   <Visibility/>
                    Display
                </button>
              
            </li>
         </ul>
         <ul className="WidgetSmList">
            <li className="widgetSmListItem">
                <img src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="widgetSmImg"/>
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">Anna</span>
                    <span className="widgetSmUserTiltle">S.Developer</span>
                </div>
                <button className="widgetSmButton">
                   <Visibility/>
                    Display
                </button>
              
            </li>
         </ul>
         <ul className="WidgetSmList">
            <li className="widgetSmListItem">
                <img src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="widgetSmImg"/>
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">Anna</span>
                    <span className="widgetSmUserTiltle">S.Developer</span>
                </div>
                <button className="widgetSmButton">
                   <Visibility className="widgetSmIcon"/>
                    Display
                </button>
              
            </li>
         </ul>
    </div>
    
    )
}
export default WidgetSm