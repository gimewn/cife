package com.cife.Cife.repository;

import com.cife.Cife.dto.CultureDTO;
import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
@RequiredArgsConstructor
public class CultureRepository {
    private final SqlSessionTemplate sql;

    public int postCulture(CultureDTO cultureDTO) {
        return sql.insert("Culture.postCulture", cultureDTO);
    }

    public int updateCulture(CultureDTO cultureDTO) {
        return sql.update("Culture.updateCulture", cultureDTO);
    }

    public Long getCultureWriter(Long cultureId) {
        return sql.selectOne("Culture.getCultureWriter", cultureId);
    }

    public int deleteCulture(Long cultureId) {
        return sql.delete("Culture.deleteCulture", cultureId);
    }

    public CultureDTO getCultureOne(Long cultureId) {
        return sql.selectOne("Culture.getCultureOne", cultureId);
    }

    public List<CultureDTO> getCultureList(Long userId) {
        return sql.selectList("Culture.getCultureList", userId);
    }

    public int updateReservedDate(Map<String, Object> patchParam) {
        return sql.update("Culture.updateReservedDate", patchParam);
    }

    public boolean checkIsExistCategory(Long categoryId) {
        return sql.selectOne("Culture.checkIsExistCategory", categoryId);
    }
}
