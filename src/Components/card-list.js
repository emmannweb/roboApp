import React from "react";

const Cardlist = props => (
  <div className="col-sm-4 pd-card">
    <div className="card">
      <img
        className="img-fluid"
        src={`https://robohash.org/${props.cardlist.id}?set=set2`}
        alt=""
      />
      <div className="card-body">
        <h5>{props.cardlist.name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{props.cardlist.email}</li>
        <li className="list-group-item">{props.cardlist.username}</li>
      </ul>
    </div>
  </div>
);

export default Cardlist;
