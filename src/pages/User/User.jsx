import { CalendarToday, Link, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@mui/icons-material"
import "./user.css"
import React from 'react'
import { LabelList } from "recharts"


const User =()=>{

    return(
    <div className="user">
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to="/newUser">
             <button className="userAddButton">Create</button>
            </Link>
           
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                  <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="userShowImg"/>
                </div>
                <div className="userShowTopTile">
                    <span className="userShowUsername">Anna Bee</span> 
                    <span className="userShowUserTitle">S.Developer</span> 
                </div>
                <div className="userShowBottom">
                <span className="userShowUsername">Account Deatils</span> 
                <div className="userShowInfor">
                  <MailOutline className="userShowIcon"/>
                  <span className="userShowinforTitle">Anna@gmai.com</span> 
                </div>
                <div className="userShowInfor">
                  <CalendarToday className="userShowIcon"/>
                  <span className="userShowinforTitle">12/09/2022</span> 
                </div>
                <div className="userShowInfor">
                  <PhoneAndroid className="userShowIcon"/>
                  <span className="userShowinforTitle">+1 34256778</span> 
                </div>
                <div className="userShowInfor">
                  <LocationSearching className="userShowIcon"/>
                  <span className="userShowinforTitle">New York</span> 
                </div>

                </div>
            </div>
            <div className="userUpdate">
               <span className="userUpdateTitle">Edit </span>
              <form className="UserUpdateform">
                <div className="userUpdateLeft">
                  <div className="userUpdateItem">
                    <label>UserName</label>
                   <input type="text" placeholder="Anna" className="userUpdateInput"/>
                  </div>
                  <div className="userUpdateItem">
                    <label>Full name</label>
                   <input type="text" placeholder="Anna Bee" className="userUpdateInput"/>
                  </div>
                  <div className="userUpdateItem">
                    <label>Email</label>
                   <input type="text" placeholder="Anna@gmai.com" className="userUpdateInput"/>
                  </div>
                  <div className="userUpdateItem">
                    <label>Contact</label>
                   <input type="text" placeholder="+1 34256778" className="userUpdateInput"/>
                  </div>
                  <div className="userUpdateItem">
                    <label>Address</label>
                   <input type="text" placeholder="New York" className="userUpdateInput"/>
                  </div>
                </div>
                <div className="userUpdateRight">
                    <div className="userUpdateUpload">
                      <img className="userUpdateImg" src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                      <label htmlFor="file">
                        <Publish className="userUpdateIcon"/></label>
                      <input type="file" id="file" style={{display:"none"}}/>
                    </div>
                    <button className="userUpdateButton">Update</button>
                </div>
              </form>
              

            </div>
        </div>
    </div>
    
)
}
export default User