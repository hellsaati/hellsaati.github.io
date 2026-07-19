export const sections = [
  {
    id: "intro",
    numeral: "I",
    title: "Giriş",
    lessons: [
      { id:  0, num: "00", slug: "hs00", title: "Olimpiada mühitinə giriş", level: "Easy", duration: "45 min", problems: 0, tags: ["C++", "Dəyişənlər", "Data Tipləri"], prereqs: [], docs: "/docs/hs00" },
      { id:  1, num: "Extra", slug: "hs01", title: "Compiler və Code Editorlar", level: "Easy", duration: "60 min", problems: 0, tags: ["Code Editor", "Compiler"], prereqs: [0], docs: "/docs/hs01" },
    ],
  },
  {
    id: "basics",
    numeral: "II",
    title: "Proqramlaşdırma əsasları",
    lessons: [
      { id:  2, num: "01", slug: "hs02", title: "Şərt operatorları", level: "Easy", duration: "60 min", problems: 8, tags: ["if", "else", "məntiqi operatorlar"], prereqs: [0], docs: "/docs/hs02" },
      { id:  3, num: "02", slug: "hs03", title: "Dövrlər: for və while", level: "Easy", duration: "60 min", problems: 8, tags: ["for", "while", "break", "continue"], prereqs: [2], docs: "/docs/hs03" },
      { id:  4, num: "03", slug: "hs04", title: "İç-içə dövrlər", level: "Easy", duration: "60 min", problems: 6, tags: ["nested loops", "pattern"], prereqs: [3], docs: "/docs/hs04" },
    ],
  },
  {
    id: "arrays",
    numeral: "III",
    title: "Massivlər və funksiyalar",
    lessons: [
      { id:  5, num: "04", slug: "hs05", title: "Massivlər: əsaslar", level: "Easy", duration: "60 min", problems: 6, tags: ["array", "index", "input"], prereqs: [4], docs: "/docs/hs05" },
      { id:  6, num: "05", slug: "hs06", title: "Massiv üzərində əməliyyatlar", level: "Easy", duration: "60 min", problems: 6, tags: ["sum", "min", "max", "count"], prereqs: [5], docs: "/docs/hs06" },
      { id:  7, num: "06", slug: "hs07", title: "Massivlərlə iş", level: "Easy", duration: "60 min", problems: 6, tags: ["reverse", "shift", "ikinci maksimum"], prereqs: [6], docs: "/docs/hs07" },
      { id:  8, num: "07", slug: "hs08", title: "Funksiyalar", level: "Easy", duration: "60 min", problems: 6, tags: ["functions", "qlobal/lokal", "reference"], prereqs: [7], docs: "/docs/hs08" },
      { id:  9, num: "08", slug: "hs09", title: "Simvollar və stringlər", level: "Easy", duration: "60 min", problems: 8, tags: ["char", "ASCII", "string"], prereqs: [8], docs: "/docs/hs09" },
    ],
  },
  {
    id: "math-io",
    numeral: "IV",
    title: "Riyaziyyat, I/O və üsullar",
    lessons: [
      { id: 10, num: "09", slug: "hs10", title: "Sadə riyaziyyat", level: "Normal", duration: "60 min", problems: 6, tags: ["mod", "rəqəmlər", "həndəsi düsturlar"], prereqs: [4], docs: "/docs/hs10" },
      { id: 11, num: "10", slug: "hs11", title: "2D massivlər", level: "Normal", duration: "60 min", problems: 6, tags: ["matrix", "sətir/sütun"], prereqs: [7], docs: "/docs/hs11" },
      { id: 12, num: "11", slug: "hs12", title: "Sürətli I/O və format", level: "Normal", duration: "60 min", problems: 4, tags: ["fast io", "precision", "fixed"], prereqs: [9], docs: "/docs/hs12" },
      { id: 13, num: "12", slug: "hs13", title: "Sadə sıralamalar", level: "Normal", duration: "60 min", problems: 5, tags: ["selection sort", "insertion sort"], prereqs: [7], docs: "/docs/hs13" },
      { id: 14, num: "13", slug: "hs14", title: "Məsələ oxuma və debugging", level: "Normal", duration: "60 min", problems: 4, tags: ["kənar hallar", "test", "debug"], prereqs: [3], docs: "/docs/hs14" },
    ],
  },
  {
    id: "stl",
    numeral: "V",
    title: "STL",
    lessons: [
      { id: 15, num: "14", slug: "hs15", title: "STL: vector", level: "Normal", duration: "60 min", problems: 6, tags: ["vector", "push_back", "size"], prereqs: [7], docs: "/docs/hs15" },
      { id: 16, num: "15", slug: "hs16", title: "Stack, queue və deque", level: "Normal", duration: "60 min", problems: 6, tags: ["stack", "queue", "deque"], prereqs: [15], docs: "/docs/hs16" },
      { id: 17, num: "16", slug: "hs17", title: "sort() və comparator-lar", level: "Normal", duration: "60 min", problems: 6, tags: ["sort", "comparator", "pair"], prereqs: [15, 13], docs: "/docs/hs17" },
      { id: 18, num: "17", slug: "hs18", title: "Set və map", level: "Normal", duration: "60 min", problems: 8, tags: ["set", "map", "multiset"], prereqs: [17], docs: "/docs/hs18" },
      { id: 19, num: "18", slug: "hs19", title: "Heap və priority queue", level: "Normal", duration: "60 min", problems: 5, tags: ["heap", "priority_queue"], prereqs: [18], docs: "/docs/hs19" },
      { id: 20, num: "19", slug: "hs20", title: "Binary search", level: "Normal", duration: "60 min", problems: 8, tags: ["binary search", "lower_bound"], prereqs: [17], docs: "/docs/hs20" },
    ],
  },
  {
    id: "search-dp",
    numeral: "VI",
    title: "Axtarış, rekursiya və DP",
    lessons: [
      { id: 21, num: "20", slug: "hs21", title: "Tam axtarış (brute force)", level: "Normal", duration: "60 min", problems: 6, tags: ["complete search", "subsets"], prereqs: [8, 15], docs: "/docs/hs21" },
      { id: 22, num: "21", slug: "hs22", title: "Rekursiya və backtracking", level: "Hard", duration: "60 min", problems: 6, tags: ["recursion", "backtracking"], prereqs: [21], docs: "/docs/hs22" },
      { id: 23, num: "22", slug: "hs23", title: "Memoization və 1D DP", level: "Hard", duration: "60 min", problems: 8, tags: ["dp", "memoization"], prereqs: [22], docs: "/docs/hs23" },
      { id: 24, num: "23", slug: "hs24", title: "Prefix sums", level: "Normal", duration: "60 min", problems: 6, tags: ["prefix sums", "2D prefix"], prereqs: [11, 15], docs: "/docs/hs24" },
      { id: 25, num: "24", slug: "hs25", title: "Two pointers", level: "Normal", duration: "60 min", problems: 6, tags: ["two pointers", "sliding window"], prereqs: [17], docs: "/docs/hs25" },
    ],
  },
  {
    id: "misc",
    numeral: "VII",
    title: "Greedy, həndəsə və hash",
    lessons: [
      { id: 26, num: "25", slug: "hs26", title: "Həndəsə: intervallar, düzbucaqlılar", level: "Normal", duration: "60 min", problems: 5, tags: ["intervals", "rectangles", "koordinatlar"], prereqs: [10], docs: "/docs/hs26" },
      { id: 27, num: "26", slug: "hs27", title: "Greedy alqoritmlər", level: "Hard", duration: "60 min", problems: 6, tags: ["greedy", "exchange argument"], prereqs: [17], docs: "/docs/hs27" },
      { id: 28, num: "27", slug: "hs28", title: "GCD, LCM və sadə ədədlər", level: "Normal", duration: "60 min", problems: 6, tags: ["gcd", "lcm", "primes"], prereqs: [10], docs: "/docs/hs28" },
      { id: 29, num: "28", slug: "hs29", title: "Hashing: unordered set və map", level: "Hard", duration: "60 min", problems: 6, tags: ["hash", "unordered_map"], prereqs: [18], docs: "/docs/hs29" },
    ],
  },
];

export const lessons = sections.flatMap((s) =>
  s.lessons.map((l) => ({ ...l, section: s.title, sectionId: s.id }))
);

export function getLesson(id) {
  return lessons.find((l) => l.id === id);
}
