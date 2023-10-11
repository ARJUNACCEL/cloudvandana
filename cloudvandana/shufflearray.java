import java.util.*;

public class shufflearray {
    public static void main(String[] args) {

        int[] array = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

        Random rand = new Random();

        int[] shuffled = new int[array.length];

        for (int i = 0; i < array.length; i++) {

            shuffled[i] = array[i];

        }


        for (int i = shuffled.length - 1; i > 0; i--) {

            int j = rand.nextInt(i + 1);
            int temp = shuffled[i];
            shuffled[i] = shuffled[j];
            shuffled[j] = temp;

        }


        System.out.println("Array before shuffling :");

        for (int x: array) {
            System.out.print(x + " ");
        }

        System.out.println();

        System.out.println("Array after shuffling :");

        for (int x: shuffled) {
            System.out.print(x + " ");
        }

    }
}
