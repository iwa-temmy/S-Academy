export const LEVEL_OPTIONS = [
  { name: "All", value: "all" },
  { name: "Beginner", value: "beginner" },
  { name: "Intermediate", value: "intermediate" },
  { name: "Professional", value: "professional" },
];

export const ADD_COURSE_STEP_ONE_VALIDATIONS = {
  name: {
    name: "Name",
    required: true,
  },
  image: {
    name: "Course Image",
    required: true,
  },
  description: {
    name: "Description",
    required: true,
  },
  category: {
    name: "Course Category",
    required: true,
  },
  tutor: {
    name: "Course Tutor",
    required: true,
  },
  level: {
    name: "Course level",
    required: true,
  },
  price: {
    name: "Price",
    required: true,
  },
  things_to_learn: {
    name: "Things that will be learnt",
    required: true,
  },
};
export const COURSES_DATA = [
  {
    id: 1,
    name: "Automate boring stuff with Python",
    tutor: "SmartComply",
    level: "Beginner",
    no_of_chapters: 5,
    no_of_topics: 4,
    price: 24500,
    published: true,
  },
  {
    id: 2,
    name: "The Ballad of lives forgone",
    tutor: "SmartComply",
    level: "Beginner",
    no_of_chapters: 5,
    no_of_topics: 4,
    price: 24500,
    published: false,
  },
];
export const ABOUT_CHAPTER_VALIDATIONS = {
  about: {
    name: "About",
    required: true,
    min: 10,
  },
};
