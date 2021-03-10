// exercicio 1
db.heroes.findOne();

// exercicio 2
db.heroes.find({"aspects.height": {$lt: 180}});

// exercicio 3
db.heroes.count({"aspects.height": {$lt: 180}});

// exercicio 4
db.heroes.count({"aspects.height": {$lte: 180}});

// exercicio 5
db.heroes.findOne({"aspects.height": {$gte: 200}});

// exercicio 6
db.heroes.count({"aspects.height": {$gte: 200}});

// exercicio 7
db.heroes.find({"aspects.eyeColor": "green"});

// exercicio 8
db.heroes.count({"aspects.eyeColor": "blue"});

// exercicio 9
db.heroes.find({"aspects.hairColor": {$in:["black", "No Hair"]}});

// exercicio 10
db.heroes.count({"aspects.hairColor": {$in:["black", "No Hair"]}});

// exercicio 11
db.heroes.count({"aspects.hairColor": {$nin:["black", "No Hair"]}});

// exercicio 12
db.heroes.count({"aspects.height": {$not:{$gt: 180}}});

// exercicio 13
db.heroes.count({$nor: [{"aspects.height": {$gt: 180}}, {race: "Human"}]});

// exercicio 14
db.heroes.find({$and: [{"aspects.height": {$in: [180, 200]}}, {publisher: "Marvel Comics"}]});

// exercicio 15
db.heroes.find({
  and: [
    {
      "aspects.weight": { $gte: 80, $lte: 100 }
    },
    {
      or: [{ race: "Human" }, { race: "Mutant" }]
    },
    {
      publisher: { $ne: "DC Comics" }
    }
  ]
});

// exercicio 16
db.heroes.count(
  { race: { $exists: false } }
);

// exercicio 17
db.heroes.count(
  { "aspects.hairColor": { $exists: true } }
);

// exercicio 18
db.heroes.deleteOne(
  { publisher: "Sony Pictures" }
);

// exercicio 19
db.heroes.deleteMany(
  { publisher: "George Lucas" }
);


