package com.cife.Cife.controller;

import com.cife.Cife.dto.ReviewDTO;
import com.cife.Cife.dto.ReviewListItemDTO;
import com.cife.Cife.service.ReviewService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.SessionAttribute;

import java.util.List;

@Controller
@RequiredArgsConstructor
@RequestMapping("/review")
@Tag(name = "후기 관리 API")
public class ReviewController {
    private final ReviewService reviewService;

    @Operation(summary = "후기 목록 조회", description = "해당 유저가 작성한 후기 목록을 조회합니다.")
    @GetMapping("/all")
    public ResponseEntity<?> getReviewList(@SessionAttribute Long userId){
        List<ReviewListItemDTO> reviewList = reviewService.getReviewList(userId);
        return ResponseEntity.ok().body(reviewList);
    }
}
