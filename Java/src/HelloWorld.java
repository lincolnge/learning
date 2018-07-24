import java.util.HashMap;
import java.util.Map;

public class HelloWorld {

    public static void main(String[] args) {
        // Prints "Hello, World" to the terminal window.
        Map<String, Integer> hashMap = new HashMap<String, Integer>()
        {{
            put("One", 1);
            put("Two", 2);
            put("Three", 3);
        }};
        if (1 == 1) {
            System.out.println("hashMap.toString():" + hashMap.toString() +
                    "\n==Hello, World: " + ("{One=1, Two=2, Three=3}" == hashMap.toString()) +
                    "\n equals: " + hashMap.toString().equals("{One=1, Two=2, Three=3}") +
                    "\n no equals: " + hashMap.toString().equals("{One=1,Two=2, Three=3}") +
            "");
        }
    }

}
