What is Big O?
Imagine we have a multiple implementations of the same function.
How do we know which one is best?
"write a function that accepts a string input and returns a reversed copy"
Big O is a numeric representation of code performance!

Its important to have a precise vocabulary to talk about how code performs.
Useful for discussing trade-offs between different approaches.
When your code slows down or crashes, identifying parts of the code that are inefficient.

What does 'better' code mean?
Faster?
Less memory-intensive?
Readability?
Brevity?

Count the number of simple operations a computer has to perform. n = operations
assignments and additions
comparisons

Sometimes operations grow roughly proportionally with n

Big O allows us to talk formally about how the runtime of an algorithm grows as the inputs grow

f(n) could be linear (f(n) = n)
f(n) could be quadratic (f(n) = n2)
f(n) could be constant (f(n) = 1)
f(n) could be something entirely different

f(n) one O(n) loop nested in another O(n) loop will be O(n2)

Rules of thumb for determining time complexity of algos

O(2n) -> O(n) = constant
O(500) -> O(1) = fast
O(13n2) -> O(n2) = slowww

O(n+10) -> O(n)
O(1000n + 50) -> O(n)
O(n2 + 5n + 8) -> O(n2)

1. Arithmetic operations are constant
2. Variable assignment is constant
3. Accessing elements in an array(by index) or an object(by key) is constant
4. In a loop the complexity is the length of the loop times the complexity of whatever happens in the loop.

Space Complexity in JS Rules of thumb

1. Most primitives (booleans,numbers,undefined,null) are constant
2. Strings require O(n) space (where n is the string length)
3. Reference types are generally O(n), where the length(for arrays) or the number of keys(for objects)

Logarithms

Log2(value) = exponent -----> 2^exponent = value

Log2(8)=3 ---> 2^3 =8

Log === Log2
