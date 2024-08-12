package com.speedair;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.speedair.repository.CompanyRepository;
import com.speedair.repository.DriverRepository;
import com.speedair.repository.UserRepository;
import com.speedair.repository.VehicleRepository;

@SpringBootApplication
public class SpeedairApplication {

	@Autowired
	private UserRepository userRepository;
	@Autowired
	private CompanyRepository companyRepository;
	@Autowired
	private DriverRepository driverRepository;
	@Autowired
	private VehicleRepository vehicleRepository;

	// 

	// @Autowired
	// private CompanyRepository companyRepository;
	// @PostConstruct
	// public void initCompany() {
	// 	List<Company> companies = Stream.of(
	// 		new Company(null, "company1", "company1@gmail.com", "a", "1234567890", new ArrayList<>()),
	// 		new Company(null, "company2", "company2@gmail.com", "a", "1234567890", new ArrayList<>())
	// 		).collect(Collectors.toList());
	// 	companyRepository.saveAll(companies);
	// }

	// @Autowired
	// private DriverRepository driverRepository;
	// @Autowired
	// private VehicleRepository vehicleRepository;
	// @PostConstruct
	// public void initVehicle() {

	// 	List<User> driverUsers = Stream.of(
	// 		new User(null, "driver1", "driver1@gmail.com", "1234", "1234567890", "a", "driver", "speedair", "a"),
	// 		new User(null, "driver2", "driver2@gmail.com", "1234", "1234567890", "a", "driver", "speedair", "a")
	// 	).collect(Collectors.toList());
	// 	userRepository.saveAll(driverUsers);
		
	// 	List<Driver> drivers = Stream.of(
	// 		new Driver(null, "123409874567", "q234re456y", "a", null),
	// 		new Driver(null, "123409874567", "q234re456y", "a", null)
	// 	).collect(Collectors.toList());
	// 	driverRepository.saveAll(drivers);
		
	// 	List<Vehicle> vehicles = Stream.of(
	// 		new Vehicle(null, "veh101", "truck", "a", "null", null, null, null, null, null),
	// 		new Vehicle(null, "veh102", "bike", "a", "null", null, null, null, null, null)
	// 	).collect(Collectors.toList());
	// 	vehicleRepository.saveAll(vehicles);
	// }
	
	
	public static void main(String[] args) {
		SpringApplication.run(SpeedairApplication.class, args);
	}

}
