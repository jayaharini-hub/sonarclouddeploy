package com.example.demo.Controller;



import com.example.demo.Entity.UserInfo;
import com.example.demo.Repository.UserInfoRepository;
import com.example.demo.Service.JwtService;
import com.example.demo.Service.UserInfoService;
import com.example.demo.dto.AuthRequest;
import com.example.demo.dto.AuthResponse;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/userInfo")
public class UserInfoController {
    @Autowired
    private UserInfoService userService;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtService jwtService;
    @Autowired
    private UserInfoRepository repository;

    @GetMapping
    public List<UserInfo> getAllUsers() {
        return userService.getAllUsers();
    }

    // @GetMapping("/{id}")
    // public ResponseEntity<UserInfo> getUserById(@PathVariable Long id) {
    //     Optional<User> user = userService.getUserById(id);
    //     return user.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    // }

    @PostMapping
    public UserInfo createUser(@RequestBody UserInfo user) {
        return userService.saveUser(user);
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserInfo> updateUser(@PathVariable Long id, @RequestBody UserInfo user) {
        UserInfo updatedUser = userService.updateUser(id, user);
        if (updatedUser == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(updatedUser);
    }
    @CrossOrigin(origins = "*")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        boolean isRemoved = userService.deleteUser(id);
        if (!isRemoved) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.noContent().build();
    }
    @CrossOrigin(origins = "*")
     @PostMapping("/authenticate")
    public AuthResponse authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
        System.out.println(authRequest);
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
            
        if (authentication.isAuthenticated()) {
            AuthResponse authResponse = new AuthResponse();
            
            
            authResponse.setUsername(authRequest.getUsername());
            authResponse.setToken(jwtService.generateToken(authRequest.getUsername()));
            // Fetch the user by name
            Optional<UserInfo> userOptional = repository.findByName(authRequest.getUsername());
            
            if (userOptional.isPresent()) {
                // If the user exists, set the role from the user entity
                UserInfo user = userOptional.get();
                authResponse.setRoles(user.getRoles());
                authResponse.setEmail(user.getEmail());
            } else {
                // If the user does not exist, set the role to "Organizer"
                authResponse.setRoles("Organizer");
            }
            return authResponse;
        } else {
            System.out.println(authentication.isAuthenticated());
            throw new UsernameNotFoundException("invalid user request !");
        }

    }


    // @PostMapping("/authenticate")
    // public ResponseEntity<?> authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
    //     try {
    //         Authentication authentication = authenticationManager.authenticate(
    //             new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword())
    //         );
    //         if (authentication.isAuthenticated()) {
    //             String token = jwtService.generateToken(authRequest.getUsername());
    //             return ResponseEntity.ok(token);
    //         } else {
    //             return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
    //         }
    //     } catch (Exception e) {
    //         return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Authentication failed: " + e.getMessage());
    //     }
    // }
}
