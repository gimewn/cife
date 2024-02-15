package com.cife.Cife.repository;

import com.cife.Cife.dto.HomeDTO;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class HomeRepository {
    private final SqlSessionTemplate sql;

    public List<HomeDTO> getReservationList(Long userId) {
        return sql.selectList("Culture.getReservationList", userId);
    }

    public List<HomeDTO> getSeeList(Long userId) {
        return sql.selectList("Culture.getSeeList", userId);
    }

    public List<HomeDTO> getNotReviewedList(Long userId) {
        return sql.selectList("Culture.getNotReviewedList", userId);
    }
}
