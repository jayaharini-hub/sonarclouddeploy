import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PropertyList from '../../components/PropertyList2';
import SearchBar from '../../components/SearchBar';
import rowhouse1 from '../../assets/rowhouseimages/rowhouse1.jpeg';
import rowhouse2 from '../../assets/rowhouseimages/rowhouse2.jpeg';
import rowhouse3 from '../../assets/rowhouseimages/rowhouse3.jpeg';
import rowhouse4 from '../../assets/rowhouseimages/rowhouse4.jpeg';
import rowhouse5 from '../../assets/rowhouseimages/rowhouse5.jpeg';
import rowhouse6 from '../../assets/rowhouseimages/rowhouse6.jpeg';


const Rowhouse = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [properties, setProperties] = useState([
    { id: 1, title: 'rowhouse With 1 BHK', description: 'A beautiful 1 BHK rowhouse', image:rowhouse1 },
    { id: 2, title: 'rowhouse With 1 BHK', description: 'A beautiful 1 BHK rowhouse ', image:  rowhouse2},
    { id: 3, title: 'rowhouse With 1 BHK', description: 'A beautiful 1 BHK rowhouse ', image:  rowhouse3},
    { id: 4, title: 'rowhouse With 2 BHK', description: 'A beautiful 2 BHK rowhouse ', image: rowhouse4 },
    { id: 5, title: 'rowhouse With 2 BHK', description: 'A beautiful 2 BHK rowhouse ', image: rowhouse5 },
    { id: 6, title: 'rowhouse With 3 BHK', description: 'A beautiful 3 BHK rowhouse ', image:  rowhouse6}
    
  
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

export default Rowhouse;
