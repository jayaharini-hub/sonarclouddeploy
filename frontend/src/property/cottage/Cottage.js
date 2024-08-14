import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PropertyList from '../../components/PropertyList2';
import SearchBar from '../../components/SearchBar';
import cottage1 from '../../assets/cottageimages/cottage1.jpeg';
import cottage2 from '../../assets/cottageimages/cottage2.jpeg';
import cottage3 from '../../assets/cottageimages/cottage3.jpeg';
import cottage4 from '../../assets/cottageimages/cottage4.jpeg';
import cottage5 from '../../assets/cottageimages/cottage5.jpeg';
import cottage6 from '../../assets/cottageimages/cottage6.jpeg';


const Cottage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [properties, setProperties] = useState([
    { id: 1, title: 'cottage With 1 BHK', description: 'A beautiful 1 BHK cottage', image:cottage1 },
    { id: 2, title: 'cottage With 1 BHK', description: 'A beautiful 1 BHK cottage ', image:  cottage2},
    { id: 3, title: 'cottage With 1 BHK', description: 'A beautiful 1 BHK cottage ', image:  cottage3},
    { id: 4, title: 'cottage With 2 BHK', description: 'A beautiful 2 BHK cottage ', image: cottage4 },
    { id: 5, title: 'cottage With 2 BHK', description: 'A beautiful 2 BHK cottage ', image: cottage5 },
    { id: 6, title: 'cottage With 3 BHK', description: 'A beautiful 3 BHK cottage ', image:  cottage6}
    
  
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

export default Cottage;
