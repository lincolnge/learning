import java.util.HashMap;

public class NumJewelsInStones {
    public static void main(String[] args) {
        String J = "aA";
        String S = "aAAbbbb";
        System.out.println("666 = " + new Solution().numJewelsInStones(J, S));
    }
}

// 	1 ms	34.9 MB
// 暴力破解，理论上是最慢的，但不知道为啥很快。
// class Solution {
//     public int numJewelsInStones(String J, String S) {
//         int stones = 0;
//         for (char s: S.toCharArray()) {
//             for (char j: J.toCharArray()) {
//                 if (s == j) {
//                     stones++;
//                     break;
//                 }
//             }
//         }

//         return stones;
//     }
// }

// 2 ms	34.8 MB
// 使用哈希表，使用 2 个独立的 for 循环
// class Solution {
//     public int numJewelsInStones(String J, String S) {
//         Set<Character> jSet = new HashSet();
//         int stones = 0;
//         for (char j: J.toCharArray()) {
//             jSet.add(j);
//         }
//         for (char s: S.toCharArray()) {
//             if (jSet.contains(s)) {
//                 stones++;
//             }
//         }

//         return stones;
//     }
// }

// 1 ms	34.5 MB
// 使用数组来实现，以获得更快的速度
// https://leetcode-cn.com/problems/jewels-and-stones/solution/java-san-chong-fang-fa-qiu-jie-di-san-chong-ke-yi-/
class Solution {
    public int numJewelsInStones(String J, String S) {
        char[] Jc = J.toCharArray();
        char[] Sc = S.toCharArray();
        int stones = 0;
        // 122 ASCII 是 z
        int[] indexMap = new int[123];
        for (int h = 0; h < S.length(); h++) {
            indexMap[Sc[h]] = indexMap[Sc[h]] + 1;
        }
        for (int i = 0; i < J.length(); i++) {
            char a = Jc[i];
            stones += indexMap[a];
        }
        return stones;
    }
}


// 10 ms	35.9 MB
// class Solution {
//     public int numJewelsInStones(String J, String S) {
//         HashMap<String, Integer> SMap = new HashMap();
//         int stones = 0;
//         String[] sChars = S.split("");
//         String[] jChars = J.split("");

//         for (int i = 0; i < sChars.length; i++) {
//             if (!SMap.containsKey(sChars[i])) {
//                 SMap.put(sChars[i], 0);
//             }
//             SMap.put(sChars[i], SMap.get(sChars[i]) + 1);
//         }
//         for (int i = 0; i < jChars.length; i++) {
//             if (!SMap.containsKey(jChars[i])) {
//                 SMap.put(jChars[i], 0);
//             }
//             stones += SMap.get(jChars[i]);
//         }
//         return stones;
//     }
// }

// 14 ms	36.1 MB
// class Solution {
//     public int numJewelsInStones(String J, String S) {
//         String newS = S;
//         for (String j: J.split("")) {
//             newS = newS.replace(j, "");
//         }
//         return S.length() - newS.length();
//     }
// }

// 7 ms	36 MB
// class Solution {
//     public int numJewelsInStones(String J, String S) {
//         String newS = S.replaceAll("[" + J + "]", "");
//         return S.length() - newS.length();
//     }
// }