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
public class Customer {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long customerId;
  @Column(nullable = false)
  private String name;
  @Column(nullable = false)
  private String email;
  @Column(nullable = false)
  private String address;
  @Column(nullable = false)
  private String contact;
  @Column(nullable = false)
  private String location;
}
