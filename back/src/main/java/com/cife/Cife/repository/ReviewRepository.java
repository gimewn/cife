package com.cife.Cife.repository;

import com.cife.Cife.dto.ReviewDTO;
import com.cife.Cife.dto.ReviewListItemDTO;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class ReviewRepository {
    private final SqlSessionTemplate sql;

    public List<ReviewListItemDTO> getReviewList(Long userId) {
        return sql.selectList("Review.getReviewList", userId);
    }

    public Long getReviewWriter(Long reviewId) {
        return sql.selectOne("Review.getReviewWriter", reviewId);
    }

    public ReviewDTO getReview(Long reviewId) {
        return sql.selectOne("Review.getReview", reviewId);
    }

    public int postReview(ReviewDTO reviewDTO) {
        return sql.insert("Review.postReview", reviewDTO);
    }

    public int putReview(ReviewDTO reviewDTO) {
        return sql.update("Review.putReview", reviewDTO);
    }

    public int deleteReview(Long reviewId) {
        return sql.delete("Review.deleteReview", reviewId);
    }
}
