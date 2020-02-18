import React, {useState} from "react";
// import "./style.css";

function DataArea(){

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2 center">
                    <p>Image</p>
                </div>
                <div className="col-md-2 center">
                    <p>Name</p>
                </div>
                <div className="col-md-3 center">
                    <p>Phone</p>
                </div>
                <div className="col-md-3 center">
                    <p>Email</p>
                </div>
                <div className="col-md-2 center">
                    <p>DOB</p>
                </div>
            </div>

        </div>
    )
}

export default DataArea;