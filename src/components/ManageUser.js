import React from 'react'
import Navbar from './Navbar/Navbar'


const ManageUser = () => {

    const DeleteButton = (
        <button type="button" class="btn btn-success">
            Delete User
        </button>
    )


    return(
        <div>
        <Navbar/>
        <div className="container" >
          
          <h1>ManageUser</h1>
          <h1>Username : ????</h1>

          <div className="card card-body my-3">
          <img src={"https://test-o7f7gafj4q-uc.a.run.app/uploads/2020-08-01-21.10.43.png"} width="100" height="100" alt="" loading="lazy"></img>
             <h2></h2>
             <p>Id : ?????</p>
             <p>UserName : ?????</p>
             <p>Email : ?????@kmitl.ac.th</p>
             <p>{DeleteButton}</p>
            </div>

        <div className="card card-body my-3">
          <img src={"https://test-o7f7gafj4q-uc.a.run.app/uploads/2020-08-01-21.10.43.png"} width="100" height="100" alt="" loading="lazy"></img>
             <h2></h2>
             <p>Id : ?????</p>
             <p>UserName : ?????</p>
             <p>Email : ?????@kmitl.ac.th</p>
             <p>{DeleteButton}</p>
            </div>

        <div className="card card-body my-3">
          <img src={"https://test-o7f7gafj4q-uc.a.run.app/uploads/2020-08-01-21.10.43.png"} width="100" height="100" alt="" loading="lazy"></img>
             <h2></h2>
             <p>Id : ?????</p>
             <p>UserName : ?????</p>
             <p>Email : ?????@kmitl.ac.th</p>
             <p>{DeleteButton}</p>
            </div>

        </div>
     </div>
    )
}
export default ManageUser;