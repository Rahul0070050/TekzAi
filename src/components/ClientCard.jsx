import React from "react";
import "./ClientCard.css";

const ClientCard = ({ client }) => {
  return (
    <div className="client-card">
      <img src={client.image} alt={client.name} className="client-image" />
      <div className="overlay">
        <div className="client-name">{client.name}</div>
        <div className="underline"></div>
      </div>
    </div>
  );
};

export default ClientCard;
