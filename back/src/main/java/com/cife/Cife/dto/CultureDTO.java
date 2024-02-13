package com.cife.Cife.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.sql.Date;


@Getter
@Setter
@ToString
public class CultureDTO {
    private Long cultureId;
    private Long userId;
    private String category;
    private Long categoryId;
    private String title;
    private Date sawDate;
    private Date reservedDate;
    private Date limitDate;
    private Boolean isImportant;
    private String link;
    private String expectation;
}
