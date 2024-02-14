// package com.example.boat.service;

// import com.example.boat.dto.jobdto;
// import com.example.boat.mapper.jobmapper;
// import com.example.boat.model.jobmodel;
// import com.example.boat.repository.jobrepo;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import java.util.List;
// import java.util.Optional;
// import java.util.stream.Collectors;

// @Service
// public class jobservice {

//     private final jobrepo jobRepo;

//     @Autowired
//     public jobservice(jobrepo jobRepo) {
//         this.jobRepo = jobRepo;
//     }

//     public List<jobdto> getAllJobs() {
//         List<jobmodel> jobs = jobRepo.findAll();
//         return jobs.stream().map(jobmapper::mapToJobDto).collect(Collectors.toList());
//     }

//     public Optional<jobdto> getJobById(Long jobId) {
//         Optional<jobmodel> job = jobRepo.findById(jobId);
//         return job.map(jobmapper::mapToJobDto);
//     }

//     public jobdto createJob(jobdto jobDto) {
//         jobmodel jobModel = jobmapper.mapToJobModel(jobDto);
//         jobModel = jobRepo.save(jobModel);
//         return jobmapper.mapToJobDto(jobModel);
//     }

//     public jobdto updateJob(Long jobId, jobdto updatedJobDto) {
//         Optional<jobmodel> existingJobOptional = jobRepo.findById(jobId);

//         if (existingJobOptional.isPresent()) {
//             jobmodel existingJob = existingJobOptional.get();

//             // Map updatedJobDto to existingJob, updating only the fields that should be updated
//             jobmapper.updateJobModel(existingJob, updatedJobDto);

//             existingJob = jobRepo.save(existingJob);
//             return jobmapper.mapToJobDto(existingJob);
//         }

//         return null;
//     }

//     public void deleteJob(Long jobId) {
//         jobRepo.deleteById(jobId);
//     }
// }
package com.example.boat.service;

import com.example.boat.dto.boatDto;
import com.example.boat.mapper.boatMapper;
import com.example.boat.model.boatmodel;
import com.example.boat.repository.boatRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class boatservice {

    private final boatRepo boatRepo;

    @Autowired
    public boatservice(boatRepo boatRepo) {
        this.boatRepo = boatRepo;
    }

    public List<boatDto> getAllBoats() {
        List<boatmodel> boats = boatRepo.findAll();
        return boats.stream().map(boatMapper::mapToBoatDto).collect(Collectors.toList());
    }

    public Optional<boatDto> getBoatById(Long boatId) {
        Optional<boatmodel> boat = boatRepo.findById(boatId);
        return boat.map(boatMapper::mapToBoatDto);
    }

    public boatDto createBoat(boatDto boatDto) {
        boatmodel boatModel = boatMapper.mapToBoatModel(boatDto);
        boatModel = boatRepo.save(boatModel);
        return boatMapper.mapToBoatDto(boatModel);
    }

    public boatDto updateBoat(Long boatId, boatDto updatedBoatDto) {
        Optional<boatmodel> existingBoatOptional = boatRepo.findById(boatId);

        if (existingBoatOptional.isPresent()) {
            boatmodel existingBoat = existingBoatOptional.get();

            // Map updatedBoatDto to existingBoat, updating only the fields that should be updated
            boatMapper.updateBoatModel(existingBoat, updatedBoatDto);

            existingBoat = boatRepo.save(existingBoat);
            return boatMapper.mapToBoatDto(existingBoat);
        }

        return null;
    }

    public void deleteBoat(Long boatId) {
        boatRepo.deleteById(boatId);
    }
}
