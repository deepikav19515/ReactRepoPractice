package com.sonata.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sonata.Exception.ResourceNotFoundException;
import com.sonata.Model.Registration;
import com.sonata.repository.RegistrationRepository;

//@CrossOrigin(origins="http://localhost:4200")
@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/form")
public class RegistrationController {
	
	@Autowired
	private RegistrationRepository rs;
	
	@GetMapping("/get")
	public List<Registration> getAllRegistration(){
		return rs.findAll();
	}
	
	@GetMapping("/get/{id}")
    public ResponseEntity<Registration> getRegistrationById(@PathVariable(value = "id") Long Id) throws ResourceNotFoundException{
        Registration registration = rs.findById(Id)
        		.orElseThrow(() -> new ResourceNotFoundException("Registration not found for this id :: " + Id));;
        return ResponseEntity.ok().body(registration);    }
	
	@PostMapping("/post")
	public Registration createRegistration(@RequestBody Registration reg) {
		return rs.save(reg);
	}
	
	@PutMapping("/put/{id}")
    public ResponseEntity<Registration> updateRegistration(@PathVariable(value = "id") Long Id,
             @RequestBody Registration registrationDetails) throws ResourceNotFoundException{
         Registration registration = rs.findById(Id)
                 .orElseThrow(() -> new ResourceNotFoundException("Registration not found for this id :: " + Id));

 

            registration.setName(registrationDetails.getName());
//            registration.setContact(registrationDetails.getContact());
//            registration.setLocation(registrationDetails.getLocation());
//            registration.setUsername(registrationDetails.getUsername());
//            registration.setPassword(registrationDetails.getPassword());
//            registration.setConfirmpassword(registrationDetails.getConfirmpassword());
            registration.setDname(registrationDetails.getDname());
            registration.setDid(registrationDetails.getDid());
            registration.setAdate(registrationDetails.getAdate());
            registration.setHhistory(registrationDetails.getHhistory());
            registration.setChistory(registrationDetails.getChistory());
            final Registration updatedRegistration = rs.save(registration);
            return ResponseEntity.ok(updatedRegistration);
        }
	

@DeleteMapping("/post/{id}")
public Map<String, Boolean> deleteRegistration(@PathVariable(value = "id") Long Id)
        throws ResourceNotFoundException {
   Registration registration =rs.findById(Id)
           .orElseThrow(() -> new ResourceNotFoundException("Registration not found for this id :: " + Id));



    rs.delete(registration);
    Map<String, Boolean> response = new HashMap<>();
    response.put("deleted", Boolean.TRUE);
    return response;
}




}
