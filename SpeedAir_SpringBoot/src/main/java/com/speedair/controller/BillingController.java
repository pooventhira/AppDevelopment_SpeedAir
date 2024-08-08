package com.speedair.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.speedair.model.Billing;
import com.speedair.service.BillingService;

@RestController
@RequestMapping("/api/billings")
public class BillingController {

    @Autowired
    private BillingService billingService;

    @GetMapping
    public List<Billing> getAllBillings() {
        return billingService.getAllBillings();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Billing> getBillingById(@PathVariable Long id) {
        Billing billing = billingService.getBillingById(id);
        if (billing != null) {
            return ResponseEntity.ok(billing);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public Billing createBilling(@RequestBody Billing billing) {
        return billingService.saveBilling(billing);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Billing> updateBilling(@PathVariable Long id, @RequestBody Billing billingDetails) {
        Billing billing = billingService.getBillingById(id);
        if (billing != null) {
            billing.setFromAddress(billingDetails.getFromAddress());
            billing.setToAddress(billingDetails.getToAddress());
            billing.setGstNo(billingDetails.getGstNo());
            billing.setBookedDate(billingDetails.getBookedDate());
            billing.setDeliveredDate(billingDetails.getDeliveredDate());
            billing.setPackageDetails(billingDetails.getPackageDetails());
            billing.setTransportCharges(billingDetails.getTransportCharges());
            billing.setTax(billingDetails.getTax());
            billing.setTotalCharges(billingDetails.getTotalCharges());
            return ResponseEntity.ok(billingService.saveBilling(billing));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBilling(@PathVariable Long id) {
        if (billingService.getBillingById(id) != null) {
            billingService.deleteBilling(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
