package com.boat.boat.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class BoatHouse {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String boatName;
    private String boatDescription;
    private int capacity;
    private String phone;
    private int noOfPersons;
    private String bImage;
    private double price;

    // Constructors
    public BoatHouse() {
    }

    public BoatHouse(String boatName, String boatDescription, int capacity, String phone, int noOfPersons,
            String bImage, double price) {
        this.boatName = boatName;
        this.boatDescription = boatDescription;
        this.capacity = capacity;
        this.phone = phone;
        this.noOfPersons = noOfPersons;
        this.bImage = bImage;
        this.price = price;
    }

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBoatName() {
        return boatName;
    }

    public void setBoatName(String boatName) {
        this.boatName = boatName;
    }

    public String getBoatDescription() {
        return boatDescription;
    }

    public void setBoatDescription(String boatDescription) {
        this.boatDescription = boatDescription;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public int getNoOfPersons() {
        return noOfPersons;
    }

    public void setNoOfPersons(int noOfPersons) {
        this.noOfPersons = noOfPersons;
    }

    public String getBImage() {
        return bImage;
    }

    public void setBImage(String bImage) {
        this.bImage = bImage;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}