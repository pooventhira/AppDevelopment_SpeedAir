package com.speedair.model;

import jakarta.persistence.*;
import java.util.Date;

@Entity
public class AuthToken {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String token;
    private String username;  // Or store user ID if preferred
    private Date issuedAt;
    private Date expiration;

    public AuthToken() {}

    public AuthToken(String token, String username, Date issuedAt, Date expiration) {
        this.token = token;
        this.username = username;
        this.issuedAt = issuedAt;
        this.expiration = expiration;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Date getIssuedAt() {
        return issuedAt;
    }

    public void setIssuedAt(Date issuedAt) {
        this.issuedAt = issuedAt;
    }

    public Date getExpiration() {
        return expiration;
    }

    public void setExpiration(Date expiration) {
        this.expiration = expiration;
    }
}
