package com.cife.Cife.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ReviewDTO {
    private Long reviewId;
    private Long reviewer;
    private Long cultureId;
    private Integer score;
    private String contents;
}
