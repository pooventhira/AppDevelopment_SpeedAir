package com.speedair.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.speedair.model.Employee;
import com.speedair.repository.EmployeeRepository;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    // GetAll
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }
    // GetById
    public Optional<Employee> getEmployeeById(Long employeeId) {
        return employeeRepository.findById(employeeId);
    }
    // Post
    public Employee saveEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }
    // Delete
    public void deleteEmployee(Long employeeId) {
        employeeRepository.deleteById(employeeId);
    }
}
