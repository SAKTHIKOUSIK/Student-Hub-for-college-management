
import React from 'react';
import '../../App.css';


const CodingSheet = () => {
  return (
    
    <div className="bg-blue-50 font-sans fade-in">
      <h1 className="text-4xl text-center text-white bg-gradient-to-r from-blue-700 to-blue-400 py-6 rounded-lg mb-8 shadow-lg">
        DSA CODING SHEET
      </h1>
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-2xl text-blue-800 text-center border-b-2 border-blue-600 inline-block pb-2 animate-heading">
            Basics
          </h2>
          <table className="min-w-full bg-white rounded-lg shadow-lg overflow-hidden mt-4">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-4">Problem</th>
                <th className="py-4">Problem Link</th>
                <th className="py-4">Tutorial Article Link</th>
              </tr>
            </thead>
            <tbody>
              <TableRow
                problem="Find Even or Odd"
                problemLink="https://practice.geeksforgeeks.org/problems/odd-or-even3618/1"
                articleLink="https://www.geeksforgeeks.org/check-whether-given-number-even-odd/"
              />
              <TableRow
                problem="Find Last Digit in a Number"
                problemLink="https://www.geeksforgeeks.org/problems/find-last-digit-of-ab-for-large-numbers1936/1"
                articleLink="https://www.geeksforgeeks.org/find-first-last-digits-number/"
              />
              <TableRow
                problem="Count Digits in a Number"
                problemLink="https://practice.geeksforgeeks.org/problems/count-digits5716/1"
                articleLink="https://www.geeksforgeeks.org/program-count-digits-integer-3-different-methods/"
              />
              <TableRow
                problem="Reverse a number (Try thinking how you can use above logic in solving this)"
                problemLink="https://www.geeksforgeeks.org/problems/reverse-digit0316/1"
                articleLink="https://www.geeksforgeeks.org/write-a-program-to-reverse-an-array-or-string/"
              />
              <TableRow
                problem="Find power of a number"
                problemLink="https://www.geeksforgeeks.org/problems/power-of-numbers-1587115620/1"
                articleLink="https://www.geeksforgeeks.org/write-a-c-program-to-calculate-powxn/"
              />
              <TableRow
                problem="GCD"
                problemLink="https://practice.geeksforgeeks.org/problems/gcd-of-two-numbers3459/1"
                articleLink="https://www.geeksforgeeks.org/program-to-find-gcd-or-hcf-of-two-numbers/"
              />
              <TableRow
                problem="Print all divisors of a number"
                problemLink="https://www.codingninjas.com/studio/problems/print-all-divisors-of-a-number_1164188"
                articleLink="https://www.geeksforgeeks.org/find-all-factors-of-a-natural-number/"
              />
              <TableRow
                problem="Prime number (Try solving by yourself)"
                problemLink="https://practice.geeksforgeeks.org/problems/prime-number2314/1"
                articleLink="https://www.geeksforgeeks.org/prime-numbers/"
              />
              <TableRow
                problem="Armstrong number (Solving power of number, will make this easy for you)"
                problemLink="https://www.geeksforgeeks.org/problems/armstrong-numbers2727/1"
                articleLink="https://www.geeksforgeeks.org/program-for-armstrong-numbers/"
              />
              <TableRow
                problem="Perfect number"
                problemLink="https://practice.geeksforgeeks.org/problems/perfect-numbers3207/1"
                articleLink="https://www.geeksforgeeks.org/perfect-number/"
              />
            </tbody>
          </table>
        </div>
        
        {/* New Section for Array - Data Structure */}
        <div className="mb-8">
          <h2 className="text-2xl text-blue-800 text-center border-b-2 border-blue-600 inline-block pb-2 animate-heading">
            Array - Data Structure
          </h2>
          <table className="min-w-full bg-white rounded-lg shadow-lg overflow-hidden mt-4">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-4">Problem</th>
                <th className="py-4">Problem Link</th>
                <th className="py-4">Tutorial Article Link</th>
              </tr>
            </thead>
            <tbody>
              <TableRow
                problem="Find Minimum and Maximum in Array"
                problemLink="https://www.geeksforgeeks.org/problems/find-minimum-and-maximum-element-in-an-array4428/1"
                articleLink="https://www.geeksforgeeks.org/maximum-and-minimum-in-an-array/"
              />
              <TableRow
                problem="Find Third Largest Element in Array"
                problemLink="https://practice.geeksforgeeks.org/problems/third-largest-element/1"
                articleLink="https://www.geeksforgeeks.org/third-largest-element-array-distinct-elements/"
              />
              <TableRow
                problem="Search an Element in Array"
                problemLink="https://www.geeksforgeeks.org/problems/search-an-element-in-an-array-1587115621/1"
                articleLink="https://www.geeksforgeeks.org/c-program-to-traverse-an-array/"
              />
              <TableRow
                problem="Find missing number in array"
                problemLink="https://practice.geeksforgeeks.org/problems/missing-number-in-array1416/1"
                articleLink="https://www.geeksforgeeks.org/find-the-missing-number/"
              />
              <TableRow
                problem="Check if two arrays are equal or not"
                problemLink="https://www.geeksforgeeks.org/problems/check-if-two-arrays-are-equal-or-not3847/1"
                articleLink="https://www.geeksforgeeks.org/check-if-two-arrays-are-equal-or-not/"
              />
              <TableRow
                problem="Rotate the array by 1"
                problemLink="https://www.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one2614/1"
                articleLink="https://www.geeksforgeeks.org/c-program-cyclically-rotate-array-one/"
              />
              <TableRow
                problem="Find pair with given sum"
                problemLink="https://www.geeksforgeeks.org/problems/key-pair5616/1"
                articleLink="https://www.geeksforgeeks.org/check-if-pair-with-given-sum-exists-in-array/"
              />
              <TableRow
                problem="Find triplets with zero sum"
                problemLink="https://www.geeksforgeeks.org/problems/find-triplets-with-zero-sum/1"
                articleLink="https://www.geeksforgeeks.org/find-triplets-array-whose-sum-equal-zero/"
              />
              <TableRow
                problem="Trapping rain water"
                problemLink="https://www.geeksforgeeks.org/problems/trapping-rain-water-1587115621/1"
                articleLink="https://www.geeksforgeeks.org/trapping-rain-water/"
              />
              <TableRow
                problem="Kadane's algo(super imp)"
                problemLink="https://practice.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1"
                articleLink="https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/"
              />
            </tbody>
          </table>
        </div>
        <div className="mb-8">
  <h2 className="text-2xl text-blue-800 text-center border-b-2 border-blue-600 inline-block pb-2 animate-heading">
    Matrix - Data Structure
  </h2>
  <table className="min-w-full bg-white rounded-lg shadow-lg overflow-hidden mt-4">
    <thead className="bg-blue-600 text-white">
      <tr>
        <th className="py-4">Problem</th>
        <th className="py-4">Problem Link</th>
        <th className="py-4">Tutorial Article Link</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="py-4 text-center">Search in a Matrix</td>
        <td className="py-4 text-center">
          <a
            href="https://leetcode.com/problems/search-a-2d-matrix/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline animate-button"
          >
            Problem Link
          </a>
        </td>
        <td className="py-4 text-center">
          <a
            href="https://www.geeksforgeeks.org/search-an-element-in-a-sorted-and-pivoted-array/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline animate-button"
          >
            Article Link
          </a>
        </td>
      </tr>
      <tr>
        <td className="py-4 text-center">Rotate by 90 Degree</td>
        <td className="py-4 text-center">
          <a
            href="https://www.geeksforgeeks.org/problems/rotate-a-matrix-by-90-degrees/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline animate-button"
          >
            Problem Link
          </a>
        </td>
        <td className="py-4 text-center">
          <a
            href="https://www.geeksforgeeks.org/rotate-a-matrix-by-90-degrees/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline animate-button"
          >
            Article Link
          </a>
        </td>
      </tr>
      <tr>
        <td className="py-4 text-center">Maximum num of 1's row</td>
        <td className="py-4 text-center">
          <a
            href="https://www.geeksforgeeks.org/problems/row-with-minimum-number-of-1s5430/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=bottom_sticky_on_article"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline animate-button"
          >
            Problem Link
          </a>
        </td>
        <td className="py-4 text-center">
          <a
            href="https://www.geeksforgeeks.org/find-the-row-with-maximum-number-1s/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline animate-button"
          >
            Article Link
          </a>
        </td>
      </tr>
      <tr>
        <td className="py-4 text-center">Left rotate matrix k times</td>
        <td className="py-4 text-center">
          <a
            href="https://practice.geeksforgeeks.org/problems/left-rotate-matrix-k-times2351/1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline animate-button"
          >
            Problem Link
          </a>
        </td>
        <td className="py-4 text-center">
          <a
            href="https://www.geeksforgeeks.org/rotate-matrix-right-k-times/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline animate-button"
          >
            Article Link
          </a>
        </td>
      </tr>
      <tr>
        <td className="py-4 text-center">Print matrix in diagonal pattern</td>
        <td className="py-4 text-center">
          <a
            href="https://www.geeksforgeeks.org/problems/print-matrix-in-diagonal-pattern/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=bottom_sticky_on_article"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline animate-button"
          >
            Problem Link
          </a>
        </td>
        <td className="py-4 text-center">
          <a
            href="https://www.geeksforgeeks.org/print-matrix-diagonal-pattern/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline animate-button"
          >
            Article Link
          </a>
        </td>
      </tr>
      <tr>
        <td className="py-4 text-center">Set matrix zeros</td>
        <td className="py-4 text-center">
          <a
            href="https://leetcode.com/problems/set-matrix-zeroes/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline animate-button"
          >
            Problem Link
          </a>
        </td>
        <td className="py-4 text-center">
          <a
            href="https://takeuforward.org/data-structure/set-matrix-zero/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline animate-button"
          >
            Article Link
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<div className="mb-8">
  <h2 className="text-2xl text-blue-800 text-center border-b-2 border-blue-600 inline-block pb-2 animate-heading">
    Recursion
  </h2>
  <table className="min-w-full bg-white rounded-lg shadow-lg overflow-hidden mt-4">
    <thead className="bg-blue-600 text-white">
      <tr>
        <th className="py-4">Problem</th>
        <th className="py-4">Problem Link</th>
        <th className="py-4">Tutorial Article Link</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="py-4 text-center">Factorial of a Number</td>
        <td className="py-4 text-center">
          <a
            href="https://practice.geeksforgeeks.org/problems/factorial5739/1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline animate-button"
          >
            Problem Link
          </a>
        </td>
        <td className="py-4 text-center">
          <a
            href="https://www.geeksforgeeks.org/factorial-of-a-number-using-recursion/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline animate-button"
          >
            Article Link
          </a>
        </td>
      </tr>
      <tr>
        <td className="py-4 text-center">Fibonacci Series</td>
        <td className="py-4 text-center">
          <a
            href="https://practice.geeksforgeeks.org/problems/nth-fibonacci-number/1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline animate-button"
          >
            Problem Link
          </a>
        </td>
        <td className="py-4 text-center">
          <a
            href="https://www.geeksforgeeks.org/program-for-nth-fibonacci-number/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline animate-button"
          >
            Article Link
          </a>
        </td>
      </tr>
      <tr>
        <td className="py-4 text-center">Print 1 to N using recursion</td>
        <td className="py-4 text-center">
          <a
            href="https://www.geeksforgeeks.org/problems/print-1-to-n-without-using-loops-1587115620/1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline animate-button"
          >
            Problem Link
          </a>
        </td>
        <td className="py-4 text-center">
          <a
            href="https://takeuforward.org/data-structure/print-n-to-1-and-1-to-n-using-recursion/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline animate-button"
          >
            Article Link
          </a>
        </td>
      </tr>
      <tr>
        <td className="py-4 text-center">Power(x,n)</td>
        <td className="py-4 text-center">
          <a
            href="https://www.geeksforgeeks.org/problems/power-of-numbers-1587115620/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=bottom_sticky_on_article"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline animate-button"
          >
            Problem Link
          </a>
        </td>
        <td className="py-4 text-center">
          <a
            href="https://www.geeksforgeeks.org/write-a-c-program-to-calculate-powxn/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline animate-button"
          >
            Article Link
          </a>
        </td>
      </tr>
      <tr>
        <td className="py-4 text-center">Print pattern</td>
        <td className="py-4 text-center">
          <a
            href="https://www.geeksforgeeks.org/problems/print-pattern3549/1?page=1&category=Recursion&difficulty=Easy&sortBy=submissions"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline animate-button"
          >
            Problem Link
          </a>
        </td>
        <td className="py-4 text-center">
          <a
            href="https://www.geeksforgeeks.org/c-programs-print-interesting-patterns/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline animate-button"
          >
            Article Link
          </a>
        </td>
      </tr>
      <tr>
        <td className="py-4 text-center">Pascal triangle</td>
        <td className="py-4 text-center">
          <a
            href="https://www.geeksforgeeks.org/problems/pascal-triangle0652/1?page=1&category=Recursion&difficulty=Easy&sortBy=submissions"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline animate-button"
          >
            Problem Link
          </a>
        </td>
        <td className="py-4 text-center">
          <a
            href="https://www.geeksforgeeks.org/pascal-triangle/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline animate-button"
          >
            Article Link
          </a>
        </td>
      </tr>
      <tr>
        <td className="py-4 text-center">Recursive implementation of atoi</td>
        <td className="py-4 text-center">
          <a
            href="https://practice.geeksforgeeks.org/problems/implement-atoi/1?utm_source=geeksforgeeks&utm_medium=ml_article_practice_tab&utm_campaign=article_practice_tab"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline animate-button"
          >
            Problem Link
          </a>
        </td>
        <td className="py-4 text-center">
          <a
            href="https://www.geeksforgeeks.org/recursive-implementation-of-atoi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline animate-button"
          >
            Article Link
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</div>


      </div>
      </div>
    
  );
};

const TableRow = ({ problem, problemLink, articleLink }) => {
  return (
    <tr>
      <td className="py-4 text-center">{problem}</td>
      <td className="py-4 text-center">
        <a href={problemLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline animate-button">
          Problem Link
        </a>
      </td>
      <td className="py-4 text-center">
        <a href={articleLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline animate-button">
          Article Link
        </a>
      </td>
    </tr>
  );
};

export default CodingSheet;
