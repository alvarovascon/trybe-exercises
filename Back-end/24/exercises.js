// exercise 1
db.movies.find(
  {
    category: {
      $all: ["action", "adventure"]
    }
  }
).pretty();

// exercise 2
db.movies.find(
  {
    category: {
      $all: ["action"]
    },
    imdbRating: { $gt: 7 }
  }
).pretty();

// exercise 3
db.movies.updateOne(
  { title: "Batman" },
  {
    $push: {
      ratings: {
        $each: [85, 100, 102, 105]
      }
    }
  }
);

// exercise 4
db.movies.updateOne(
  { title: "Godzilla" },
  {
    $push: {
      ratings: {
        $each: [78, 52, 95, 102]
      }
    }
  }
);

// exercise 5
db.movies.updateOne(
  { title: "Home Alone" },
  {
    $push: {
      ratings: {
        $each: [200, 99, 65]
      }
    }
  }
);

// exercise 6
db.movies.find(
  {
    ratings: {
      $elemMatch: { $gt: 103 }
    }
  },
  {
    _id: 0,
    title: 1,
    ratings: 1
  }
).pretty();

// exercise 7
db.movies.find(
  {
    ratings: {
      $elemMatch: { $gte: 100, $lte: 105 }
    }
  },
  {
    _id: 0,
    title: 1,
    ratings: 1
  }
).pretty();

// exercise 8
db.movies.find(
  {
    ratings: {
      $elemMatch: { $gte: 64, $lte: 105, $mod: [9, 0] }
    }
  },
  {
    _id: 0,
    title: 1,
    ratings: 1
  }
).pretty();

// exercise 9
db.movies.find(
  {
    ratings: {
      $elemMatch: { $gt: 103 }
    },
    category: { $all: ["adventure"] }
  },
  {
    _id: 0,
    title: 1,
    ratings: 1,
    category: 1
  }
).pretty();

// exercise 10
db.movies.find(
  { category: { $size: 2 } },
  { _id: 0, title: 1 }
).pretty();

// exercise 11
db.movies.find(
  { ratings: { $size: 4 } },
  { _id: 0, title: 1 }
).pretty();

// exercise 12
db.movies.find(
  { budget: { $mod: [5, 0] } },
  { category: { $size: 2 } }
).pretty();

// exercise 13
db.movies.find(
  {
    $or: [
      { category: { $all: ["sci-fi"] } },
      { ratings: { $elemMatch: { $gt: 199 } } }
    ]
  },
  { _id: 0, title: 1, ratings: 1, category: 1 }
);

// exercise 14
db.movies.find({ $and: [
  { ratings: { $size: 4 } }, 
  { category: { $in: ["adventure", "family"] } },
  { imdbRating: { $gte: 7  }}
]});

// exercise 15
db.movies.updateOne(
  { title: "Batman" },
  {
    $set: {
      description: "The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker."
    }
  }
);

// exercicio 16
db.movies.updateOne(
  { title: "Godzilla" },
  {
    $set: {
      description: "The world is beset by the appearance of monstrous creatures, but one of them may be the only one who can save humanity."
    }
  }
);

// exercicio 17
db.movies.updateOne(
  { title: "Home Alone" },
  {
    $set: {
      description: "An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation."
    }
  }
);

// exercicio 18
db.movies.find(
  {
    description: {
      $regex: /^The/
    }
  }
).pretty();

// exercicio 19
db.movies.find(
  {
    description: {
      $regex: /humanity.$/
    }
  }
).pretty();

// exercicio 20
db.movies.createIndex({ description: "text" });

// exercicio 21
db.movies.find(
  {
    $text: {
      $search: "vacation"
    }
  }
).pretty();

// exercicio 22
db.movies.find(
  {
    $text: {
      $search: "monstrous criminal"
    }
  }
).pretty();

// exercicio 23
db.movies.find(
  {
    $text: {
      $search: "\"when he is accidentally\""
    }
  }
).pretty();

