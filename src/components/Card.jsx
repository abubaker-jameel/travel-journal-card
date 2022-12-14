import React from "react";
import locationIcon from "../assets/Fill 219.png";
import Divider from "./Divider";

export default function Card(props) {
  const divider = props.id <= 2 ? <Divider /> : null;

  return (
    <>
      <div className="card">
        <img src={props.imageUrl} alt="" />
        <div className="card--stats">
          <div className="card--top">
            <span>
              <img src={locationIcon} />
            </span>
            <span>{props.location}</span>
            <a href={props.googleMapsUrl} target="_blank">
              View on Google Maps
            </a>
          </div>
          <h1>{props.title}</h1>
          <h4>
            {props.startDate}-{props.endDate}
          </h4>
          <p>{props.description}</p>
        </div>
      </div>
      {divider}
    </>
  );
}
