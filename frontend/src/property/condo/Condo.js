import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PropertyList from '../../components/PropertyList2';
import SearchBar from '../../components/SearchBar';
import condo1 from '../../assets/condoimages/condo1.jpeg';
import condo2 from '../../assets/condoimages/condo2.jpeg';
import condo3 from '../../assets/condoimages/condo3.jpeg';
import condo4 from '../../assets/condoimages/condo4.jpeg';
import condo5 from '../../assets/condoimages/condo5.jpeg';
import condo6 from '../../assets/condoimages/condo6.jpeg';


const Condo = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [properties, setProperties] = useState([
    { id: 1, title: 'condo With 1 BHK', description: 'A beautiful 1 BHK condo', image:condo1 },
    { id: 2, title: 'condo With 1 BHK', description: 'A beautiful 1 BHK condo ', image:  condo2},
    { id: 3, title: 'condo With 1 BHK', description: 'A beautiful 1 BHK condo ', image:  condo3},
    { id: 4, title: 'condo With 2 BHK', description: 'A beautiful 2 BHK condo ', image: condo4 },
    { id: 5, title: 'condo With 2 BHK', description: 'A beautiful 2 BHK condo ', image: condo5 },
    { id: 6, title: 'condo With 3 BHK', description: 'A beautiful 3 BHK condo ', image:  condo6}
    
  
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

export default Condo;
