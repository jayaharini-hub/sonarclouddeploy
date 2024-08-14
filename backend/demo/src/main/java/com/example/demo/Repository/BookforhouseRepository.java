package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.Entity.Bookforhouse;

import java.util.List;
import java.util.Optional;

@Repository
public interface BookforhouseRepository extends JpaRepository<Bookforhouse, Long> {
    Optional<Bookforhouse> findByFirstname(String firstname);
    Optional<Bookforhouse> findByLastname(String lastname);
    List<Bookforhouse> findAll();
    Optional<Bookforhouse> findByEmail(String email);
}
