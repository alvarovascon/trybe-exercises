
    const fs = require('fs');

    fs.promises.readFile('simpsons.json', 'utf-8')
      .then((content) => {
        const simpsons = JSON.parse(content);
        simpsons.forEach(({ id, name }) => {
          console.log(`${ id } - ${ name }`);
        })
        .catch(err => console.log(err.message));
      });
