import React from 'react';
import '../../App.css';

const averageTableData = [
  {
    title: "Average",
    rows: [
      {
        type: "Type 1",
        description: "Average of Numbers",
        learnLink: "https://www.careerride.com/average.aspx",
        practiceLink: "https://www.indiabix.com/aptitude/average/",
      },
      {
        type: "Type 2",
        description: "Average of weight / age / marks of two or more groups / classes.",
        learnLink: "https://www.careerride.com/average.aspx",
        practiceLink: "https://www.indiabix.com/aptitude/average/",
      },
      {
        type: "Type 3",
        description: "Change in average when one entry is added/replaced",
        learnLink: "https://www.careerride.com/average.aspx",
        practiceLink: "https://www.indiabix.com/aptitude/average/",
      },
      {
        type: "Type 4",
        description: "Change in average when one entry is entered wrong",
        learnLink: "https://www.careerride.com/average.aspx",
        practiceLink: "https://www.indiabix.com/aptitude/average/",
      },
      {
        type: "Type 5",
        description: "Average speed",
        learnLink: "https://www.careerride.com/average.aspx",
        practiceLink: "https://www.indiabix.com/aptitude/average/",
      },
      {
        type: "Type 6",
        description: "Cricket/Scores/Innings",
        learnLink: "https://www.careerride.com/average.aspx",
        practiceLink: "https://www.indiabix.com/aptitude/average/",
      },
    ],
  },
];

const timeAndDistanceTableData = [
  {
    title: "Time & Distance",
    rows: [
      {
        type: "Type 1",
        description: "Calculate either time, speed, or distance from the other two given parameters",
        learnLink: "https://www.careerride.com/time-and-distance-aptitude-test.aspx",
        practiceLink: "https://www.indiabix.com/aptitude/time-and-distance/",
      },
      {
        type: "Type 2",
        description: "Calculate speed of two people moving between two points, A and B, in opposite directions & crossing each other on the way",
        learnLink: "https://www.careerride.com/time-and-distance-aptitude-test.aspx",
        practiceLink: "https://www.indiabix.com/aptitude/time-and-distance/",
      },
      {
        type: "Type 3",
        description: "Finding Relative Speed for two bodies moving in same or opposite directions",
        learnLink: "https://www.careerride.com/time-and-distance-aptitude-test.aspx",
        practiceLink: "https://www.indiabix.com/aptitude/time-and-distance/",
      },
      {
        type: "Type 4",
        description: "Numericals on Average Speed when the same part of total distance is traveled at two or more different speeds",
        learnLink: "https://www.careerride.com/time-and-distance-aptitude-test.aspx",
        practiceLink: "https://www.indiabix.com/aptitude/time-and-distance/",
      },
      // Additional rows for other Time & Distance types as needed
    ],
  },
];

const lcmHcfTableData = [
  {
    title: "LCM & HCF",
    rows: [
      {
        type: "Type 1",
        description: "Find H.C.F. and L.C.M of composite numbers",
        learnLink: "https://www.careerride.com/problems-on-H.C.F-and-L.C.M-aptitude-test.aspx",
        practiceLink: "https://www.indiabix.com/aptitude/problems-on-hcf-and-lcm/",
      },
      {
        type: "Type 2",
        description: "Find H.C.F. and L.C.M. of decimal numbers and fractions",
        learnLink: "https://www.careerride.com/problems-on-H.C.F-and-L.C.M-aptitude-test.aspx",
        practiceLink: "https://www.indiabix.com/aptitude/problems-on-hcf-and-lcm/",
      },
      {
        type: "Type 3",
        description: "Find the numbers/sum of numbers/product of numbers if<br>a. Their ratio and H.C.F. are given.<br>b. Product of H.C.F. and L.C.M are given.",
        learnLink: "https://www.careerride.com/problems-on-H.C.F-and-L.C.M-aptitude-test.aspx",
        practiceLink: "https://www.indiabix.com/aptitude/problems-on-hcf-and-lcm/",
      },
      {
        type: "Type 4",
        description: "Find the least number, which when divided by another number leaves a remainder",
        learnLink: "https://www.careerride.com/problems-on-H.C.F-and-L.C.M-aptitude-test.aspx",
        practiceLink: "https://www.indiabix.com/aptitude/problems-on-hcf-and-lcm/",
      },
      {
        type: "Type 5",
        description: "Application based numerical of H.C.F. and L.C.M.",
        learnLink: "https://www.careerride.com/problems-on-H.C.F-and-L.C.M-aptitude-test.aspx",
        practiceLink: "https://www.indiabix.com/aptitude/problems-on-hcf-and-lcm/",
      },
      // Additional rows for other LCM & HCF types as needed
    ],
  },
];

