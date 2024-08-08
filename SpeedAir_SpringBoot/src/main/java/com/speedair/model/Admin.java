package com.speedair.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Admin {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long adminId;
  @Column(nullable = false)
  private String name;
  @Column(nullable = false)
  private String email;
  @Column(nullable = false)
  private String password;
  @Column(nullable = false)
  private String contact;
  @Column(nullable = false)
  private String role;
}
