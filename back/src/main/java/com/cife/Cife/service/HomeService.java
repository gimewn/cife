package com.cife.Cife.service;

import com.cife.Cife.dto.HomeDTO;
import com.cife.Cife.repository.HomeRepository;
import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class HomeService {
    private final HomeRepository homeRepository;

    public List<HomeDTO> getReservationList(Long userId) {
        return homeRepository.getReservationList(userId);
    }

    public List<HomeDTO> getSeeList(Long userId) {
         return homeRepository.getSeeList(userId);
    }

    public List<HomeDTO> getNotReviewedList(Long userId) {
        return homeRepository.getNotReviewedList(userId);
    }
}