const trainTableData = [
  {
    title: "Train",
    rows: [
      {
        type: "Type 1",
        description: "A train crosses a stationary object on the platform. Find:<br>a. the time taken or <br>b. length of train",
        learnLink: "https://www.careerride.com/problems-on-H.C.F-and-L.C.M-aptitude-test.aspx",
        practiceLink: "https://www.indiabix.com/aptitude/problems-on-hcf-and-lcm/",
      },
      {
        type: "Type 1",
        description: "A train crosses a stationary object on the platform. Find:<br>a. the time taken or <br>b. length of train",
        learnLink: "https://www.careerride.com/problems-on-H.C.F-and-L.C.M-aptitude-test.aspx",
        practiceLink: "https://www.indiabix.com/aptitude/problems-on-hcf-and-lcm/",
      },
      {
        type: "Type 2",
        description: "A train of given length crosses the platform at a given speed. Find:<br>a. Time taken to cross the platform or <br>b. Length of platform",
        learnLink: "https://www.careerride.com/problems-on-H.C.F-and-L.C.M-aptitude-test.aspx",
        practiceLink: "https://www.indiabix.com/aptitude/problems-on-hcf-and-lcm/",
      },
      {
        type: "Type 3",
        description: "Find time taken by a train to cross a person running in opposite direction at a given speed",
        learnLink: "https://www.careerride.com/problems-on-H.C.F-and-L.C.M-aptitude-test.aspx",
        practiceLink: "https://www.indiabix.com/aptitude/problems-on-hcf-and-lcm/",
      },
      {
        type: "Type 4",
        description: "Find time taken by a train to cross a person running in same direction at a given speed",
        learnLink: "https://www.careerride.com/problems-on-H.C.F-and-L.C.M-aptitude-test.aspx",
        practiceLink: "https://www.indiabix.com/aptitude/problems-on-hcf-and-lcm/",
      },
      {
        type: "Type 5",
        description: "Find time taken by two trains moving in opposite direction at given speed, to cross each other",
        learnLink: "https://www.careerride.com/problems-on-H.C.F-and-L.C.M-aptitude-test.aspx",
        practiceLink: "https://www.indiabix.com/aptitude/problems-on-hcf-and-lcm/",
      },
      {
        type: "Type 6",
        description: "Two trains move at a given speed in same direction. Find:<br>a. Time taken to cross each other<br>b. length of train",
        learnLink: "https://www.careerride.com/problems-on-H.C.F-and-L.C.M-aptitude-test.aspx",
        practiceLink: "https://www.indiabix.com/aptitude/problems-on-hcf-and-lcm/",
      },
      // Additional rows for other train types as needed
    ],
  },
];

const ageTableData = [
  {
    title: "Age",
    rows: [
      {
        type: "Type 1",
        description: "Calculate Present age",
        learnLink: "https://www.careerride.com/problem-on-ages.aspx",
        practiceLink: "https://www.indiabix.com/aptitude/problems-on-ages/",
      },
      {
        type: "Type 2",
        description: "Numerical to Determine Ages in ratio form",
        learnLink: "https://www.careerride.com/problem-on-ages.aspx",
        practiceLink: "https://www.indiabix.com/aptitude/problems-on-ages/",
      },
      {
        type: "Type 3",
        description: "Numerical to Determine Age of a Person before x Years",
        learnLink: "https://www.careerride.com/problem-on-ages.aspx",
        practiceLink: "https://www.indiabix.com/aptitude/problems-on-ages/",
      },
      {
        type: "Type 4",
        description: "Numericals to Determine Age of a Person after x Years",
        learnLink: "https://www.careerride.com/problem-on-ages.aspx",
        practiceLink: "https://www.indiabix.com/aptitude/problems-on-ages/",
      },
      // Additional rows for other age-related types as needed
    ],
  },
];

