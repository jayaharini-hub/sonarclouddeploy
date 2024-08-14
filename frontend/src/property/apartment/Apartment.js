import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PropertyList from '../../components/PropertyList2';
import SearchBar from '../../components/SearchBar';
import apartment1 from '../../assets/apartmentimages/apartment1.jpeg';
import apartment2 from '../../assets/apartmentimages/apartment2.jpeg';
import apartment3 from '../../assets/apartmentimages/apartment3.jpeg';
import apartment4 from '../../assets/apartmentimages/apartment4.jpeg';
import apartment5 from '../../assets/apartmentimages/apartment5.jpeg';
import apartment6 from '../../assets/apartmentimages/apartment6.jpeg';


const Apartments = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [properties, setProperties] = useState([
    { id: 1, title: 'Apartment With 1 BHK', description: 'A beautiful 1 BHK Apartment', image:apartment1 },
    { id: 2, title: 'Apartment With 1 BHK', description: 'A beautiful 1 BHK Apartment ', image:  apartment2},
    { id: 3, title: 'Apartment With 1 BHK', description: 'A beautiful 1 BHK Apartment ', image:  apartment3},
    { id: 4, title: 'Apartment With 2 BHK', description: 'A beautiful 2 BHK Apartment ', image: apartment4 },
    { id: 5, title: 'Apartment With 2 BHK', description: 'A beautiful 2 BHK Apartment ', image: apartment5 },
    { id: 6, title: 'Apartment With 3 BHK', description: 'A beautiful 3 BHK Apartment ', image:  apartment6}
    
  
  ]);

  const filteredProperties = properties.filter(property =>
    property.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home">
      <Header />
      <div className="main-content">
        
        <div className="content">
          <SearchBar onSearch={setSearchTerm} />
          <PropertyList properties={filteredProperties} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Apartments;
