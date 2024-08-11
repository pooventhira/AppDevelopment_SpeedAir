package com.speedair.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.speedair.model.Billing;
import com.speedair.repository.BillingRepository;

@Service
public class BillingService {

    @Autowired
    private BillingRepository billingRepository;

    // GetAll
    public List<Billing> getAllBillings() {
        return billingRepository.findAll();
    }
    // GetById
    public Billing getBillingById(Long billId) {
        return billingRepository.findById(billId).orElse(null);
    }
    // Post
    public Billing saveBilling(Billing billing) {
        return billingRepository.save(billing);
    }
    // Delete
    public void deleteBilling(Long billId) {
        billingRepository.deleteById(billId);
    }
}
