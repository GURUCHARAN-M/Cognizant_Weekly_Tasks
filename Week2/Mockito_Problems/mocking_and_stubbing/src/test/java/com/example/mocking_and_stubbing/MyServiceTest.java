package com.example;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class MyServiceTest {

    @Test
    public void testExternalApi() {
        // Arrange: Mock the external API
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        // Stub: define behavior
        when(mockApi.getData()).thenReturn("Mock Data");

        // Act: Use the mock in the service
        MyService service = new MyService(mockApi);
        String result = service.fetchData();

        // Assert
        assertEquals("Mock Data", result);
    }
}
