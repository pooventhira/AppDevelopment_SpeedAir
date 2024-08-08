import React from 'react';
import '../../assets/styles/mainStyles/Offices.css';

const Offices = () => {

  const offices = [
    { 
      city: 'Mumbai', 
      address: 'SmartShift Logistics Solutions Pvt. Ltd., No. A - 501, A – 502, B – 504, B – 505 and B – 506, Universal Business Park, Chandivali Farm Road, Off. Saki Vihar Road, Andheri (East), Mumbai, Maharashtra - 400 072' 
    },
    { 
      city: 'Delhi NCR', 
      address: 'Plot No. F-8, Okhla Industrial Area, Phase – 1, New Delhi - 110020' 
    },
    { 
      city: 'Hyderabad', 
      address: 'SmartShift Logistics Solutions Pvt. Ltd.\nDarshak Chambers, Ground Floor & 1st Floor, No. 1-8-303/48/22/A, Situated near Patigadda, Rasoolpura, Secunderabad, Telangana - 500003' 
    },
    { 
      city: 'Chennai', 
      address: 'SmartShift Logistics Solutions Pvt. Ltd (Porter) No. 23, Ground Floor, Velachery Road, Little mount, Saidapet, Chennai - 600015' 
    },
    { 
      city: 'Ahmedabad',
      address: '304-306, Sachet – 4, Nr. Prernatirth Derasar, Satellite, Ahmedabad -380015' 
    },
    { 
      city: 'Jaipur', 
      address: '149, First Floor, Rathore Nagar, Amrapali Marg, Vaishali Nagar, Jaipur - 302021' 
    },
    { 
      city: 'Pune', 
      address: 'Office No 305 Elite Primo Building Dasera Chowk Balewadi Pune - 411045' 
    },
    { 
      city: 'Kolkata', 
      address: 'Smartshift Logistics Solutions Pvt Ltd, Asyst Park, 6th Floor, Zone G, AN 6/3/A1, Salt Lake City, Sector V, Kolkata 700091' 
    },
    { 
      city: 'Surat', 
      address: '3/9, The Galleria Shopping hub, Opp.370 Kitchen Restaurant, Nr.Sargam Kumar Auditorium, Pal, Adajan, Surat, Gujarat 395009' 
    },
    { 
      city: 'Lucknow', 
      address: 'B-42, Vibhuti Khand,Adjacent to R.K.Timber Gomti Nagar, Lucknow, Uttar Pradesh - 226010' 
    },
    { 
      city: 'Coimbatore', 
      address: 'No.260, VV Complex, 1st Floor, Avaram Palayam Road,New Siddhapudur, Coimbatore , Tamil Nadu 641044'
    },
    { 
      city: 'Indore', 
      address: 'Office no 105, Saviti Empire , Om Gurudev Plaza Bhawani , near Dwityo office , Indore 452010' 
    },
  ];

  return (
    <div className="our-offices">
      <h1>OUR OFFICES</h1>
      <div className="offices">
        {offices.map((office, index) => (
          <div key={index} className="office">
            <h2>{office.city}</h2>
            <p>{office.address}</p>
            <a href="#byebye">GET DIRECTIONS &gt;</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offices;
