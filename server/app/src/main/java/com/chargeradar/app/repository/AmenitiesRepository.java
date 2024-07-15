package com.chargeradar.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.chargeradar.app.entity.Amenities;

@Repository
public interface AmenitiesRepository extends JpaRepository<Amenities,Long>{
    
}
