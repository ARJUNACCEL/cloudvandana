import java.util.*;


public class romantoint {
    public static void main(String[] args) {

        String s = "XXV";

        int result = 0;
        int prev = 0;

        HashMap<Character, Integer> romanValues = new HashMap<>();
        romanValues.put('I', 1);
        romanValues.put('V', 5);
        romanValues.put('X', 10);
        romanValues.put('L', 50);
        romanValues.put('C', 100);
        romanValues.put('D', 500);
        romanValues.put('M', 1000);


        for (int i = s.length() - 1; i >= 0; i--) {

            int current = romanValues.get(s.charAt(i));

            if (current < prev) {
                result -= current;
            } else {
                result += current;
            }

            prev = current;
        }

        System.out.println("Integer equivalent of the Roman numeral " +s+ " is: " + result);

    }
}
