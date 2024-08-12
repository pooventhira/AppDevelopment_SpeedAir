package com.speedair.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.speedair.model.AuthUser;

@Repository
public interface AuthUserRepo extends JpaRepository<AuthUser, Long> {
    Optional<AuthUser> findByEmail(String email);
}
