package com.cife.Cife.service;

import com.cife.Cife.dto.ReviewListItemDTO;
import com.cife.Cife.repository.ReviewRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ReviewService {
    private final ReviewRepository reviewRepository;

    public List<ReviewListItemDTO> getReviewList(Long userId) {
        return reviewRepository.getReviewList(userId);
    }
}
