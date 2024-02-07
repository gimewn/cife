package com.cife.Cife.service;

import com.cife.Cife.dto.CultureDTO;
import com.cife.Cife.repository.CultureRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

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
}
