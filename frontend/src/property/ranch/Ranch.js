import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PropertyList from '../../components/PropertyList2';
import SearchBar from '../../components/SearchBar';
import ranch1 from '../../assets/ranchimages/ranch1.jpeg';
import ranch2 from '../../assets/ranchimages/ranch2.jpeg';
import ranch3 from '../../assets/ranchimages/ranch3.jpeg';
import ranch4 from '../../assets/ranchimages/ranch4.jpeg';
import ranch5 from '../../assets/ranchimages/ranch5.jpeg';
import ranch6 from '../../assets/ranchimages/ranch6.jpeg';


const Ranch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [properties, setProperties] = useState([
    { id: 1, title: 'ranch With 1 BHK', description: 'A beautiful 1 BHK ranch', image:ranch1 },
    { id: 2, title: 'ranch With 1 BHK', description: 'A beautiful 1 BHK ranch ', image:  ranch2},
    { id: 3, title: 'ranch With 1 BHK', description: 'A beautiful 1 BHK ranch ', image:  ranch3},
    { id: 4, title: 'ranch With 2 BHK', description: 'A beautiful 2 BHK ranch ', image: ranch4 },
    { id: 5, title: 'ranch With 2 BHK', description: 'A beautiful 2 BHK ranch ', image: ranch5 },
    { id: 6, title: 'ranch With 3 BHK', description: 'A beautiful 3 BHK ranch ', image:  ranch6}
    
  
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

export default Ranch;
