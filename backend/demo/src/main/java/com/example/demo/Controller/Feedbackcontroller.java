package com.example.demo.Controller;


import com.example.demo.Entity.Feedback;
import com.example.demo.Service.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/feedback")
public class Feedbackcontroller {
    @Autowired
    private FeedbackService feedbackService;
   
    @CrossOrigin(origins = "*")
    @GetMapping
    public List<Feedback> getAllUsers() {
        return feedbackService.getAllUsers();
    }


    @PostMapping
    public Feedback createUser(@RequestBody Feedback user) {
        return feedbackService.saveUser(user);
    }

    @CrossOrigin(origins = "*")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        boolean isRemoved = feedbackService.deleteUserr(id);
        if (!isRemoved) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.noContent().build();
    }

      
}

// @CrossOrigin("http://localhost:3000")
// @RestController
// @RequestMapping("/feedback")
// public class Feedbackcontroller {

//     @Autowired
//     private FeedbackService feedbackService;

//     @GetMapping
//     @PreAuthorize("hasAuthority('admin')")
//     public List<Feedback> getAllUsers() {
//         return feedbackService.getAllUsers();
//     }

//     @PostMapping
//     @PreAuthorize("hasAuthority('user','admin')")
//     public Feedback createUser(@RequestBody Feedback user) {
//         return feedbackService.saveUser(user);
//     }

//     @DeleteMapping("/{id}")
//     @PreAuthorize("hasAuthority('admin')")
//     public ResponseEntity<Void> deleteUser(@PathVariable long id) {
//         System.out.println("deleted");
//         feedbackService.deleteUser(id);
//         return ResponseEntity.ok().build();
//     }
// }
