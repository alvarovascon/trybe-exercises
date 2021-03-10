// exercicio 1
db.bios.find({ _id: 8 })

// exercicio 2
db.bios.find({ _id: 8 }, {name:1})

// exercicio 3
db.bios.find({ _id: 8 }, { name:1, birth:1, _id:0 })

// exercicio 4
db.bios.find({ "name.first": "John" }).pretty()

// exercicio 5
db.bios.find().limit(3)

// exercicio 6
db.bios.find().limit(2).skip(5)

// exercicio 7
// após comando use class:
db.books.count()

// exercicio 8
db.books.count(
  { status: "PUBLISH" }
)

// exercicio 9
db.books.find({}, {title:1, isbn:1, pageCount:1, _id:0}).limit(3)

// exercicio 10
db.books.find(
  {
      status: "MEAP"
  },
  {
      title: 1,
      authors: 1,
      status: 1
  }
).skip(5).limit(10)