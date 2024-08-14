package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.Feedback;


import java.util.List;
import java.util.Optional;

@Repository
public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
    Optional<Feedback> findByName(String username);
    List<Feedback> findAll();
    Optional<Feedback> findByEmail(String email);
    Optional<Feedback> findByUserId(Long id);
    void deleteByUserId(Long id);
}