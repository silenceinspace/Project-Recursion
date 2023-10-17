## My thinking process with the solutions

### Fibonacci

In the first place I was familiar with the fibonacci, so I kinda implemeted it quickly. However, the assignment wanted me to return an ARRAY of n in fib(n) while I was returning just the nth number in the sequence. I had no idea how to carry on my updated array values after the sub calls are executed.

**Issues:**

- The base case was the same as though I needed to return only a fib number at the nth position.
- The recursive step was meant to modify next sub calls and it did. Nevertheless, it could not keep the previous values of the sequence.

**Insight:**

To keep the previous values of the fibonacci sequence updated, I needed to use a default function parameter fib - (n, array = [0,1]). It allowed me to call my recursive function with the updated array. So the two preceding numbers were relevant.
Otherwise my base case was in fact supposed to check either the length of my parameter array (to equal to n) or num's value (if I were to modify it in a recursive step. But I didn't.)

**Conclusion:**

I was not aware of the benefit which a default parameter brought to my implementation. Thanks to some research and folks in the chat, I learned about that. I did not just go to see the solution. I actually had all the pieces (I became even pretty comfortable with visualizing the recursive fibonacci) except for returning an array instead of a number at that position.

### Merge sort

While I was watching the CS50 video, it seemed so straightforward. It was simply all about dividing an array/unsorted sequence of numbers into halves and at the deepest point of recursion - when we have a one-element array - we could claim that the item was sorted. And from that point we somehow needed to return already the sorted sub arrays and merge them to eventually return a sorted version of the original array.

**Issues:**

- Dividing into halves was immediately clear to me. And, as I thought, so was the base case (It was not completely the truth though). But I did not understand how exactly I could make sure that the currently processed half is on the right or left in a recursive step.
- I did not understand how I could merge the sorted sub arrays.
- And of course, how the hell could I sort items when they were not sorted.

**Insights:**

First of all, I had the feeling I needed to have two recursive steps in my function. And at the end of the day, I was correct even though I was hesitant how actually they functioned.
I also realized I needed to create an array that would store my final sorted version. But I did not go for a default parameter this time. Instead I declared it inside my function.
Then after having something work - my function was returning the sorted versions of the deepest sub calls - I realized I might need a loop somewhere. In essence, sorting was not happening inside on going down into my recursion but on the way up. Moreover, sorting and merging were supposed to take place simultaneously. So I came back to the CS50 video and really digged the teacher's explanation with pointing fingers at numbers and progressing forward. That's how I started trying to take the first elements of both arrays in a step and compare them. The smaller was pushed into the sorted array and removed from the array where it was at that moment whereas the bigger stayed at the same place. And once there was an empty array because all numbers from were already merged, the other array still had one more number. There was nothing compare it with, and hence it is just merged automatically.

**Conclusion:**

Solving this algorithm was challenging, it took me a few hours. But halfway through it, using the browser debugger made a huge difference. I immediately saw what was going differently to my plan and fixed it. In fact, I took the opportunity and even refactored some of my code. At that point, I knew what next step would be inside my function. And although recursion is still a bit confusing, I am genuinely happy I am getting the right ideas quicker than I did before.