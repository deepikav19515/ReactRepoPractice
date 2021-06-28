package com.sonata.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sonata.Model.Prescription;
import com.sonata.repository.PrescriptionRepository;

//@CrossOrigin(origins="http://localhost:4200")
@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/form")
public class PrescriptionController {
	
	 @Autowired
	    private PrescriptionRepository pr;
	 
	 @GetMapping("/getpres")
	    public List<Prescription> getAllPrescription(){
	        return pr.findAll();
	    }
	 
	 @PostMapping("/postpres")
	    public Prescription createPrescription(@RequestBody Prescription pre) {
	        return pr.save(pre);
	    }

}
