
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

    @GetMapping("/gets/{id}")
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
