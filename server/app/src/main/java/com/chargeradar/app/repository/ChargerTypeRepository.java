package com.chargeradar.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.chargeradar.app.entity.ChargerType;

@Repository
public interface ChargerTypeRepository extends JpaRepository<ChargerType,Long>{
    
}
