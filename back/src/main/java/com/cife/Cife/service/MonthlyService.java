package com.cife.Cife.service;

import com.cife.Cife.dto.CultureDTO;
import com.cife.Cife.repository.MonthlyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class MonthlyService {
    private final MonthlyRepository monthlyRepository;

    public List<CultureDTO> getMonthlyCultureList(Map<String, Long> monthlyParam) {
        return monthlyRepository.getMonthlyCultureList(monthlyParam);
    }
}
