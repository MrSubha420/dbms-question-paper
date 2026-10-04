export const institute = {
  name: 'Narula Institute of Technology',
  accreditation: "NAAC 'A' Accredited",
  ranking: 'NIRF Ranked College',
}

export const paper = {
  subject: 'Database Management Systems',
  title: 'Internal Assessment Question Paper',
  time: '1 Hour',
  instructions: 'Answer all questions. Draw neat diagrams wherever required.',
  pdf: 'dbms_question_paper.pdf',
}

export const questions = [
  {
    id: 1,
    text: 'Compare RDBMS and NoSQL databases in terms of scalability and schema flexibility.',
    co: 'CO1', bt: 'BT2', marks: 5,
  },
  {
    id: 2,
    text: 'Design a complete E-R diagram for a Hospital Management System and convert it into relational tables.',
    co: 'CO2', bt: 'BT6', marks: 5,
  },
  {
    id: 3,
    text: 'Analyze how the Three Schema Architecture maintains data independence in a dynamic environment.',
    co: 'CO1', bt: 'BT4', marks: 5,
  },
  {
    id: 4,
    text: 'Consider the following relations and solve the queries using Relational Algebra:',
    schema: [
      { name: 'Student', attrs: [{ n: 'SID', pk: true }, { n: 'Name' }, { n: 'Dept' }, { n: 'Age' }] },
      { name: 'Course', attrs: [{ n: 'CID', pk: true }, { n: 'CName' }, { n: 'Credits' }] },
      { name: 'Enroll', attrs: [{ n: 'SID', pk: true }, { n: 'CID', pk: true }, { n: 'Grade' }] },
    ],
    parts: [
      "Find the names of students enrolled in the course with CID = 'DB101'.",
      "Retrieve the names of students who obtained grade 'A'.",
      'Find the names of students along with the names of courses they are enrolled in.',
    ],
    co: 'CO3', bt: 'BT3', marks: 5,
  },
  {
    id: 5,
    text: 'What is cardinality in DBMS? Explain its types.',
    co: 'CO2', bt: 'BT1', marks: 5,
  },
]

export const coKey = [
  { code: 'CO1', label: 'DBMS concepts and architecture' },
  { code: 'CO2', label: 'Data modelling (E-R model)' },
  { code: 'CO3', label: 'Relational model and algebra' },
]

export const btKey = [
  { code: 'BT1', label: 'Remember' },
  { code: 'BT2', label: 'Understand' },
  { code: 'BT3', label: 'Apply' },
  { code: 'BT4', label: 'Analyze' },
  { code: 'BT5', label: 'Evaluate' },
  { code: 'BT6', label: 'Create' },
]
