/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    // Function to split array into two halves - left and right 
    function mergeSort(arr, start, end) {
        if (end - start <= 1) return;

        const mid = Math.floor((start + end) / 2);

        //recursion here 
        //Left sub array
        mergeSort(arr, start, mid);

        //right sub array
        mergeSort(arr, mid, end);

        // Now merge two sorted halves
        merge(arr, start, mid, end);
    }

    //Merge function to push into temp array and sort. 
    function merge(arr, start, mid, end) {
        let left = start, right = mid;
        const temp = [];

        // Sort left and right array values and push to temp array
        while (left < mid && right < end) {
            if (arr[left] < arr[right]) {
                temp.push(arr[left++]);
            } else {
                temp.push(arr[right++]);
            }
        }

        //Add remaining left array if any to temp
        while (left < mid) {
            temp.push(arr[left++]);
        }

        // Add remaingin right array if any to temp
        while (right < end) {
            temp.push(arr[right++]);
        }

        // Copy sorted elements back to the original array
        //temp[i - start] because temp array index doesnt match arr index. 
        for (let i = start; i < end; i++) {
            arr[i] = temp[i - start];
        }
    }

    // Start the merge sort
    mergeSort(nums, 0, nums.length);
    return nums;

};