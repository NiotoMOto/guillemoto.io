export interface Skill {
  company: string;
  dates: Dates;
  position: string;
  desciption: string;
  mainSkills: string[];
}

interface Dates {
  start: string;
  end: string;
}
