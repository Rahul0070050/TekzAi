import React from "react";
import "./ClientCard.css";
import ClientCard from "../../components/ClientCard";
import philosophyOfMedicinePharmacy from "../../assets/clients/philosophy-of-medicine-pharmacy.png";
import Edize from "../../assets/clients/Edize.png";
import HealthyOutfit from "../../assets/clients/Healthy-Outfit.png";
import Chimpanzee from "../../assets/clients/Chimpanzee.png";
import Cmets from "../../assets/clients/Cmets.png";
const clients = [
  {
    name: "philosophy of medicine pharmacy",
    image: philosophyOfMedicinePharmacy,
  },
  { name: "Edize", image: Edize },
  { name: "Healthy Outfit", image: HealthyOutfit },
  { name: "Chimpanzee", image: Chimpanzee },
  { name: "Cmets", image: Cmets },
];

const ClientShowcase = () => {
  return (
    <div className="client-showcase">
      <h1 className="heading">Our Clients</h1>
      <div className="client-grid">
        {clients.map((client, index) => (
          <ClientCard key={index} client={client} />
        ))}
      </div>
    </div>
  );
};

export default ClientShowcase;
