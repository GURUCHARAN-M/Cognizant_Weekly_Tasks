package com.example.load_country_maven;

import org.apache.logging.log4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.support.ClassPathXmlApplicationContext;

@SpringBootApplication
public class LoadCountryMavenApplication {

	private static final Logger LOGGER = (Logger) LoggerFactory.getLogger(SpringApplication.class);

    public static void main(String[] args) {
        LOGGER.debug("START main()");
        displayCountry();
        LOGGER.debug("END main()");
    }

    public static void displayCountry() {
        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("country.xml");

        Country country = context.getBean("country", Country.class);
        LOGGER.debug("Country: {}", country.toString());
    }

}
