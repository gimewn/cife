package com.cife.Cife.controller;

import com.cife.Cife.dto.ReviewDTO;
import com.cife.Cife.dto.ReviewListItemDTO;
import com.cife.Cife.service.ReviewService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.HashMap;

@Controller
@RequiredArgsConstructor
@RequestMapping("/review")
@Tag(name = "후기 관리 API")
public class ReviewController {
    private final ReviewService reviewService;

    public Boolean checkReviewAuth(Long ReviewId, Long userId){
        Long ReviewWriter = reviewService.getReviewWriter(ReviewId);

        if(ReviewWriter != userId){
            return false;
        }else{
            return true;
        }
    }

    @GetMapping("/all")
    @Operation(summary = "후기 목록 조회", description = "해당 유저가 작성한 후기 목록을 조회합니다.")
    public ResponseEntity<?> getReviewList(@SessionAttribute Long userId){
        List<ReviewListItemDTO> reviewList = reviewService.getReviewList(userId);
        Map<String, Object> response = new HashMap<>();
        response.put("result", reviewList);
        return ResponseEntity.ok().body(response);
    }

    @GetMapping
    @Operation(summary = "특정 후기 조회", description = "특정 후기의 내용을 조회합니다.")
    public ResponseEntity<?> getReview(@SessionAttribute Long userId, @RequestParam Long reviewId){

        Map<String, Object> response = new HashMap<>();

        if(!checkReviewAuth(reviewId, userId)){
            response.put("result", "해당 유저가 작성한 리뷰가 아닙니다.");
            return ResponseEntity.status(403).body(response);
        }

        ReviewDTO review = reviewService.getReview(reviewId);

        response.put("result", review);

        return ResponseEntity.ok().body(response);
    }

    @PostMapping
    @Operation(summary = "후기 등록", description = "후기를 등록합니다.")
    public ResponseEntity<?> postReview(@SessionAttribute Long userId, @RequestBody ReviewDTO reviewDTO){
        reviewDTO.setReviewer(userId);
        int postResult = reviewService.postReview(reviewDTO);

        Map<String, String> response = new HashMap<>();

        if(postResult >= 1){
            response.put("result", "success");
            return ResponseEntity.ok().body(response);
        }else{
            response.put("result", "fail");
            return ResponseEntity.badRequest().body(response);
        }
    }

    @PutMapping
    @Operation(summary = "후기 수정", description = "후기를 수정합니다.")
    public ResponseEntity<?> putReview(@SessionAttribute Long userId, @RequestParam Long reviewId, @RequestBody ReviewDTO reviewDTO){

        Map<String, String> response = new HashMap<>();

        if(!checkReviewAuth(reviewId, userId)){
            response.put("result", "해당 유저가 작성한 리뷰가 아닙니다.");
            return ResponseEntity.status(403).body(response);
        }

        int putResult = reviewService.putReview(reviewDTO);

        if(putResult >= 1){
            response.put("result", "success");
            return ResponseEntity.ok().body(response);
        }else{
            response.put("result", "fail");
            return ResponseEntity.badRequest().body(response);
        }
    }

    @DeleteMapping
    @Operation(summary = "후기 삭제", description = "후기를 삭제합니다.")
    public ResponseEntity<?> deleteReview(@SessionAttribute Long userId, @RequestParam Long reviewId){

        Map<String, String> response = new HashMap<>();

        if(!checkReviewAuth(reviewId, userId)){
            response.put("result", "해당 유저가 작성한 리뷰가 아닙니다.");
            return ResponseEntity.status(403).body(response);
        }

        int deleteResult = reviewService.deleteReview(reviewId);

        if(deleteResult >= 1){
            response.put("result", "success");
            return ResponseEntity.ok().body(response);
        }else{
            response.put("result", "fail");
            return ResponseEntity.badRequest().body(response);
        }
    }

}