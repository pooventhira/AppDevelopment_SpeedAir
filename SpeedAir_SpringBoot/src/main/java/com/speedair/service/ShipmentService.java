package com.speedair.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.speedair.model.Billing;
import com.speedair.model.Company;
import com.speedair.model.Shipment;
import com.speedair.model.User;
import com.speedair.repository.CompanyRepository;
import com.speedair.repository.ShipmentRepository;
import com.speedair.repository.UserRepository;

@Service
public class ShipmentService {

    
    @Autowired
    private ShipmentRepository shipmentRepository;
    @Autowired
    private CompanyRepository companyRepository;
    @Autowired
    private UserRepository userRepository;
    
    // GetAll
    public List<Shipment> getAllShipments() {
        return shipmentRepository.findAll();
    }
    // GetById
    public Shipment getShipmentById(Long shipmentId) {
        return shipmentRepository.findById(shipmentId).orElse(null);
    }
    // Post
    public Shipment saveShipment(Shipment shipment) {
        Billing bill = new Billing();
        shipment.setBill(bill);
        shipment.setSender(shipmentSenderMapper(shipment.getUserEmail()));
        shipment.setCompany(shipmentCompanyMapper(shipment.getSender().getCompanyName()));
        Shipment newShipment = shipmentRepository.save(shipment);
        companyShipmentAdder(shipment.getCompany(), newShipment);
        return newShipment;
    }
    // Delete
    public void deleteShipment(Long shipmentId) {
        shipmentRepository.deleteById(shipmentId);
    }
    
    // ShipmentUserMapping Function
    private User shipmentSenderMapper(String email) {
        return userRepository.findByEmail(email);
    }
    // ShipmentCompanyMapping Function
    private Company shipmentCompanyMapper(String companyName) {
        return companyRepository.findByName(companyName);
    }
    // CompanyShipmentAdder Function
    private void companyShipmentAdder (Company company, Shipment shipment) {
        List<Shipment> shipments = company.getShipments();
        shipments.add(shipment);
        companyRepository.save(company);
        return;
    }
}
