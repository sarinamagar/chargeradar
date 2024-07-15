package com.chargeradar.app.exception.handle;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.chargeradar.app.dto.Global.GlobalResponse;
import com.chargeradar.app.exception.GlobalException;

@RestControllerAdvice
public class GlobalExceptionHandler {
    
    @ExceptionHandler(GlobalException.class)
    public ResponseEntity<GlobalResponse<String>> apiException(GlobalException exception){
        GlobalResponse<String> response = new GlobalResponse<>(exception.getStatus(), exception.getMessage());
        return(ResponseEntity.status(response.getStatus()).body(response));

    }
}
