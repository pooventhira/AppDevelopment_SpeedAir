package com.speedair.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.speedair.model.Company;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {
  Company findByName(String name);
}
