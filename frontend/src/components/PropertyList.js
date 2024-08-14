import React from 'react';
import PropertyCard from './PropertyCard';
import '../styles/PropertyList.css';
import { useNavigate } from 'react-router-dom';

const PropertyList = ({ properties }) => {
  const navigate = useNavigate();

  const handlePropertyClick = (id) => {
    if(id===2)
    navigate('/apartmentss');
  else if(id===3){
    navigate('/house');
  }
  else if(id===4){
    navigate('/condo');
  }
  else if(id===5){
    navigate('/cottage');
  }
  else if(id===6){
    navigate('/duplex');
  }
  else if(id===7){
    navigate('/triplex');
  }
  else if(id===8){
    navigate('/ranch');
  }
  else if(id===9){
    navigate('/rowhouse');
  }
  else if(id===10){
    navigate('/mansion');
  }
  else if(id===11){
    navigate('/townhouse');
  }
  else if(id===12){
    navigate('/penthouse');
  }
  else
  navigate('/apartments')
  
    
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

