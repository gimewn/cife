package com.cife.Cife.service;

import com.cife.Cife.dto.CultureDTO;
import com.cife.Cife.repository.CultureRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class CultureService {
    private final CultureRepository cultureRepository;

    public int postCulture(CultureDTO cultureDTO) {
        return cultureRepository.postCulture(cultureDTO);
    }

    public int updateCulture(CultureDTO cultureDTO) {
        return cultureRepository.updateCulture(cultureDTO);
    }

    public Long getCultureWriter(Long cultureId){
        return cultureRepository.getCultureWriter(cultureId);
    }

    public int deleteCulture(Long cultureId) {
        return cultureRepository.deleteCulture(cultureId);
    }

    public CultureDTO getCultureOne(Long cultureId) {
        return cultureRepository.getCultureOne(cultureId);
    }

    public List<CultureDTO> getCultureList(Long userId) {
        return cultureRepository.getCultureList(userId);
    }

    public int updateReservedDate(Map<String, Object> patchParam) {
        return cultureRepository.updateReservedDate(patchParam);
    }
}
