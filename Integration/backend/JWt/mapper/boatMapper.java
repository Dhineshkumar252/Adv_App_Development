// package com.example.boat.mapper;

// import com.example.boat.dto.jobdto;
// import com.example.boat.model.jobmodel;

// public class jobmapper {

//     public static jobdto mapToJobDto(jobmodel job) {
//         jobdto dto = new jobdto();
//         dto.setJobtitle(job.getJobtitle());
//         dto.setJobdescription(job.getJobdescription());
//         dto.setJobsalary(job.getJobsalary());
//         dto.setGender(job.getGender());
//         dto.setLocation(job.getLocation());
//         dto.setJobtype(job.getJobtype());
//         dto.setExperience(job.getExperience());
//         dto.setImageurl(job.getImageurl());
//         // Map other properties as needed
//         return dto;
//     }

//     public static jobmodel mapToJobModel(jobdto jobDto) {
//         jobmodel model = new jobmodel();
//         model.setJobtitle(jobDto.getJobtitle());
//         model.setJobdescription(jobDto.getJobdescription());
//         model.setJobsalary(jobDto.getJobsalary());
//         model.setGender(jobDto.getGender());
//         model.setLocation(jobDto.getLocation());
//         model.setJobtype(jobDto.getJobtype());
//         model.setExperience(jobDto.getExperience());
//         model.setImageurl(jobDto.getImageurl());
//         // Map other properties as needed
//         return model;
//     }

//     public static void updateJobModel(jobmodel existingJob, jobdto updatedJobDto) {
//         // Update only the fields that should be updated
//         existingJob.setJobtitle(updatedJobDto.getJobtitle());
//         existingJob.setJobdescription(updatedJobDto.getJobdescription());
//         existingJob.setJobsalary(updatedJobDto.getJobsalary());
//         existingJob.setGender(updatedJobDto.getGender());
//         existingJob.setLocation(updatedJobDto.getLocation());
//         existingJob.setJobtype(updatedJobDto.getJobtype());
//         existingJob.setExperience(updatedJobDto.getExperience());
//         existingJob.setImageurl(updatedJobDto.getImageurl());
//         // Update other properties as needed
//     }
// }
package com.example.boat.mapper;

import com.example.boat.dto.boatDto;
import com.example.boat.model.boatmodel;

public class boatMapper {

    public static boatDto mapToBoatDto(boatmodel boat) {
        boatDto dto = new boatDto();
        dto.setId(boat.getId());
        dto.setBoatName(boat.getBoatName());
        dto.setBoatDescription(boat.getBoatDescription());
        dto.setCapacity(boat.getCapacity());
        dto.setPhone(boat.getPhone());
        dto.setImageurl(boat.getImageurl());
        dto.setBoataddress(boat.getBoataddress());
        dto.setAvailableStatus(boat.isAvailableStatus());
        dto.setPrice(boat.getPrice());
        // Map other properties as needed
        return dto;
    }

    public static boatmodel mapToBoatModel(boatDto boatDto) {
        boatmodel model = new boatmodel();
        model.setBoatName(boatDto.getBoatName());
        model.setBoatDescription(boatDto.getBoatDescription());
        model.setCapacity(boatDto.getCapacity());
        model.setPhone(boatDto.getPhone());
        model.setImageurl(boatDto.getImageurl());
        model.setBoataddress(boatDto.getBoataddress());
        model.setAvailableStatus(boatDto.isAvailableStatus());
        model.setPrice(boatDto.getPrice());
        // Map other properties as needed
        return model;
    }

    public static void updateBoatModel(boatmodel existingBoat, boatDto updatedBoatDto) {
        // Update only the fields that should be updated
        existingBoat.setBoatName(updatedBoatDto.getBoatName());
        existingBoat.setBoatDescription(updatedBoatDto.getBoatDescription());
        existingBoat.setCapacity(updatedBoatDto.getCapacity());
        existingBoat.setPhone(updatedBoatDto.getPhone());
        existingBoat.setImageurl(updatedBoatDto.getImageurl());
        existingBoat.setBoataddress(updatedBoatDto.getBoataddress());
        existingBoat.setAvailableStatus(updatedBoatDto.isAvailableStatus());
        existingBoat.setPrice(updatedBoatDto.getPrice());
        // Update other properties as needed
    }
}
