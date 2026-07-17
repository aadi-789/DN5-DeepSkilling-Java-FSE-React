package com.aadi.springlearn.service;

import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Service;

import com.aadi.springlearn.model.Country;
import com.aadi.springlearn.model.CountryList;

@Service
public class CountryService {

    private final ApplicationContext context;

    public CountryService(ApplicationContext context) {
        this.context = context;
    }

    public Country getCountry(String code) {

        CountryList countryList =
                context.getBean("countryList", CountryList.class);

        List<Country> countries = countryList.getCountry();

        for (Country country : countries) {

            if (country.getCode().equalsIgnoreCase(code)) {
                return country;
            }

        }

        return null;
    }

}