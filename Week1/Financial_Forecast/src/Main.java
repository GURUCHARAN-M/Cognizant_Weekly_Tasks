import service.ForecastService;

public class Main {
    public static void main(String[] args) {
        ForecastService forecastService = new ForecastService();

        double initialAmount = 1000;
        double rate = 0.1; 
        int years = 5;

        double futureValue = forecastService.forecastRecursive(initialAmount, rate, years);
        System.out.println("Future Value (Recursive): " + futureValue);

        double[] memo = new double[years + 1];
        double futureValueMemo = forecastService.forecastMemo(initialAmount, rate, years, memo);
        System.out.println("Future Value (Memoized): " + futureValueMemo);
    }
}
