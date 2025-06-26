package com.example;

public class MyService {

    private final ExternalApi api;

    public MyService(ExternalApi api) {
        this.api = api;
    }

    public void fetchData() {
        // Calls external API
        api.getData();
    }
}
