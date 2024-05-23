import java.util.*;

public class PasswordTransformer {
    public static int countWays(String firstPassword, String secondPassword, int K) {
        int N = firstPassword.length();
        int count = 0;
        
        for (int L = 1; L < N; L++) {
            String transformedPassword = firstPassword;
            
            for (int i = 0; i < K; i++) {
                transformedPassword =helper(transformedPassword, L);
            }
            
            if (transformedPassword.equals(secondPassword)) {
                count++;
            }
        }
        
        return count;
    }
    
    private static String helper(String str, int L) {
        int N = str.length();
        String suffix = str.substring(N - L);
        String prefix = str.substring(0, N - L);
        return suffix + prefix;
    }

    public static void main(String[] args) {
        String a = "pass";
        String  b= "sspa";
        int K = 2;
        int result = countWays(a,b, K);
        System.out.println(result);
    }
}
