package com.example;

import org.junit.Test;
import static org.junit.Assert.*;

public class AssertionsTest {

    @Test
    public void testAssertions() {
        // Assert equals
        assertEquals("Sum should be 5", 5, 2 + 3);

        // Assert true
        assertTrue("5 should be greater than 3", 5 > 3);

        // Assert false
        assertFalse("5 should not be less than 3", 5 < 3);

        // Assert null
        String str = null;
        assertNull("String should be null", str);

        // Assert not null
        Object obj = new Object();
        assertNotNull("Object should not be null", obj);

        // Assert same (reference equality)
        String a = "JUnit";
        String b = a;
        assertSame("Both references should point to the same object", a, b);

        // Assert not same (reference inequality)
        assertNotSame("New String should not be same reference as literal", a, new String("JUnit"));

        // Assert array equals
        int[] expected = {1, 2, 3};
        int[] actual = {1, 2, 3};
        assertArrayEquals("Arrays should be equal", expected, actual);
    }
}
