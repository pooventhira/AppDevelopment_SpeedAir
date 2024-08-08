package com.speedair.model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "billings")
public class Billing {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long billId;
  private String gstNo;
  private String fromAddress;
  private String toAddress;
  private Date bookedDate;
  private Date deliveredDate;
  private String packageDetails;
  private Double transportCharges;
  private Double tax;
  private Double totalCharges;
}
