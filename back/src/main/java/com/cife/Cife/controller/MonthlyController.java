package com.cife.Cife.controller;

import com.cife.Cife.dto.CultureDTO;
import com.cife.Cife.service.MonthlyService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttribute;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequiredArgsConstructor
@RequestMapping("/monthly")
@Tag(name = "월간 문화생활 API")
public class MonthlyController {
    private final MonthlyService monthlyService;

    @GetMapping
    @Operation(summary = "월별 문화생활 조회", description = "연과 월로 월별 문화생활 목록을 조회합니다.")
    public ResponseEntity<?> getMonthlyCultureList(@RequestParam Long year, @RequestParam Long month, @SessionAttribute Long userId){
        Map<String, Long> monthlyParam = new HashMap<>();

        monthlyParam.put("userId", userId);
        monthlyParam.put("year", year);
        monthlyParam.put("month", month);

        List<CultureDTO> cultureDTOList = monthlyService.getMonthlyCultureList(monthlyParam);

        if(cultureDTOList != null){
            return ResponseEntity.ok().body(cultureDTOList);
        }else{
            return ResponseEntity.ok().body("해당하는 문화생활이 존재하지 않습니다.");
        }
    }
}
