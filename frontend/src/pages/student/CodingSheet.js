import React from 'react';
import './App.css';
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">


const CodingSheet = () => {
  return (
    <div className="bg-blue-50 font-sans fade-in">
      <h1 className="text-4xl text-center text-white bg-gradient-to-r from-blue-700 to-blue-400 py-6 rounded-lg mb-8 shadow-lg">
        DSA CODING
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
