public class LinearSearch {

    public static Product search(Product[] items, int targetId) {

        for (Product pro : items) {

            if (pro.productId == targetId) {
                return pro;
            }

        }

        return null;
    }
}