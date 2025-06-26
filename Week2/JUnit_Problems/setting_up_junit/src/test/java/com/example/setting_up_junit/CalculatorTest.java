package com.example;

import org.junit.Before;
import org.junit.After;
import org.junit.Test;

import static org.junit.Assert.*;

public class CalculatorTest {

    private Calculator calculator;

    // Setup method (runs before each test)
    @Before
    public void setUp() {
        System.out.println("Setting up...");
        calculator = new Calculator();
    }

    // Teardown method (runs after each test)
    @After
    public void tearDown() {
        System.out.println("Cleaning up...");
        calculator = null;
    }

    @Test
    public void testAddition() {
        // Arrange
        int a = 2;
        int b = 3;

        // Act
        int result = calculator.add(a, b);

        // Assert
        assertEquals("2 + 3 should equal 5", 5, result);
    }

    @Test
    public void testSubtraction() {
        // Arrange
        int a = 5;
        int b = 3;

        // Act
        int result = calculator.subtract(a, b);

        // Assert
        assertEquals("5 - 3 should equal 2", 2, result);
    }
}
