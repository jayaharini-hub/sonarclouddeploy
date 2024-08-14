package com.example.demo.Repository;


import com.example.demo.Entity.Property;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;

public interface PropertyRepository extends JpaRepository<Property, Long> {
     List<Property> findAll();
     
    
}
