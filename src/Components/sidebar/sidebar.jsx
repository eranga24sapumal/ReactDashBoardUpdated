import { ClassNames } from "@emotion/react"
import { LineStyle,Timeline,TrendingUp,Person,Inventory2,Paid,Description,Mail,Chat,ModeComment,ManageAccounts,TrendingDown} from "@mui/icons-material"
import "./sidebar.css"


export default function Sidebar()
{
    return(
        <div className="sidebar">
          <div className="sidebarWrapper">
              <div className="sidebarmenu">
                  <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarlist">
                        <li className="sidebarListItem active">
                           <LineStyle className="sidebarIcon"/>
                             <a href="./">Home</a>
                             
                        </li>
                        <li className="sidebarListItem">
                           <Timeline className="sidebarIcon"/>
                             Analytics
                        </li>
                        <li className="sidebarListItem">
                           <TrendingUp className="sidebarIcon"/>
                             Sales
                        </li>
                    </ul>
              </div>
              <div className="sidebarmenu">
                  <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarlist">
                        <li className="sidebarListItem">
                           <Person className="sidebarIcon"/>
                           <a href="/users">User</a>
                        </li>
                        <li className="sidebarListItem">
                           <Inventory2 className="sidebarIcon"/>
                             Products
                        </li>
                        <li onClick={(e)=>{window.location="/trasactions"}} className="sidebarListItem">
                           <Paid className="sidebarIcon"/>
                             Trasactions
                        </li>
                        <li className="sidebarListItem">
                           <Description className="sidebarIcon"/>
                             Reports
                        </li>
                    </ul>
              </div>
              <div className="sidebarmenu">
                  <h3 className="sidebarTitle">Notification</h3>
                    <ul className="sidebarlist">
                        <li className="sidebarListItem">
                           <Mail className="sidebarIcon"/>
                             Mail
                        </li>
                        <li className="sidebarListItem">
                           <Chat className="sidebarIcon"/>
                             Feedback
                        </li>
                        <li className="sidebarListItem">
                           <ModeComment className="sidebarIcon"/>
                             Messages
                        </li>
                    </ul>
              </div>
              <div className="sidebarmenu">
                  <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarlist">
                        <li className="sidebarListItem">
                           <ManageAccounts className="sidebarIcon"/>
                             Manage
                        </li>
                        <li className="sidebarListItem">
                           <TrendingDown className="sidebarIcon"/>
                             Analytics
                        </li>
                        <li className="sidebarListItem">
                           <Description className="sidebarIcon"/>
                             Reports
                        </li>
                    </ul>
              </div>
          </div>
       </div>
  
    )
        
    
}