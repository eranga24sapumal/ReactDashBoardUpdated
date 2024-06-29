import "./newuser.css"
import React from 'react'


const NewUser =()=>{

    return(
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form className="newuserform">
                <div className="newUserformItem">
                    <label >UserName</label>
                    <input type="text" placeholder="John"/>

                </div>
                <div className="newUserformItem">
                    <label >Full Name</label>
                    <input type="text" placeholder="John Smith"/>
                    
                </div>
                <div className="newUserformItem">
                    <label >Password</label>
                    <input type="password" placeholder="*********"/>
                    
                </div>
                <div className="newUserformItem">
                    <label >Phone</label>
                    <input type="text" placeholder="+1 4348 55455"/>
                    
                </div>
                <div className="newUserformItem">
                    <label >Address</label>
                    <input type="text" placeholder=" 12. New Yokr DC"/>
                    
                </div>
                 <div className="newUserformItem">
                    <label >Gender</label>
                    <div className="newUserGender">
                    <input type="radio" name="gender" id="male" value="male"/>
                    <label for="Male"></label>
                    <input type="radio" name="gender" id="female" value="female"/>
                    <label for="Female"></label>
                    <input type="radio" name="gender" id="other" value="other"/>
                    <label for="Other"></label> 
                 </div>
                 
                </div>
            </form>
        </div>
    )
}
export default NewUser