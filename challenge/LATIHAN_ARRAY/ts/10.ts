// =============================
// 1. Interface Return Structure
// =============================

interface Statistics {
  sum: number;
  average: number;
  min: number;
  max: number;
  median: number | null;
  mode: number | null;
}

interface Transformations {
  doubled: number[];
  squared: number[];
  filtered: number[];
  reversed: number[];
}

interface Sorted {
  ascending: number[];
  descending: number[];
}

interface Validation {
  allNumbers: boolean;
  hasNegatives: boolean;
  hasZeros: boolean;
  hasDuplicates: boolean;
}

interface ArrayAnalyzerResult {
  original: number[];
  length: number;
  statistics: Statistics;
  transformations: Transformations;
  sorted: Sorted;
  validation: Validation;
}

// =============================
// 2. Type Function Definition
// =============================

type ArrayAnalyzerFunction = (arr: number[]) => ArrayAnalyzerResult;

// =============================
// 3. Arrow Function Implementation
// =============================

const arrayAnalyzer: ArrayAnalyzerFunction = (arr) => {
  const original = [...arr];
  const length = arr.length;

  // Statistik
  const sum = arr.reduce((acc, val) => acc + val, 0);
  const average = length > 0 ? +(sum / length).toFixed(2) : 0;
  const min = length > 0 ? Math.min(...arr) : 0;
  const max = length > 0 ? Math.max(...arr) : 0;

  // Median
  const sorted = [...arr].sort((a, b) => a - b);
  let median: number | null;

  if (length === 0) {
    median = null;
  } else if (length % 2 === 0) {
    median = (sorted[length / 2 - 1] + sorted[length / 2]) / 2;
  } else {
    median = sorted[Math.floor(length / 2)];
  }

  // Mode
  const frequency: Record<number, number> = {};
  let maxFreq = 0;
  let mode: number | null = null;

  arr.forEach((num) => {
    frequency[num] = (frequency[num] || 0) + 1;

    if (frequency[num] > maxFreq) {
      maxFreq = frequency[num];
      mode = num;
    }
  });

  if (maxFreq === 1) mode = null;

  // Transformasi
  const doubled = arr.map((x) => x * 2);
  const squared = arr.map((x) => x ** 2);
  const filtered = arr.filter((x) => x > 4);
  const reversed = [...arr].reverse();

  // Sorting
  const sortedAsc = [...arr].sort((a, b) => a - b);
  const sortedDesc = [...arr].sort((a, b) => b - a);

  // Validasi
  const allNumbers = arr.every((x) => typeof x === "number");
  const hasNegatives = arr.some((x) => x < 0);
  const hasZeros = arr.some((x) => x === 0);
  const hasDuplicates = new Set(arr).size !== arr.length;

  return {
    original,
    length,
    statistics: {
      sum,
      average,
      min,
      max,
      median,
      mode,
    },
    transformations: {
      doubled,
      squared,
      filtered,
      reversed,
    },
    sorted: {
      ascending: sortedAsc,
      descending: sortedDesc,
    },
    validation: {
      allNumbers,
      hasNegatives,
      hasZeros,
      hasDuplicates,
    },
  };
};

// =============================
// 4. Driver Code
// =============================

const data: number[] = [5, 2, 8, 1, 9, 3];
const result = arrayAnalyzer(data);

console.log(result);
