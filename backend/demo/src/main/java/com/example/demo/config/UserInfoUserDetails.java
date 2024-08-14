package com.example.demo.config;


// import org.springframework.security.core.GrantedAuthority;
// import org.springframework.security.core.authority.SimpleGrantedAuthority;
// import org.springframework.security.core.userdetails.UserDetails;

// import com.example.demo.Entity.UserInfo;

// import java.util.Arrays;
// import java.util.Collection;
// import java.util.List;
// import java.util.stream.Collectors;

// public class UserInfoUserDetails implements UserDetails {

//     private String name;
//     private String password;
//     private List<GrantedAuthority> authorities;

//     public UserInfoUserDetails(UserInfo userInfo) {
//         name = userInfo.getName();
//         password = userInfo.getPassword();
//         authorities = Arrays.stream(userInfo.getRoles().split(","))
//                 .map(SimpleGrantedAuthority::new)
//                 .collect(Collectors.toList());
//     }

//     @Override
//     public Collection<? extends GrantedAuthority> getAuthorities() {
//         return authorities;
//     }

//     @Override
//     public String getPassword() {
//         return password;
//     }

//     @Override
//     public String getUsername() {
//         return name;
//     }

//     @Override
//     public boolean isAccountNonExpired() {
//         return true;
//     }

//     @Override
//     public boolean isAccountNonLocked() {
//         return true;
//     }

//     @Override
//     public boolean isCredentialsNonExpired() {
//         return true;
//     }

//     @Override
//     public boolean isEnabled() {
//         return true;
//     }
// }
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.example.demo.Entity.UserInfo;

import java.util.Arrays;
import java.util.Collection;
import java.util.stream.Collectors;

public class UserInfoUserDetails implements UserDetails {

    private final UserInfo user;

    public UserInfoUserDetails(UserInfo user) {
        this.user = user;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Arrays.stream(user.getRoles().split(","))
                .map(role -> new SimpleGrantedAuthority("ROLE_" + role.trim().toUpperCase()))
                .collect(Collectors.toList());
    }

    @Override
    public String getPassword() {
        return user.getPassword();
    }

    @Override
    public String getUsername() {
        return user.getEmail();
    }

    // @Override
    // public String getEmail(){
    //     return user.getEmail();
    // }

    // @Override
    // public String getRoles(){
    //     return user.getRoles();
    // }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
