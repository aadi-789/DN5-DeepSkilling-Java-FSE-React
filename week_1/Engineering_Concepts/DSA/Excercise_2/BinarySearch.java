public class BinarySearch {

    public static Product search(Product[] items, int tar) {

        int lo = 0;
        int hi = items.length - 1;

        while (lo <= hi) {

            int mid = lo + (hi - lo) / 2;

            if (items[mid].productId == tar) {
                return items[mid];
            }

            if (items[mid].productId < tar) {
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }

        return null;
    }
}