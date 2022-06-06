import React from 'react'
import Navbar from './Navbar/Navbar'
import ImageMark from './image'

const SelectImage = () => {

    const AddButton = (
        <button type="button" class="btn btn-success">
            Add Project
        </button>
    )

    const DetailButton = (
        <button type="button" class="btn btn-success" >
            Detail Project
        </button>
    )

    const MarkButton = (
        <button type="button" class="btn btn-success">
            Mark label Project
        </button>
    )

    const DeleteButton = (
        <button type="button" class="btn btn-success">
            Delete Project
        </button>
    )

    return(
        <div>
        <Navbar/>
        <div className="container" >
          
          <h1>All Project</h1>
          
          <p>{AddButton}</p>

          <div className="card card-body my-3">
             <h2></h2>
             <p>ProjectName : ?????</p>
             <p>Total Image : ?????</p>
             <p>Team : ????? , ????? , ?????</p>
             <p>Date : ??/??/????</p>
             <p>Accuracy : ??%</p>
             <p>{DetailButton}</p>
             <p>{MarkButton}</p>
             <p>{DeleteButton}</p>
            </div>

            <div className="card card-body my-3">
             <h2></h2>
             <p>ProjectName : ?????</p>
             <p>Total Image : ?????</p>
             <p>Team : ????? , ????? , ?????</p>
             <p>Date : ??/??/????</p>
             <p>Accuracy : ??%</p>
             <p>{DetailButton}</p>
             <p>{MarkButton}</p>
             <p>{DeleteButton}</p>
            </div>

            <div className="card card-body my-3">
             <h2></h2>
             <p>ProjectName : ?????</p>
             <p>Total Image : ?????</p>
             <p>Team : ????? , ????? , ?????</p>
             <p>Date : ??/??/????</p>
             <p>Accuracy : ??%</p>
             <p>{DetailButton}</p>
             <p>{MarkButton}</p>
             <p>{DeleteButton}</p>
            </div>

            <div className="card card-body my-3">
             <h2></h2>
             <p>ProjectName : ?????</p>
             <p>Total Image : ?????</p>
             <p>Team : ????? , ????? , ?????</p>
             <p>Date : ??/??/????</p>
             <p>Accuracy : ??%</p>
             <p>{DetailButton}</p>
             <p>{MarkButton}</p>
             <p>{DeleteButton}</p>
            </div>

        </div>
     </div>
    )
}
export default SelectImage;