package com.speedair.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.speedair.model.Customer;
import com.speedair.repository.CustomerRepository;

@Service
public class CustomerService {
    @Autowired
    private CustomerRepository customerRepository;

    // GetAll
    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }
    // GetById
    public Customer getCustomerById(Long billId) {
        return customerRepository.findById(billId).orElse(null);
    }
    // Post
    public Customer saveCustomer(Customer customer) {
        return customerRepository.save(customer);
    }
    // Delete
    public void deleteCustomer(Long billId) {
        customerRepository.deleteById(billId);
    }
}
