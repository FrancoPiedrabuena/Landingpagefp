import React  from "react";

function MyCard(){
    return (

      <div className="container py-4">
      <div className="row">

        <div className="col-sm-3 mt-3">
           <div className="card h-100 text-center" style={{width: "100%"}}> 
           <img className="img-responsive" src="https://edgewoodreit.com/wp-content/uploads/2018/01/500x325.png" alt="Image" /> 
            <div className="card-body">
             <h5 className="card-title">Card title</h5>
             <p className="card-text mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse neccessitativus neque.</p></div>
            <div class="card-footer">
            <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
          </div>
        </div>
        <br/>

        
        <div className="col-sm-3 mt-3">
           <div className="card h-100 text-center" style={{width: "100%"}}> 
           <img className="img-responsive" src="https://edgewoodreit.com/wp-content/uploads/2018/01/500x325.png" alt="Image" /> 
            <div className="card-body">
             <h5 className="card-title">Card title</h5>
             <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatea culpa natus architecto</p></div>
             <div class="card-footer">
            <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
          </div>
        </div>

        <br/>

        <div className="col-sm-3 mt-3">
           <div className="card h-100 text-center" style={{width: "100%"}}> 
           <img className="img-responsive" src="https://edgewoodreit.com/wp-content/uploads/2018/01/500x325.png" alt="Image" /> 
            <div className="card-body">
             <h5 className="card-title">Card title</h5>
             <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse neccessitativus neque.</p> </div>
             <div class="card-footer">
            <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
          </div>
        </div>

        <br/>

        <div className="col-sm-3 mt-3">
           <div className="card h-100 text-center" style={{width: "100%"}}> 
           <img className="img-responsive" src="https://edgewoodreit.com/wp-content/uploads/2018/01/500x325.png" alt="Image" /> 
            <div className="card-body">
             <h5 className="card-title">Card title</h5>
             <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatea culpa natus architecto.</p></div>
             <div class="card-footer">
            <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
          </div>
        </div>
        

        
      </div>

    </div>

    
        
    );
}
export default MyCard;