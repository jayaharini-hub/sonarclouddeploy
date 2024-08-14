import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PropertyList from '../../components/PropertyList2';
import SearchBar from '../../components/SearchBar';
import house1 from '../../assets/houseimages/house1.jpeg';
import house2 from '../../assets/houseimages/house2.jpeg';
import house3 from '../../assets/houseimages/house3.jpeg';
import house4 from '../../assets/houseimages/house4.jpeg';
import house5 from '../../assets/houseimages/house5.jpeg';
import house6 from '../../assets/houseimages/house6.jpeg';


const House = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [properties, setProperties] = useState([
    { id: 1, title: 'house With 1 BHK', description: 'A beautiful 1 BHK house', image:house1 },
    { id: 2, title: 'house With 1 BHK', description: 'A beautiful 1 BHK house ', image:  house2},
    { id: 3, title: 'house With 1 BHK', description: 'A beautiful 1 BHK house ', image:  house3},
    { id: 4, title: 'house With 2 BHK', description: 'A beautiful 2 BHK house ', image: house4 },
    { id: 5, title: 'house With 2 BHK', description: 'A beautiful 2 BHK house ', image: house5 },
    { id: 6, title: 'house With 3 BHK', description: 'A beautiful 3 BHK house ', image:  house6}
    
  
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

export default House;
