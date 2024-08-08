import React from 'react';
import '../../assets/styles/mainStyles/OurClients.css';
import image from '../../assets/images/mainImages/Logo.png';

const clients = [
  { name: "YouTube", logoUrl: image },
  { name: "Google", logoUrl: image },
  { name: "Facebook", logoUrl: image },
  { name: "Pinterest", logoUrl: image },
  { name: "Behance", logoUrl: image },
  { name: "Discord", logoUrl: image },
  { name: "SpaceX", logoUrl: image },
  { name: "Microsoft", logoUrl: image },
  { name: "Amazon", logoUrl: image },
  { name: "Android", logoUrl: image },
  { name: "WordPress", logoUrl: image },
  { name: "Dropbox", logoUrl: image }
];

const OurClients = () => {
  return (
    <div className="our-clients">
      <h2>Trusted by over 786+ clients.</h2>
      <div className="clients-grid">
        {clients.map((client, index) => (
          <div className="client-logo" key={index}>
            <img src={client.logoUrl} alt={client.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurClients;
