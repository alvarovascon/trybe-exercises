const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addTurn = (obj, key, value) => obj[key] = value;

addTurn(lesson2, 'turno', 'manhã');

// console.log(lesson2);

const listKeys = (objToBeListed) => console.log(Object.keys(objToBeListed));

// listKeys(lesson1);

const objLength = (obj) => console.log(Object.keys(obj).length);

// objLength(lesson2);

const objValues = (obj) => console.log(Object.values(obj));

// objValues(lesson1);

const allLessons = {};

allLessons.lesson1 = lesson1;
allLessons.lesson2 = lesson2;
allLessons.lesson3 = lesson3;

console.log(allLessons);

