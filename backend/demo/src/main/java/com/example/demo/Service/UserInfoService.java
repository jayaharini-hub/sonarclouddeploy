package com.example.demo.Service;

import com.example.demo.Entity.UserInfo;
import com.example.demo.Repository.UserInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserInfoService {
    @Autowired
    private UserInfoRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public List<UserInfo> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<UserInfo> getUserById(Long id) {
        return userRepository.findById(id);
    }

    public Optional<UserInfo> getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public UserInfo saveUser(UserInfo user) {
       
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    // public String saveUser(UserInfo userInfo) {
    //     userInfo.setPassword(passwordEncoder.encode(userInfo.getPassword()));
    //     userRepository.save(userInfo);
    //     if (userInfo.getRoles().equals("ROLE_CLIENT")) {
    //         Client client = new Client();
    //         client.setCompanyName(userInfo.getName());
    //         client.setEmail(userInfo.getEmail());
    //         client.setPassword(userInfo.getPassword());
    //         clientRepository.save(client);
    //     } else if (userInfo.getRoles().equals("ROLE_PROVIDER")) {
    //         TransportProvider provider = new TransportProvider();
    //         provider.setLogisticsName(userInfo.getName());
    //         provider.setEmail(userInfo.getEmail());
    //         provider.setPassword(userInfo.getPassword());
    //         providerRepository.save(provider);
    //     }
        
    

    
    
    public UserInfo updateUser(Long id, UserInfo user) {
        Optional<UserInfo> existingUser = userRepository.findById(id);
        if (existingUser.isPresent()) {
            UserInfo updatedUser = existingUser.get();
            updatedUser.setName(user.getName());
            updatedUser.setEmail(user.getEmail());
            updatedUser.setRoles(user.getRoles());
            return userRepository.save(updatedUser);
        }
        return null;
    }

    public boolean deleteUser(Long id) {
        Optional<UserInfo> user = userRepository.findById(id);
        if (user.isPresent()) {
            userRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
