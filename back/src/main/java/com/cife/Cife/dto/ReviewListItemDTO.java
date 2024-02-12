package com.cife.Cife.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.sql.Date;

@Getter
@Setter
@ToString
public class ReviewListItemDTO {
    private Long reviewId;
    private Long cultureId;
    private String category;
    private Boolean isImportant;
    private String title;
    private Date sawDate;
}
