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

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

// console.table(allLessons);

const getStudentsNumber = (obj) => {
  n = 0;
  for (lesson in obj) {
    n += obj[lesson].numeroEstudantes;
  }
  return n;
};

// console.log(getStudentsNumber(allLessons));

const getValueByNumber = (lesson, index) => {
  const keys = Object.values(lesson);
  return keys[index];
}

// console.log(getValueByNumber(lesson1, 0));