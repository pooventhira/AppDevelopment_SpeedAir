package com.speedair.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.speedair.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
  Employee findByEmail(String email);
  Employee findByName(String name);
}
