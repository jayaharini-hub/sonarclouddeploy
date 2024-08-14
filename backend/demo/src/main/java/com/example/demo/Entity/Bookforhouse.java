package com.example.demo.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Bookforhouse {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; 

    private String firstname;
    private String lastname;
    private String email;
    private String phone;
    private String feedback;

    @ManyToOne
    @JoinColumn(name = "user_id") 
    @JsonBackReference
    private UserInfo userInfo;
}
