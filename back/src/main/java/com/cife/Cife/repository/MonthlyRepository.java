package com.cife.Cife.repository;

import com.cife.Cife.dto.CultureDTO;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
@RequiredArgsConstructor
public class MonthlyRepository {
    private final SqlSessionTemplate sql;

    public List<CultureDTO> getMonthlyCultureList(Map<String, Long> monthlyParam) {
        return sql.selectList("Culture.getMonthlyCultureList", monthlyParam);
    }
}
