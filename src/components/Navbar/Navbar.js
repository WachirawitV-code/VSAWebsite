import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">VSA WEB</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="http://localhost:3000/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/AllProject">AllProject</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/DetailProject">DetailProject</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/SelectImage">SelectImage</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Profile">Profile</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="ManageUser">Manage User</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Marklabel">Marklabel</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Map">Map</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/DrawM">drawMap</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/TestDraw">TestDraw</a>
            </li>
            {/* <li className='nav-item'>
               <a>
                 <img src={"https://test-o7f7gafj4q-uc.a.run.app/uploads/2020-08-01-21.10.43.png"}  width="30" height="24" > 
               </a>
            </li> */}
            
            </ul>
        </div>
        
      </nav>
  );
}
