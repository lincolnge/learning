public class RemoveDuplicates {
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