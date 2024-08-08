package com.speedair.model;

import java.util.List;

import jakarta.persistence.CascadeType;
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
    private Double weight;
    private String origin;
    private String destination;
    private String currentLocation;
    private String nextCheckpoint;
    private String status;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "bill_id")
    private Billing bill;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "sender_id")
    private User sender;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "receiver_id")
    private Customer receiver;
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "company_id")
    private Company company;
    @OneToMany(mappedBy = "shipment")
    private List<Vehicle> vehicles;
}
