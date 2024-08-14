package com.speedair.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "shipments")
public class Shipment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long shipmentId;
    @Column(nullable = false)
    private Double weight;
    @Column(nullable = false)
    private String origin;
    @Column(nullable = false)
    private String destination;
    private String currentLocation;
    private String nextCheckpoint;
    private String status;
    @Column(nullable = false)
    private String userEmail;
    @Column(nullable = false)
    private String vehicleNo;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "bill_id")
    private Billing bill;
    @OneToOne
    @JoinColumn(name = "sender_id")
    private User sender;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "receiver_id")
    private Customer receiver;
    @ManyToOne
    @JoinColumn(name = "company_id", unique = false)
    @JsonBackReference
    private Company company;
    @OneToMany(mappedBy = "shipment")
    @JsonManagedReference
    private List<Vehicle> vehicles;
}
