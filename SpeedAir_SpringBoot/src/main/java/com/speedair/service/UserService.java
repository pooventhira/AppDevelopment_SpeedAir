package com.speedair.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.speedair.model.User;
import com.speedair.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // GetAll
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    // GetById
    public Optional<User> getUserById(Long userId) {
        return userRepository.findById(userId);
    }
    // Post
    public User saveUser(User user) {
        return userRepository.save(user);
    }
    // Delete
    public void deleteUser(Long userId) {
        userRepository.deleteById(userId);
    }
}