const profitLossTableData = [
  {
    title: "Profit & Loss",
    rows: [
      {
        type: "Type 1",
        description: "To find Profit/Loss or Selling Price/Cost Price",
        learnLink: "https://www.careerride.com/profit-and-loss-aptitude-test.aspx",
        practiceLink: "https://www.indiabix.com/aptitude/profit-and-loss/",
      },
      {
        type: "Type 2",
        description: "Calculate profit/loss if cost price of X articles is equal to selling price of Y articles. (C.P. of X articles = S.P. of Y articles)",
        learnLink: "https://www.careerride.com/profit-and-loss-aptitude-test.aspx",
        practiceLink: "https://www.indiabix.com/aptitude/profit-and-loss/",
      },
      {
        type: "Type 3",
        description: "Find loss incurred by the shopkeeper: a. Material A sold at x % gain and material B sold at x % loss. b. Material A sold at x % gain and material B sold at y % loss.",
        learnLink: "https://www.careerride.com/profit-and-loss-aptitude-test.aspx",
        practiceLink: "https://www.indiabix.com/aptitude/profit-and-loss/",
      },
      {
        type: "Type 4",
        description: "Trader sells goods at cost price but uses a weight of x kg instead of y kg (false weights) and makes profit. Calculate profit.",
        learnLink: "https://www.careerride.com/profit-and-loss-aptitude-test.aspx",
        practiceLink: "https://www.indiabix.com/aptitude/profit-and-loss/",
      },
      {
        type: "Type 5",
        description: "Numerical on Discount and Successive discounts/profit",
        learnLink: "https://www.careerride.com/profit-and-loss-aptitude-test.aspx",
        practiceLink: "https://www.indiabix.com/aptitude/profit-and-loss/",
      },
      // Additional rows for other Profit & Loss types as needed
    ],
  },
];

const ratioProportionTableData = [
  {
    title: "Ratio & Proportion",
    rows: [
      {
        type: "Type 1",
        description: "Proportion",
        learnLink: "https://www.careerride.com/ratio-and-proportion-aptitude-test.aspx",
        practiceLink: "https://www.indiabix.com/aptitude/ratio-and-proportion/",
      },
      {
        type: "Type 2",
        description: "Division and Distribution of objects into ratios",
        learnLink: "https://www.careerride.com/ratio-and-proportion-aptitude-test.aspx",
        practiceLink: "https://www.indiabix.com/aptitude/ratio-and-proportion/",
      },
      {
        type: "Type 3",
        description: "Mixture of different contents",
        learnLink: "https://www.careerride.com/ratio-and-proportion-aptitude-test.aspx",
        practiceLink: "https://www.indiabix.com/aptitude/ratio-and-proportion/",
      },
      {
        type: "Type 4",
        description: "Income/ Expenditure and Salary",
        learnLink: "https://www.careerride.com/ratio-and-proportion-aptitude-test.aspx",
        practiceLink: "https://www.indiabix.com/aptitude/ratio-and-proportion/",
      },
      {
        type: "Type 5",
        description: "Coins and Values",
        learnLink: "https://www.careerride.com/ratio-and-proportion-aptitude-test.aspx",
        practiceLink: "https://www.indiabix.com/aptitude/ratio-and-proportion/",
      },
      // Additional rows for other Ratio & Proportion types as needed
    ],
  },
];

const permutationCombinationTableData = [
  {
    title: "Permutation & Combination",
    rows: [
      {
        type: "Type 1",
        description: "Direct Permutation",
        learnLink: "https://www.careerride.com/permutations-and-combinations.aspx",
        practiceLink: "https://www.indiabix.com/aptitude/permutation-and-combination/",
      },
      {
        type: "Type 2",
        description: "Direct Combination",
        learnLink: "https://www.careerride.com/permutations-and-combinations.aspx",
        practiceLink: "https://www.indiabix.com/aptitude/permutation-and-combination/",
      },
      // Additional rows for other Permutation & Combination types as needed
    ],
  },
];

const probabilityTableData = [
  {
      title: "Probability",
      rows: [
          {
              type: "Type 1",
              description: "Probability given direct values with indirect statement",
              learnLink: "https://www.careerride.com/probability.aspx",
              practiceLink: "https://www.indiabix.com/aptitude/probability/",
          },
          {
              type: "Type 2",
              description: "Probability given indirect values",
              learnLink: "https://www.careerride.com/probability.aspx",
              practiceLink: "https://www.indiabix.com/aptitude/probability/",
          },
          // Additional rows for other Probability types can be added here
      ],
  },
];

