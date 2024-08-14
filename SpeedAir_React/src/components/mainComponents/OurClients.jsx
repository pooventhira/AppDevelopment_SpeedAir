import React from 'react';
import '../../assets/styles/mainStyles/OurClients.css';
import Client01 from '../../assets/images/mainImages/Client01.png';
import Client02 from '../../assets/images/mainImages/Client02.png';
import Client03 from '../../assets/images/mainImages/Client03.png';
import Client04 from '../../assets/images/mainImages/Client04.png';
import Client05 from '../../assets/images/mainImages/Client05.png';
import Client06 from '../../assets/images/mainImages/Client06.png';
import Client07 from '../../assets/images/mainImages/Client07.png';
import Client08 from '../../assets/images/mainImages/Client08.png';
import Client09 from '../../assets/images/mainImages/Client09.png';
import Client10 from '../../assets/images/mainImages/Client10.png';
import Client11 from '../../assets/images/mainImages/Client11.png';
import Client12 from '../../assets/images/mainImages/Client12.png';
import Client13 from '../../assets/images/mainImages/Client13.png';
import Client14 from '../../assets/images/mainImages/Client14.png';
import Client15 from '../../assets/images/mainImages/Client15.png';

const clients = [
  { name: "Blackhawk Furniture", logoUrl: Client01 },
  { name: "Death Wish Coffee", logoUrl: Client02 },
  { name: "Death Note", logoUrl: Client03 },
  { name: "Crocs", logoUrl: Client04 },
  { name: "Amart", logoUrl: Client05 },
  { name: "Assape", logoUrl: Client06 },
  { name: "Bob's Furniture", logoUrl: Client07 },
  { name: "Nuxt", logoUrl: Client08 },
  { name: "Pink Dino", logoUrl: Client09 },
  { name: "B&Q", logoUrl: Client10 },
  { name: "Kia", logoUrl: Client11 },
  { name: "ABC", logoUrl: Client12 },
  { name: "Satan's Choice", logoUrl: Client13 },
  { name: "Porche", logoUrl: Client14 },
  { name: "Ford", logoUrl: Client15 }
];

const OurClients = () => {
  return (
    <section className="our-clients">
      <h2>Trusted by over 786+ clients.</h2>
      <div className="clients-grid">
        {clients.map((client, index) => (
          <div className="client-logo" key={index}>
            <img src={client.logoUrl} alt={client.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurClients;
