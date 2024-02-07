package com.cife.Cife.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.sql.Date;

@Getter
@Setter
@ToString
public class MonthlyDTO {
    private Long cultureId;
    private String title;
    private String category;
    private Boolean isImportant;
    private Integer score;
    private Date reservedDate;
    private Date sawDate;
    private Long reviewId;
}
