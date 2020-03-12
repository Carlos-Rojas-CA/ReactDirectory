import React, { useState } from "react";
// import API from "../../utils/API"
// import "./style.css";

function SearchBar(props) {



    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <input
                    type="text"
                    name="term"
                    list="term"
                    className="form-control ds-input col-md-6"
                    placeholder="Search"
                    id="search-terms"
                    value={props.search}
                    onChange={props.handleInputChange}></input>
                <div className="col-md-3"></div>
            </div>

        </div>
    )
}

export default SearchBar;