import React from "react";

function MyCard() {
  return (
    
    <div className="container d-flex justify-content-evenly  col col-sm-6 col-lg-3 mb-5" id="card">
      <div className="card text-center" style={{ width: "20rem" }}>
        <img className="img-responsive" src="https://edgewoodreit.com/wp-content/uploads/2018/01/500x325.png" alt="Image" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse neccessitativus neque.</p></div>
        <div class="card-footer">
          <a href="#" className="btn btn-primary">Find Out More!</a>
        </div>
      </div>
    </div>


  );
}
export default MyCard;