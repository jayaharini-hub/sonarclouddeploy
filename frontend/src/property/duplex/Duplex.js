import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PropertyList from '../../components/PropertyList2';
import SearchBar from '../../components/SearchBar';
import duplex1 from '../../assets/dupleximages/duplex1.jpeg';
import duplex2 from '../../assets/dupleximages/duplex2.jpeg';
import duplex3 from '../../assets/dupleximages/duplex3.jpeg';
import duplex4 from '../../assets/dupleximages/duplex4.jpeg';
import duplex5 from '../../assets/dupleximages/duplex5.jpeg';
import duplex6 from '../../assets/dupleximages/duplex6.jpeg';


const Duplex = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [properties, setProperties] = useState([
    { id: 1, title: 'duplex With 1 BHK', description: 'A beautiful 1 BHK duplex', image:duplex1 },
    { id: 2, title: 'duplex With 1 BHK', description: 'A beautiful 1 BHK duplex ', image:  duplex2},
    { id: 3, title: 'duplex With 1 BHK', description: 'A beautiful 1 BHK duplex ', image:  duplex3},
    { id: 4, title: 'duplex With 2 BHK', description: 'A beautiful 2 BHK duplex ', image: duplex4 },
    { id: 5, title: 'duplex With 2 BHK', description: 'A beautiful 2 BHK duplex ', image: duplex5 },
    { id: 6, title: 'duplex With 3 BHK', description: 'A beautiful 3 BHK duplex ', image:  duplex6}
    
  
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

export default Duplex;
