package com.speedair.controller;

import com.speedair.dto.LoginRequest;
import com.speedair.model.AuthToken;
import com.speedair.repository.AuthTokenRepository;
import com.speedair.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private AuthTokenRepository authTokenRepository;

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest loginRequest) {
        try {
            // Authenticate user
            authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword())
            );

            // Generate JWT token
            String token = jwtUtil.generateToken(loginRequest.getUsername());

            // Save token details to database
            Date issuedAt = new Date();
            Date expiration = new Date(issuedAt.getTime() + JwtUtil.EXPIRATION_TIME);
            AuthToken authToken = new AuthToken(token, loginRequest.getUsername(), issuedAt, expiration);
            authTokenRepository.save(authToken);

            return token;
        } catch (AuthenticationException e) {
            throw new RuntimeException("Invalid username or password", e);
        }
    }
}
