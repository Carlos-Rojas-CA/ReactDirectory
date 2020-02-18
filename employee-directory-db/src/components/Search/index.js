import React, {useState} from "react";
// import API from "../../utils/API"
// import "./style.css";

function SearchBar(){
    //const [serachTerm, setSearchTerm] = useState();

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     API.getUsers
    // }


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <input type="search" className="form-control ds-input col-md-6" placeholder="Search" id="search-terms"></input>
                <div className="col-md-3"></div>
            </div>
        
        </div>
    )
}

export default SearchBar;