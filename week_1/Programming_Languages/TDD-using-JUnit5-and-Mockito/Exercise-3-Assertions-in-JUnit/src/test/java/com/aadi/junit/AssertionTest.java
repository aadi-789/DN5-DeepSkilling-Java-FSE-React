package com.aadi.junit;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class AssertionTest {

    @Test
    void verifyJUnitAssertions() {

        // Equality Assertion
        assertEquals(5, 2 + 3, "Sum should be equal to 5");

        // Boolean Assertions
        assertTrue(10 > 5, "Condition should be true");
        assertFalse(10 < 5, "Condition should be false");

        // Null Assertions
        String value = null;
        assertNull(value, "Object should be null");

        Object object = new Object();
        assertNotNull(object, "Object should not be null");
    }
}