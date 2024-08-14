import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PropertyList from '../../components/PropertyList2';
import SearchBar from '../../components/SearchBar';
import mansion1 from '../../assets/mansionimages/mansion1.jpeg';
import mansion2 from '../../assets/mansionimages/mansion2.jpeg';
import mansion3 from '../../assets/mansionimages/mansion3.jpeg';
import mansion4 from '../../assets/mansionimages/mansion4.jpeg';
import mansion5 from '../../assets/mansionimages/mansion5.jpeg';
import mansion6 from '../../assets/mansionimages/mansion6.jpeg';


const Mansion = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [properties, setProperties] = useState([
    { id: 1, title: 'mansion With 1 BHK', description: 'A beautiful 1 BHK mansion', image:mansion1 },
    { id: 2, title: 'mansion With 1 BHK', description: 'A beautiful 1 BHK mansion ', image:  mansion2},
    { id: 3, title: 'mansion With 1 BHK', description: 'A beautiful 1 BHK mansion ', image:  mansion3},
    { id: 4, title: 'mansion With 2 BHK', description: 'A beautiful 2 BHK mansion ', image: mansion4 },
    { id: 5, title: 'mansion With 2 BHK', description: 'A beautiful 2 BHK mansion ', image: mansion5 },
    { id: 6, title: 'mansion With 3 BHK', description: 'A beautiful 3 BHK mansion ', image:  mansion6}
    
  
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

export default Mansion;
