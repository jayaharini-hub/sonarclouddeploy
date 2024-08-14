import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PropertyList from '../../components/PropertyList2';
import SearchBar from '../../components/SearchBar';
import penthouse1 from '../../assets/penthouseimages/penthouse1.jpeg';
import penthouse2 from '../../assets/penthouseimages/penthouse2.jpeg';
import penthouse3 from '../../assets/penthouseimages/penthouse3.jpeg';
import penthouse4 from '../../assets/penthouseimages/penthouse4.jpeg';
import penthouse5 from '../../assets/penthouseimages/penthouse5.jpeg';
import penthouse6 from '../../assets/penthouseimages/penthouse6.jpeg';


const Penthouse = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [properties, setProperties] = useState([
    { id: 1, title: 'penthouse With 1 BHK', description: 'A beautiful 1 BHK penthouse', image:penthouse1 },
    { id: 2, title: 'penthouse With 1 BHK', description: 'A beautiful 1 BHK penthouse ', image:  penthouse2},
    { id: 3, title: 'penthouse With 1 BHK', description: 'A beautiful 1 BHK penthouse ', image:  penthouse3},
    { id: 4, title: 'penthouse With 2 BHK', description: 'A beautiful 2 BHK penthouse ', image: penthouse4 },
    { id: 5, title: 'penthouse With 2 BHK', description: 'A beautiful 2 BHK penthouse ', image: penthouse5 },
    { id: 6, title: 'penthouse With 3 BHK', description: 'A beautiful 3 BHK penthouse ', image:  penthouse6}
    
  
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

export default Penthouse;
