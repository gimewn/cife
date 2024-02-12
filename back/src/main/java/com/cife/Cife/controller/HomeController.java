package com.cife.Cife.controller;

import com.cife.Cife.dto.HomeDTO;
import com.cife.Cife.service.HomeService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.SessionAttribute;

import java.util.List;
import java.util.HashMap;
import java.util.Map;

@Controller
@RequiredArgsConstructor
@RequestMapping("/")
@Tag(name = "홈페이지 관련 API")
public class HomeController {
    private final HomeService homeService;

    @GetMapping("/reservation")
    @Operation(summary = "예매 대기 목록 조회", description = "홈페이지에 표시할 예매 대기 목록을 조회합니다.")
    public ResponseEntity<?> getReservationList(@SessionAttribute Long userId) {
        List<HomeDTO> homeDTOList = homeService.getReservationList(userId);
        Map<String, Object> response = new HashMap<>();
        response.put("result", homeDTOList);
        return ResponseEntity.ok().body(response);
    }

    @GetMapping("/seeList")
    @Operation(summary = "관람 대기 목록 조회", description = "홈페이지에 표시할 관람 대기 목록을 조회합니다.")
    public ResponseEntity<?> getSeeList(@SessionAttribute Long userId) {
        List<HomeDTO> homeDTOList = homeService.getSeeList(userId);
        Map<String, Object> response = new HashMap<>();
        response.put("result", homeDTOList);
        return ResponseEntity.ok().body(response);
    }

    @GetMapping("/notReviewedList")
    @Operation(summary = "후기 대기 목록 조회", description = "홈페이지에 표시할 후기 대기 목록을 조회합니다.")
    public ResponseEntity<?> getNotReviewedList(@SessionAttribute Long userId) {
        List<HomeDTO> homeDTOList = homeService.getNotReviewedList(userId);
        Map<String, Object> response = new HashMap<>();
        response.put("result", homeDTOList);
        return ResponseEntity.ok().body(response);
    }
}
