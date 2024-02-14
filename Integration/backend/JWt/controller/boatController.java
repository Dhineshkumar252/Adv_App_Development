// package com.example.boat.controller;

// import com.example.boat.dto.jobdto;
// import com.example.boat.service.jobservice;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// import java.util.List;
// import java.util.Optional;

// @RestController
// public class jobcontroller {

//     private final jobservice jobService;

//     @Autowired
//     public jobcontroller(jobservice jobService) {
//         this.jobService = jobService;
//     }

//     @GetMapping
//     public ResponseEntity<List<jobdto>> getAllJobs() {
//         List<jobdto> jobs = jobService.getAllJobs();
//         return ResponseEntity.ok(jobs);
//     }

//     @GetMapping("/{id}")
//     public ResponseEntity<jobdto> getJobById(@PathVariable("id") Long jobId) {
//         Optional<jobdto> job = jobService.getJobById(jobId);
//         return job.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
//     }

//     @PostMapping("/post")
//     public ResponseEntity<jobdto> createJob(@RequestBody jobdto jobDto) {
//         jobdto createdJob = jobService.createJob(jobDto);
//         return new ResponseEntity<>(createdJob, HttpStatus.CREATED);
//     }

//     @PutMapping("/put/{id}")
//     public ResponseEntity<jobdto> updateJob(@PathVariable("id") Long jobId, @RequestBody jobdto updatedJobDto) {
//         jobdto updatedJob = jobService.updateJob(jobId, updatedJobDto);
//         return updatedJob != null ? ResponseEntity.ok(updatedJob) : ResponseEntity.notFound().build();
//     }

//     @DeleteMapping("/{id}")
//     public ResponseEntity<Void> deleteJob(@PathVariable("id") Long jobId) {
//         jobService.deleteJob(jobId);
//         return ResponseEntity.noContent().build();
//     }
// }
package com.example.boat.controller;

import com.example.boat.dto.boatDto;
import com.example.boat.service.boatservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class boatController {

    private final boatservice boatService;

    @Autowired
    public boatController(boatservice boatService) {
        this.boatService = boatService;
    }

    @GetMapping("/get")
    public ResponseEntity<List<boatDto>> getAllBoats() {
        List<boatDto> boats = boatService.getAllBoats();
        return ResponseEntity.ok(boats);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<boatDto> getBoatById(@PathVariable("id") Long boatId) {
        Optional<boatDto> boat = boatService.getBoatById(boatId);
        return boat.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/add")
    public ResponseEntity<boatDto> createBoat(@RequestBody boatDto boatDto) {
        boatDto createdBoat = boatService.createBoat(boatDto);
        return new ResponseEntity<>(createdBoat, HttpStatus.CREATED);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<boatDto> updateBoat(@PathVariable("id") Long boatId, @RequestBody boatDto updatedBoatDto) {
        boatDto updatedBoat = boatService.updateBoat(boatId, updatedBoatDto);
        return updatedBoat != null ? ResponseEntity.ok(updatedBoat) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteBoat(@PathVariable("id") Long boatId) {
        boatService.deleteBoat(boatId);
        return ResponseEntity.noContent().build();
    }
}
