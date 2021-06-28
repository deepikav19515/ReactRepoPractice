package com.sonata.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sonata.Model.DoctorLog;
import com.sonata.repository.DoctorLogRepository;

//@CrossOrigin(origins="http://localhost:4200")
@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/form")
public class DoctorLogController {
	
	@Autowired
    private DoctorLogRepository dl;
	
	@GetMapping("/getDoctorLog")
    public List<DoctorLog> getAllDoctorLog(){
        return dl.findAll();
    }

}
