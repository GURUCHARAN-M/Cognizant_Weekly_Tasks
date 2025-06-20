import model.Product;
import service.SearchService;

import java.util.*;

public class Main {
    public static void main(String[] args) {
        List<Product> products = new ArrayList<>(Arrays.asList(
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "T-Shirt", "Apparel"),
                new Product(103, "Phone", "Electronics"),
                new Product(104, "Shoes", "Footwear")
        ));

        products.sort(Comparator.comparing(Product::getProductName, String.CASE_INSENSITIVE_ORDER));

        SearchService searchService = new SearchService();

        System.out.println("Linear Search:");
        Product found1 = searchService.linearSearch(products, "Phone");
        System.out.println(found1);

        System.out.println("Binary Search:");
        Product found2 = searchService.binarySearch(products, "Phone");
        System.out.println(found2);
    }
}
