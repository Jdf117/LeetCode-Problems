LeetCode #912. Sort An array

Came up with a bubble sort method without realizing. After it didn’t work, looked more in-depth into the issue. Realized bubble sort doesn’t work and found out that there are 3 ways to solve this problem: 1) MergeSort 2) HeapSort 3) QuickSort

After some research, MergeSort seemed to be the best case and it was similar to what we learned in class, ie: Recursively calling the array.

The idea of MergeSort:
Recursively split the array into smaller sub-arrays until each sub-array has only one element
Merge the sub-array back together in a sorted manner

MergeSort will keep the time complexity at O(n log n).

Thought process:

Like we did we class, I needed to create a function that will split the array and sub-arrays recursively with my mergeSort function.

MergeSort function takes in 3 parameters: array, start, and end. Using the parameters it will calculate the mid point of each array and sub array. Splitting the first array into two subarrays(left and right), I had to add recursive function to find the mid points of both sub arrays. This part was very confusing, as recursion really makes my mind start spinning. It was very difficult thinking my way through this. Then I needed a function to merge to sort the sub-arrays and merge them into a temp array. I have two pointers, one for each sub-array which incremented each time the values met the condition. The condition being if value of left sub-array is less than the value in the right sub-array, the left array would be pushed into the temp array and the index incremented. Once one of the indexes reached the last index of the sub-array, I needed add the rest of the elements in either the left or right array to the temp array. All that was left to do is copy the sorted elements back to the array.

Issues:
I think I still need to work on my thought process. Maybe I'm just not experienced enough but I should've realized I was initially using bubble sort method and that it wouldn't have worked. I definitely had a lot of trouble thinking about the recursive portion of the code. Luckily it somehow all worked. I really need to spend more time practicing.

LeetCode #743. Network Delay Time

Issues:
Dijkstra's algorithm is still something that i'm not very familiar with. I wasn't able to do this problem without the help of chatGPT which is why I'm not submitting the code with my solution. I need to study this one a lot more and review the class videos again.