const pipesAndCisternsTableData = [
  {
      title: "Pipes & Cisterns",
      rows: [
          {
              type: "Type 1",
              description: "Find the time to fill/ empty the tank by the pipes together for the given time of individual pipes",
              learnLink: "https://www.indiabix.com/aptitude/pipes-and-cistern/",
              practiceLink: "https://www.careerride.com/pipes-and-cistern-aptitude-test.aspx",
          },
          {
              type: "Type 2",
              description: "Find the capacity of tank for given <br /> a. time of each pipe to fill up a tank if they work alone and <br /> b. rate at which outlet pipe can empty the tank.",
              learnLink: "https://www.indiabix.com/aptitude/pipes-and-cistern/",
              practiceLink: "https://www.careerride.com/pipes-and-cistern-aptitude-test.aspx",
          },
          {
              type: "Type 3",
              description: "Find the time taken by leak to empty the tank for given <br /> a. time of pipe to fill a tank & <br /> b. time taken by leak to fill the tank due to leakage.",
              learnLink: "https://www.indiabix.com/aptitude/pipes-and-cistern/",
              practiceLink: "https://www.careerride.com/pipes-and-cistern-aptitude-test.aspx",
          },
          {
              type: "Type 4",
              description: "i. Find the time taken by two pipes to fill the tank if they work individually if it is given that <br /> a. one pipe is 'm' times faster/slower than another pipe and <br /> b. time taken by two pipes to fill the tank together. <br /> ii. Find the time taken to fill an empty tank for given <br /> a. time of each pipe to fill the tank separately and <br /> b. one of the pipes is full-time working and the other 2 pipes are open for certain hour alternately.",
              learnLink: "https://www.indiabix.com/aptitude/pipes-and-cistern/",
              practiceLink: "https://www.careerride.com/pipes-and-cistern-aptitude-test.aspx",
          },
          {
              type: "Type 5",
              description: "i. Find the time taken to fill the tank for given <br /> a. the time of inlet pipes to fill a tank if they work alone and the outlet pipe to empty a tank & <br /> b. all pipes are opened but outlet pipe is opened/closed after certain hours <br /> ii. Find the total time required to fill the tank if <br /> a. the time of each inlet pipe to fill the tank individually and <br /> b. all the pipes are opened simultaneously and after certain time, one of the pipes is turned off.",
              learnLink: "https://www.indiabix.com/aptitude/pipes-and-cistern/",
              practiceLink: "https://www.careerride.com/pipes-and-cistern-aptitude-test.aspx",
          },
          // Additional rows for other Pipes & Cisterns types can be added here
      ],
  },
];

const simpleInterestTableData = [
  {
    title: "Simple Interest",
    rows: [
      {
        type: "Type 1",
        description: "Find simple interest",
        learnLink: "https://www.indiabix.com/aptitude/simple-interest/",
        practiceLink: "https://www.careerride.com/simple-interest-aptitude-test.aspx",
      },
      {
        type: "Type 2",
        description: "Find rate of interest",
        learnLink: "https://www.indiabix.com/aptitude/simple-interest/",
        practiceLink: "https://www.careerride.com/simple-interest-aptitude-test.aspx",
      },
      {
        type: "Type 3",
        description: "Find principal or amount",
        learnLink: "https://www.indiabix.com/aptitude/simple-interest/",
        practiceLink: "https://www.careerride.com/simple-interest-aptitude-test.aspx",
      },
      // Additional rows for other Simple Interest types as needed
    ],
  },
];

const compoundInterestTableData = [
  {
    title: "Compound Interest",
    rows: [
      {
        type: "Type 1",
        description: "Numerical based on population",
        learnLink: "https://www.careerride.com/compound-interest.aspx",
        practiceLink: "https://www.indiabix.com/aptitude/compound-interest/",
      },
      {
        type: "Type 2",
        description: "Numerical to find compound interest (yearly, quarterly, and half-yearly)",
        learnLink: "https://www.careerride.com/compound-interest.aspx",
        practiceLink: "https://www.indiabix.com/aptitude/compound-interest/",
      },
      {
        type: "Type 3",
        description: "Numerical to find rate of interest/years",
        learnLink: "https://www.careerride.com/compound-interest.aspx",
        practiceLink: "https://www.indiabix.com/aptitude/compound-interest/",
      },
      {
        type: "Type 4",
        description: "Numerical to find sum/rate of interest when difference between C.I. and S.I. is specified",
        learnLink: "https://www.careerride.com/compound-interest.aspx",
        practiceLink: "https://www.indiabix.com/aptitude/compound-interest/",
      },
      // Additional rows for other Compound Interest types as needed
    ],
  },
];

