export interface JobPosition {
  id: number;
  title: string;
  location: string;
  department:
    | "Product & Technology"
    | "Marketing & Media"
    | "AI & Automation"
    | "People & Learning"
    | "Operations";
  employmentType?: string;
}

export const DUMMY_JOBS: JobPosition[] = [
  {
    id: 1,
    title: "Web Developer Intern",
    location: "Remote · Indonesia",
    department: "Product & Technology",
    employmentType: "Internship",
  },
  {
    id: 2,
    title: "UI/UX Designer Intern",
    location: "Remote · Indonesia",
    department: "Product & Technology",
    employmentType: "Internship",
  },
  {
    id: 3,
    title: "Front-End Developer Intern",
    location: "Remote · Indonesia",
    department: "Product & Technology",
    employmentType: "Internship",
  },
  {
    id: 4,
    title: "Back-End Developer Intern",
    location: "Remote · Indonesia",
    department: "Product & Technology",
    employmentType: "Internship",
  },
  {
    id: 5,
    title: "Graphic Designer Intern",
    location: "Remote · Indonesia",
    department: "Marketing & Media",
    employmentType: "Internship",
  },
  {
    id: 6,
    title: "Content Creator Intern",
    location: "Remote · Indonesia",
    department: "Marketing & Media",
    employmentType: "Internship",
  },
  {
    id: 7,
    title: "AI Automation Intern",
    location: "Remote · Indonesia",
    department: "AI & Automation",
    employmentType: "Internship",
  },
  {
    id: 8,
    title: "People & Learning Intern",
    location: "Remote · Indonesia",
    department: "People & Learning",
    employmentType: "Internship",
  },
  {
    id: 9,
    title: "Operations Intern",
    location: "Remote · Indonesia",
    department: "Operations",
    employmentType: "Internship",
  },
  {
    id: 10,
    title: "Data Analyst Intern",
    location: "Remote · Indonesia",
    department: "Product & Technology",
    employmentType: "Internship",
  },
];

export const DEPARTMENT_OPTIONS = [
  "All Departments",
  "Product & Technology",
  "Marketing & Media",
  "AI & Automation",
  "People & Learning",
  "Operations",
] as const;
