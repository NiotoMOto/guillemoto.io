export interface Skill {
  company: string;
  dates: Dates;
  position: string;
  shortDesciption: string;
  desciption: string;
  mainSkills: string[];
  slug: string;
}

interface Dates {
  start: string;
  end: string;
}
