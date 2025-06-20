package service;

public class ForecastService {

    public double forecastRecursive(double currentValue, double rate, int years) {
        if (years == 0) return currentValue;
        return forecastRecursive(currentValue * (1 + rate), rate, years - 1);
    }

    public double forecastMemo(double currentValue, double rate, int years, double[] memo) {
        if (years == 0) return currentValue;
        if (memo[years] != 0) return memo[years];
        memo[years] = forecastMemo(currentValue, rate, years - 1, memo) * (1 + rate);
        return memo[years];
    }
}
