# Kadane's Algorithm

Kadane's algorithm is a dynamic programming algorithm that finds the maximum sum of a contiguous subarray in a one-dimensional array. It's a linear time algorithm that's efficient at handling positive and negative numbers.

# How it works

The algorithm uses a variable called "sum" to keep track of the current sum of elements. For each element in the array, the algorithm adds the element to the sum and updates the sum to be the maximum of the current sum and the previous sum. If the sum becomes negative, it's reset to 0.