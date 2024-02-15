package com.cife.Cife.service;

import com.cife.Cife.dto.ReviewDTO;
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

    public Long getReviewWriter(Long reviewId) {
        return reviewRepository.getReviewWriter(reviewId);
    }

    public ReviewDTO getReview(Long reviewId) {
        return reviewRepository.getReview(reviewId);
    }

    public int postReview(ReviewDTO reviewDTO) {
        return reviewRepository.postReview(reviewDTO);
    }

    public int putReview(ReviewDTO reviewDTO) {
        return reviewRepository.putReview(reviewDTO);
    }

    public int deleteReview(Long reviewId) {
        return reviewRepository.deleteReview(reviewId);
    }
}
