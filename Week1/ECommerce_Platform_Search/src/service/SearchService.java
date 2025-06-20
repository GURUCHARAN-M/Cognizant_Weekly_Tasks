package service;

import model.Product;
import java.util.List;

public class SearchService {

    public Product linearSearch(List<Product> products, String targetName) {
        for (Product product : products) {
            if (product.getProductName().equalsIgnoreCase(targetName)) {
                return product;
            }
        }
        return null;
    }

    public Product binarySearch(List<Product> products, String targetName) {
        int low = 0;
        int high = products.size() - 1;

        while (low <= high) {
            int mid = (low + high) / 2;
            String midName = products.get(mid).getProductName();

            int comparison = midName.compareToIgnoreCase(targetName);
            if (comparison == 0) {
                return products.get(mid);
            } else if (comparison < 0) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return null;
    }
}