// const someOtherProblemsTableData = [
//   {
//     title: "Some Other Problems",
//     rows: [
//       {
//         sgNo: 1,
//         description: "Discount",
//         learnLink: "https://www.careerride.com/true-discount.aspx",
//         practiceLink: "https://www.indiabix.com/aptitude/true-discount/",
//       },
//       {
//         sgNo: 2,
//         description: "Volume & Surface",
//         learnLink: "https://www.careerride.com/volume-and-surface-area.aspx",
//         practiceLink: "https://www.indiabix.com/aptitude/true-discount/",
//       },
//       {
//         sgNo: 3,
//         description: "Height and Distance",
//         learnLink: "https://www.careerride.com/height-and-distance-aptitude-test.aspx",
//         practiceLink: "https://www.indiabix.com/aptitude/height-and-distance/",
//       },
//       // Additional rows for other problems as needed
//     ],
//   },
// ];



const AptitudeSheet = () => {
  return (
    <div className="bg-blue-50 font-sans fade-in">
      <h1 className="text-4xl text-center text-white bg-gradient-to-r from-blue-700 to-blue-400 py-6 rounded-lg mb-8 shadow-lg">
        APTITUDE SHEET
      </h1>

      <div className="container mx-auto px-4">
        <Section title="Detailed Topics with Learning Resources">
          {averageTableData.map((table, index) => (
            <TopicTable key={index} title={table.title} rows={table.rows} />
          ))}
          {timeAndDistanceTableData.map((table, index) => (
            <TopicTable key={index} title={table.title} rows={table.rows} />
          ))}
          {lcmHcfTableData.map((table, index) => (
            <TopicTable key={index} title={table.title} rows={table.rows} />
          ))}
           {trainTableData.map((table, index) => (
            <TopicTable key={index} title={table.title} rows={table.rows} />
          ))}
          {ageTableData.map((table, index) => (
          <TopicTable key={index} title={table.title} rows={table.rows} />
          ))}
          {profitLossTableData.map((table, index) => (
          <TopicTable key={index} title={table.title} rows={table.rows} />
          ))}
          {ratioProportionTableData.map((table, index) => (
          <TopicTable key={index} title={table.title} rows={table.rows} />
          ))}
          {permutationCombinationTableData.map((table, index) => (
          <TopicTable key={index} title={table.title} rows={table.rows} />
          ))}
          {probabilityTableData.map((table, index) => (
          <TopicTable key={index} title={table.title} rows={table.rows} />
          ))}
          {pipesAndCisternsTableData.map((table, index) => (
          <TopicTable key={index} title={table.title} rows={table.rows} />
          ))}
          {simpleInterestTableData.map((table, index) => (
          <TopicTable key={index} title={table.title} rows={table.rows} />
          ))}
          {compoundInterestTableData.map((table, index) => (
          <TopicTable key={index} title={table.title} rows={table.rows} />
          ))}
          {/* {someOtherProblemsTableData.map((table, index) => (
          <TopicTable key={index} title={table.title} rows={table.rows} />
          ))} */}






        </Section>
      </div>
    </div>
  );
};


const Section = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="text-2xl text-blue-800 text-center border-b-2 border-blue-600 inline-block pb-2 animate-heading">
      {title}
    </h2>
    {children}
  </div>
);

const TopicTable = ({ title, rows }) => (
  <div className="mb-8">
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <table className="min-w-full bg-white rounded-lg shadow-lg overflow-hidden mt-4">
      <thead className="bg-blue-600 text-white">
        <tr>
          <th className="py-4">Type</th>
          <th className="py-4">Description</th>
          <th className="py-4">Learn</th>
          <th className="py-4">Practice</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, idx) => (
          <TableRow key={idx} {...row} />
        ))}
      </tbody>
    </table>
  </div>
);

const TableRow = ({ type, description, learnLink, practiceLink }) => (
  <tr className="even:bg-[#e0f7fa] hover:bg-[#b2ebf2] hover:scale-[1.02] transition-all">
    <td className="border p-4">{type}</td>
    <td className="border p-4" dangerouslySetInnerHTML={{ __html: description }} />
    <td className="border p-4">
      <a href={learnLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline animate-button">
        Learn
      </a>
    </td>
    <td className="border p-4">
      <a href={practiceLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline animate-button">
        Practice
      </a>
    </td>
  </tr>
);

export default AptitudeSheet;
