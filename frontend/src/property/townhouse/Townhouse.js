import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PropertyList from '../../components/PropertyList2';
import SearchBar from '../../components/SearchBar';
import townhouse1 from '../../assets/townhouseimages/townhouse1.jpeg';
import townhouse2 from '../../assets/townhouseimages/townhouse2.jpeg';
import townhouse3 from '../../assets/townhouseimages/townhouse3.jpeg';
import townhouse4 from '../../assets/townhouseimages/townhouse4.jpeg';
import townhouse5 from '../../assets/townhouseimages/townhouse5.jpeg';
import townhouse6 from '../../assets/townhouseimages/townhouse6.jpeg';


const Townhouse = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [properties, setProperties] = useState([
    { id: 1, title: 'townhouse With 1 BHK', description: 'A beautiful 1 BHK townhouse', image:townhouse1 },
    { id: 2, title: 'townhouse With 1 BHK', description: 'A beautiful 1 BHK townhouse ', image:  townhouse2},
    { id: 3, title: 'townhouse With 1 BHK', description: 'A beautiful 1 BHK townhouse ', image:  townhouse3},
    { id: 4, title: 'townhouse With 2 BHK', description: 'A beautiful 2 BHK townhouse ', image: townhouse4 },
    { id: 5, title: 'townhouse With 2 BHK', description: 'A beautiful 2 BHK townhouse ', image: townhouse5 },
    { id: 6, title: 'townhouse With 3 BHK', description: 'A beautiful 3 BHK townhouse ', image:  townhouse6}
    
  
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

export default Townhouse;
