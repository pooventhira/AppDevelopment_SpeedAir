package com.speedair.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.speedair.model.Company;
import com.speedair.repository.CompanyRepository;

@Service
public class CompanyService {

    @Autowired
    private CompanyRepository companyRepository;

    // GetAll
    public List<Company> getAllCompanies() {
        return companyRepository.findAll();
    }
    // GetById
    public Company getCompanyById(Long companyId) {
        return companyRepository.findById(companyId).orElse(null);
    }
    // Post
    public Company saveCompany(Company company) {
        return companyRepository.save(company);
    }
    // Delete
    public void deleteCompany(Long companyId) {
        companyRepository.deleteById(companyId);
    }
}
