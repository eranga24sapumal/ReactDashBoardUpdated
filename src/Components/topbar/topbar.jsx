
import React from "react";
import "./topbar.css"
import { NotificationsNone,Language,Settings } from "@mui/icons-material";

export default function Topbar(){

    return(
        <div className="topbar">
              <div className="topbarwrapper">
                <div className="topleft">
                    <span className="logo">Eranga</span>
                </div>
                <div className="topright">
                    <div className="topbariconsContainer">
                        <NotificationsNone/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbariconsContainer">
                        <Language/>
                    </div>
                    <div className="topbariconsContainer">
                        <Settings/>
                    </div>
                    <img src="https://images.pexels.com/photos/2403209/pexels-photo-2403209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="topAvatar"/>
                </div>
              </div>
        </div>
    )
          
}