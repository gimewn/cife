package com.cife.Cife.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.sql.Date;

@Getter
@Setter
@ToString
public class HomeDTO {
    private Long cultureId;
    private Long dDay;
    private String category;
    private String title;
    private Boolean isImportant;
    private Date sawDate;
    private Date reservedDate;
    private String link;
}
