package com.example.demo.Controller;


import com.example.demo.Entity.Bookforhouse;
import com.example.demo.Service.BookforhouseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/bookforhouse")
public class Bookforhousecontroller {
    @Autowired
    private BookforhouseService bookforhouseService;
   
    @CrossOrigin(origins = "*")
    @GetMapping
    public List<Bookforhouse> getAllUsers() {
        return bookforhouseService.getAllUsers();
    }


    @PostMapping
    public Bookforhouse createUser(@RequestBody Bookforhouse user) {
        return bookforhouseService.saveUser(user);
    }

    @CrossOrigin(origins = "*")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        boolean isRemoved = bookforhouseService.deleteUserrr(id);
        if (!isRemoved) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.noContent().build();
    }

      
}
