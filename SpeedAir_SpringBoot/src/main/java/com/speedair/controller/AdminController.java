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

import com.speedair.model.Admin;
import com.speedair.service.AdminService;

@RestController
@RequestMapping("/api/admins")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @GetMapping
    public List<Admin> getAlladmins() {
        return adminService.getAllAdmins();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Admin> getadminById(@PathVariable Long id) {
        Admin admin = adminService.getAdminById(id);
        if (admin != null) {
            return ResponseEntity.ok(admin);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public Admin createadmin(@RequestBody Admin admin) {
        return adminService.saveAdmin(admin);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Admin> updateadmin(@PathVariable Long id, @RequestBody Admin adminDetails) {
        Admin admin = adminService.getAdminById(id);
        if (admin != null) {
            admin.setName(adminDetails.getName());
            admin.setEmail(adminDetails.getEmail());
            admin.setPassword(adminDetails.getPassword());
            admin.setContact(adminDetails.getContact());
            admin.setRole(adminDetails.getRole());
            return ResponseEntity.ok(adminService.saveAdmin(admin));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteadmin(@PathVariable Long id) {
        if (adminService.getAdminById(id) != null) {
            adminService.deleteAdmin(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
