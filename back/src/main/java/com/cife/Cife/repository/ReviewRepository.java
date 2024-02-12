package com.cife.Cife.repository;

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
}
