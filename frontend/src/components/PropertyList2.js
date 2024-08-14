import React from 'react';
import PropertyCard from './PropertyCard1';
import '../styles/PropertyList.css';
import { useNavigate } from 'react-router-dom';

const PropertyList = ({ properties }) => {
  const navigate = useNavigate();

  const handlePropertyClick = (id) => {
    navigate(`/luxury1/${id}`); // Pass ID to URL
  };


  return (
    <div className="property-list">
      {properties.map((property) => (
        <div key={property.id} onClick={() => handlePropertyClick(property.id)}>
          <PropertyCard property={property} />
        </div>
      ))}
    </div>
  );
};

export default PropertyList;


 
// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const PropertyList = ({ properties }) => {
//   const navigate = useNavigate();

//   const handlePropertyClick = (id) => {
//     navigate('/luxury');
//   };

//   return (
//     <div className="property-list">
//       {properties.map((property) => (
//         <div key={property.id} className="property-item" onClick={() => handlePropertyClick(property.id)}>
//           <img src={property.image} alt={property.title} />
//           <h2>{property.title}</h2>
//           <p>{property.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PropertyList;

