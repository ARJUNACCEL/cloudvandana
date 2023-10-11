public class pangram {
    public static void main(String[] args) {

        String str = "The quick brown fox jumps over the lazy dog";
        str = str.toLowerCase();
        boolean[] alphabets = new boolean[26];
        boolean pangram=true;



        char[] charac= str.toCharArray();

        for (char ch : charac) {

            if ('a' <= ch && ch <= 'z') {

                alphabets[ch - 'a'] = true;
            }
        }


        for (boolean isPresent : alphabets) {
            if (!isPresent) {
             pangram=false;
            }
        }

        if(pangram){
            System.out.println("The given String is indeed a Pangram!! :)");
        }
        else{
            System.out.println("Not a pangram :( ");
        }


    }
}
