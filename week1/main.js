const links = [
    {
      label: "Week1 notes",
      url: "https://awe19001.github.io/WDD330/"
    }
  ]

  const dice = {
    sides: 6,
    roll() {
      return Math.floor(this.sides * Math.random()) + 1;
    }
  };
  
  console.log(dice.roll());
  //how does this even work?
  console.log(Math.random());
  //random number from 0 - 1.
  console.log(Math.floor(Math.random()));
  //hmm...always gives 0
  console.log(Math.floor(Math.random()) + 1);
  //always 1
  console.log(Math.floor(2 * Math.random()));
  //ahh...number from 0-1, so if we add 1 we will get the expected 1-2
  console.log(Math.floor(2 * Math.random()) + 1);
  
  //namespacing
  const myMaths = {
    square(x) {
      return x * x;
    },
    mean(array, callback) {
      if (callback) {
        array.map(callback);
      }
      const total = array.reduce((a, b) => a + b);
      return total / array.length;
    }
  };
  //myMaths.js

  const superman = {
    name: 'Superman',
    'real name': 'Clark Kent',
    height: 75,
    weight: 235,
    hero: true,
    villain: false,
    allies: ['Batman', 'Supergirl', 'Superboy'],
    fly() {
      return 'Up, up and away!';
    }
  };
  
  const spiderman = {}; //preferred way to create an object literal
  
  //const spiderman = new Object(); the other way...I can't have both of these active or I get an error.
  
  const name = 'Iron Man';
  const realName = 'Tony Stark';
  
  // long way this creates and adds values to the object in one shot.
  //const ironMan = { name: name, realName: realName };
  
  // short ES6 way This only works if my property names are the same as the variable names I provide.
  const ironMan = { name, realName };
  
  //accessing properties
  //dot notation
  console.log(superman.name);
  
  //can do this too but dots are more common (shorter to type)
  console.log(superman['name']);
  //reason to use bracket notation...can't do this with a dot
  console.log(superman['real' + ' ' + 'name']);
  //I wonder if this works
  console.log(superman['height' + 'lbs']);
  //nope!
  console.log(superman['height'] + 'lbs');
  //There we go!
  
  //calling methods
  console.log(superman.fly());
  
  //looping through an object
  for (const key in superman) {
    console.log(key + ': ' + superman[key]);
  }
  
  //add a property
  superman.city = 'Metropolis';
  
  //output the object again to see if it worked
  for (const key in superman) {
    console.log(key + ': ' + superman[key]);
  }
  
  //hmm...it might be nice if I could output any object easily...I wonder how hard it woul dbe to turn that into a function
  function outputObject(objectName) {
    for (const key in objectName) {
      if (objectName.hasOwnProperty(key)) {
        //check to make sure the object has the key
        console.log(key + ': ' + objectName[key]);
      }
    }
  }
  
  console.log(outputObject(superman));
  console.log(outputObject(ironMan));
  //works!  of course just figured out I can type 'superman' directly in the console and see the same thing!
  
  const jla = {
    superman: { realName: 'Clark Kent' }, //I thought I made a superman object above. why didn't this give me an error?
    batman: { realName: 'Bruce Wayne' },
    wonderWoman: { realName: 'Diana Prince' },
    flash: { realName: 'Barry Allen' },
    aquaman: { realName: 'Arthur Curry' }
  };
  
  console.log(jla.wonderWoman.realName);
  //can link dots together to drill into the object
  //and apparently "jla.superman" is a different object than just plain "superman".  That was why no error above. I wonder if I can use my "superman" object to initialize my jla.superman?

  
  //superObjects.js