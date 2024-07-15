package com.chargeradar.app.dto.Global;

import java.time.LocalDateTime;
import java.util.Date;

import jakarta.annotation.Nonnull;
import lombok.Data;

@Data
public class GlobalResponse<T> {
    
    @Nonnull
    private int status;

    @Nonnull
    private T detail;

    @Nonnull
    private LocalDateTime timestamp = LocalDateTime.now();
}
