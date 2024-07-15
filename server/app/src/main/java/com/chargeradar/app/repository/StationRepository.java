package com.chargeradar.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.chargeradar.app.entity.Station;

@Repository
public interface StationRepository extends JpaRepository<Station,Long>{
    
}
