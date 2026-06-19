public class Main {

    public static void main(String[] args) {

        Product[] items = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Mouse", "Electronics"),
            new Product(103, "Shoes", "Fashion"),
            new Product(104, "Watch", "Accessories"),
            new Product(105, "Phone", "Electronics")
        };

        int tar = 104;

        System.out.println("Searching for Product ID: " + tar);

        Product linearResult = LinearSearch.search(items, tar);

        System.out.println("\nLinear Search Result:");
        if (linearResult != null) {
            System.out.println(linearResult);
        } else {
            System.out.println("Product not found");
        }

        Product binaryResult = BinarySearch.search(items, tar);

        System.out.println("\nBinary Search Result:");
        if (binaryResult != null) {
            System.out.println(binaryResult);
        } else {
            System.out.println("Product not found");
        }
    }
}