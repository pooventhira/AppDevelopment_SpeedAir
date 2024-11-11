package com.speedair.util;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.util.Date;

@Component
public class JwtUtil {

    // Hardcoded secret key and expiration time
    private static final String SECRET_KEY = "mySuperSecretKey12345678901234567890";  // Minimum 32 characters for HS256
    public static final long EXPIRATION_TIME = 10 * 60 * 1000;  // 10 minutes in milliseconds

    private final SecretKey secretKey = Keys.hmacShaKeyFor(SECRET_KEY.getBytes());

    // Generate a token for a given username
    public String generateToken(String username) {
        return Jwts.builder()
            .setSubject(username)
            .setIssuedAt(new Date())
            .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
            .signWith(secretKey, SignatureAlgorithm.HS256)  // Use SecretKey directly
            .compact();
    }

    // Extract the username from the token
    public String extractUsername(String token) {
        return getClaims(token).getSubject();
    }

    // Check if the token is valid
    public boolean isTokenValid(String token, String username) {
        String tokenUsername = extractUsername(token);
        return (tokenUsername.equals(username) && !isTokenExpired(token));
    }

    // Check if the token is expired
    private boolean isTokenExpired(String token) {
        return getClaims(token).getExpiration().before(new Date());
    }

    // Extract all claims from the token
    private Claims getClaims(String token) {
        return Jwts.parserBuilder()
            .setSigningKey(secretKey)  // Use SecretKey directly
            .build()
            .parseClaimsJws(token)
            .getBody();
    }
}
