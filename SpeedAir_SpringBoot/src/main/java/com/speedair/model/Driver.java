package com.speedair.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "drivers")
public class Driver {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long driverId;
    private String name;
    private String email;
    private String password;
    private String contact;
    private String address;
    private String aadharNo;
    private String drivingLicence;
    private String pickupLocation;
    private String deliveryLocation;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="vehicle_id")
    private Vehicle vehicle;
}
