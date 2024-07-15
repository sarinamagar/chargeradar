package com.chargeradar.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.chargeradar.app.entity.Images;

@Repository
public interface ImageRepository extends JpaRepository<Images,Long>{
    
}
