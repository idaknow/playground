// note; this is way over-complicated for what it needs to be
// i just used this file to practice types

type Location = "University of Auckland" | "McGill University";
type City = "Auckland" | "Montreal";
type Country = "NZ" | "Ca";

enum Level {
  Bachelor,
}

interface Degree {
  level: Level;
  faculty: "Engineering" | "Science";
  major: "Software" | "Psychology";
}

interface GenericQualification {
  location: Location;
  city: City;
  country: Country;
  start: string;
  end?: string;
}

interface Qualification extends GenericQualification {
  degree: Degree;
}

export const qualifications: (GenericQualification | Qualification)[] = [
  {
    start: "2014",
    end: "2019",
    city: "Auckland",
    country: "NZ",
    degree: {
      level: Level.Bachelor,
      faculty: "Engineering",
      major: "Software",
    },
    location: "University of Auckland",
  },
  {
    start: "2014",
    end: "2019",
    city: "Auckland",
    country: "NZ",
    degree: {
      level: Level.Bachelor,
      faculty: "Engineering",
      major: "Software",
    },
    location: "University of Auckland",
  },
  {
    start: "2017",
    city: "Montreal",
    country: "Ca",
    degree: {
      level: Level.Bachelor,
      faculty: "Science",
      major: "Psychology",
    },
    location: "McGill University",
  },
];
