package com.example.demo.Service;


import com.example.demo.Entity.Bookforhouse;

import com.example.demo.Repository.BookforhouseRepository;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookforhouseService {
    @Autowired
    private BookforhouseRepository bookforhouseRepository;


    public List<Bookforhouse> getAllUsers() {
        return bookforhouseRepository.findAll();
    }

    public Optional<Bookforhouse> getUserById(Long id) {
        return bookforhouseRepository.findById(id);
    }

    public Optional<Bookforhouse> getUserByEmail(String email) {
        return bookforhouseRepository.findByEmail(email);
    }

    public Bookforhouse saveUser(Bookforhouse user) {
        return bookforhouseRepository.save(user);
    }
   
    @Transactional
       public boolean deleteUserrr(Long id) {
        Optional<Bookforhouse> user = bookforhouseRepository.findById(id);
        if (user.isPresent()) {
           bookforhouseRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
