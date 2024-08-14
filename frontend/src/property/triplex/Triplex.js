import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PropertyList from '../../components/PropertyList2';
import SearchBar from '../../components/SearchBar';
import triplex1 from '../../assets/tripleximages/triplex1.jpeg';
import triplex2 from '../../assets/tripleximages/triplex2.jpeg';
import triplex3 from '../../assets/tripleximages/triplex3.jpeg';
import triplex4 from '../../assets/tripleximages/triplex4.jpeg';
import triplex5 from '../../assets/tripleximages/triplex5.jpeg';
import triplex6 from '../../assets/tripleximages/triplex6.jpeg';


const Triplex = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [properties, setProperties] = useState([
    { id: 1, title: 'triplex With 1 BHK', description: 'A beautiful 1 BHK triplex', image:triplex1 },
    { id: 2, title: 'triplex With 1 BHK', description: 'A beautiful 1 BHK triplex ', image:  triplex2},
    { id: 3, title: 'triplex With 1 BHK', description: 'A beautiful 1 BHK triplex ', image:  triplex3},
    { id: 4, title: 'triplex With 2 BHK', description: 'A beautiful 2 BHK triplex ', image: triplex4 },
    { id: 5, title: 'triplex With 2 BHK', description: 'A beautiful 2 BHK triplex ', image: triplex5 },
    { id: 6, title: 'triplex With 3 BHK', description: 'A beautiful 3 BHK triplex ', image:  triplex6}
    
  
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

export default Triplex;
