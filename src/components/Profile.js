import React from 'react'
import Navbar from './Navbar/Navbar'
import ImageMark from './image'

const Profile = () => {

    const EditButton = (
        <button type="button" class="btn btn-success">
            Edit Profile
        </button>
    )
    const Edit2Button = (
        <button type="button" class="btn btn-success">
            Edit Contract
        </button>
    )

    return(
        <div>
        <Navbar/>
        <div className="container" >
            <h2></h2>
            <h2>Username : ?????</h2>
            <img src={"https://test-o7f7gafj4q-uc.a.run.app/uploads/2020-08-01-21.10.43.png"} width="100" height="100" alt="" loading="lazy"></img>
            <h2></h2>
            <div className="card card-body my-3">
            <p>Firstname : ??????????</p>
            <p>Lastname : ???????????????</p>
            <p>Email :????????@kmitl.ac.th</p>
            <p>Team : ????? , ????? , ?????</p>
            <p>Project : ??? , ????</p>
            <p>{EditButton}</p>
            </div>
            
            <div className="card card-body my-3">
             <h2></h2>
             <p>Contract Us : </p>
             <p>Phone number : ?????</p>
             <p>Email : ????????@kmitl.ac.th</p>
             <p>Facebook : ?????</p>
             <p>{Edit2Button}</p>
            </div>
            
        </div>
     </div>
    )
}
export default Profile;