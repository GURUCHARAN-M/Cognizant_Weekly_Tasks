package com.example;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggingExample {

    // Create logger
    private static final Logger logger = LoggerFactory.getLogger(LoggingExample.class);

    public static void main(String[] args) {
        logger.info("Application started.");

        try {
            simulateProcess();
        } catch (Exception e) {
            logger.error("An error occurred: {}", e.getMessage());
        }

        logger.warn("This is a warning message");
        logger.info("Application ended.");
    }

    private static void simulateProcess() throws Exception {
        logger.info("Simulating some process...");
        throw new Exception("Something went wrong during processing!");
    }
}
