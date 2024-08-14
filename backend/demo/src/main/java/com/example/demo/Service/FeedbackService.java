package com.example.demo.Service;


import com.example.demo.Entity.Feedback;

import com.example.demo.Repository.FeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class FeedbackService {
    @Autowired
    private FeedbackRepository feedbackRepository;


    public List<Feedback> getAllUsers() {
        return feedbackRepository.findAll();
    }

    public Optional<Feedback> getUserById(Long id) {
        return feedbackRepository.findById(id);
    }

    public Optional<Feedback> getUserByEmail(String email) {
        return feedbackRepository.findByEmail(email);
    }

    public Feedback saveUser(Feedback user) {
        return feedbackRepository.save(user);
    }
    @Transactional
       public boolean deleteUserr(Long id) {
        Optional<Feedback> user = feedbackRepository.findByUserId(id);
        if (user.isPresent()) {
            feedbackRepository.deleteByUserId(id);
            return true;
        }
        return false;
    }
}
