import React from "react";
// import "./style.css";

function DataTable(props) {

    // function Loop(props) {
    //     const listItems = props.users.map((user) => {
    //         <div className="row">
    //             <div className="col-md-2 center">
    //                 <img src={user.image} />
    //             </div>
    //             <div className="col-md-2 center">
    //                 <p>{user.name.first} {user.name.last}</p>
    //             </div>
    //             <div className="col-md-3 center">
    //                 <p>{user.phone}</p>
    //             </div>
    //             <div className="col-md-3 center">
    //                 <p>{user.email}</p>
    //             </div>
    //             <div className="col-md-2 center">
    //                 <p>{user.dob.date}</p>
    //             </div>
    //         </div>
    //     })
    //     return <div>{listItems}</div>
    // }
    // console.log(props.things[0])
    return (
        <div className="container">
            {props.things.map((user) => (
                <div className="row" key={user.id}>
                    <div className="col-md-2 center">
                        <img src={user.image} />
                    </div>
                    <div className="col-md-2 center">
                        <p>{user.first} {user.last}</p>
                    </div>
                    <div className="col-md-3 center">
                        <p>{user.phone}</p>
                    </div>
                    <div className="col-md-3 center">
                        <p>{user.email}</p>
                    </div>
                    <div className="col-md-2 center">
                        <p>{user.dob}</p>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default DataTable;