import React from 'react';
import '../../assets/styles/mainStyles/Testimonial.css';
import vinay from '../../assets/images/mainImages/TestimonialImage01.png';
import dinesh from '../../assets/images/mainImages/TestimonialImage02.png';
import ashok from '../../assets/images/mainImages/TestimonialImage03.png';

const Testimonial = () => {
  const testimonials = [
    {
      name: 'Vinay',
      rating: 5.0,
      location: 'Nagpur',
      text: 'Way better than naaka waalas. Have shifted all my logistics needs to Porter and I can now safely focus on my business growth. Amazing service!',
      image: vinay,
    },
    {
      name: 'Dinesh',
      rating: 4.0,
      location: 'Mumbai',
      text: 'Excellent service by multiple drivers. I own a business and do multiple shiftings. Rather than ask local drivers and bargain every time.',
      image: dinesh,
    },
    {
      name: 'Ashok',
      rating: 5.0,
      location: 'Delhi NCR',
      text: 'Have had an amazing experience. Had three successful deliveries where it’s a struggle to arrange a tempo service.',
      image: ashok,
    },
  ];

  return (
    <section className="testimonial-section">
      <p className="service-locations">We are serving in Delhi NCR, Bengaluru, Mumbai, Hyderabad, Ahmedabad, Jaipur, Pune, Kolkata, Surat, Chennai, Coimbatore, Indore, Nagpur, Chandigarh, Lucknow, Vadodara, Ludhiana, Kochi, Nashik and Kanpur.</p>
      <h2 className="testimonial-header">~~~ SOME WORDS FROM OUR HAPPY CUSTOMERS ~~~</h2>
      <div className="testimonials">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <div className="testimonial-info">
              <p className="testimonial-name">{testimonial.name}</p>
              <p className="testimonial-rating">Trucks, {testimonial.rating} <span className="star">⭐</span></p>
              <p className="testimonial-location">{testimonial.location}</p>
            </div>  
            <blockquote className="testimonial-text">“{testimonial.text}”</blockquote>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
