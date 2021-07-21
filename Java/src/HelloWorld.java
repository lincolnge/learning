//import java.util.HashMap;
//import java.util.Map;

//public class HelloWorld {
//
//    public static void main(String[] args) {
//        // Prints "Hello, World" to the terminal window.
//        Map<String, Integer> hashMap = new HashMap<String, Integer>()
//        {{
//            put("One", 1);
//            put("Two", 2);
//            put("Three", 3);
//        }};
//        Object abc = null;
//        System.out.println("abc:" + abc);
//        if (1 == 1) {
//            System.out.println("hashMap.toString():" + hashMap.toString() +
//                    "\n==Hello, World: " + ("{One=1, Two=2, Three=3}" == hashMap.toString()) +
//                    "\n equals: " + hashMap.toString().equals("{One=1, Two=2, Three=3}") +
//                    "\n no equals: " + hashMap.toString().equals("{One=1,Two=2, Three=3}") +
//            "");
//        }
//    }
//®
//}


public class HelloWorld {
    public static void main(String[] args) {

        int[] nums = {1,1,1,2,2,3};
        System.out.println("666 = " + new Solution().removeDuplicates(nums));
    }
}

class Solution {
    public int removeDuplicates(int[] nums) {
        int index = 1;
        int newIndex = 1;
        int count = 1;
        while (index < nums.length) {
            if (nums[index] == nums[index - 1]) {
                count++;
            } else {
                count = 1;
            }
            if (count < 3) {
                nums[newIndex] = nums[index];
                newIndex++;
            }
            index++;
        }
//        数组 array 实际上并没有删除多余的项。
//        System.out.println(nums.length);
//        for (int i = 0; i < nums.length; i++) {
//            System.out.println(nums[i]);
//        }
        return newIndex;
    }
}
