(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global['fixtures-generator-node'] = {})));
}(this, (function (exports) { 'use strict';

var float = function float() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$min = _ref.min,
      min = _ref$min === undefined ? 0 : _ref$min,
      _ref$max = _ref.max,
      max = _ref$max === undefined ? 1 : _ref$max;

  return Math.random() * (max - min) + min;
};

var fixed = function fixed() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref2$min = _ref2.min,
      min = _ref2$min === undefined ? 0 : _ref2$min,
      _ref2$max = _ref2.max,
      max = _ref2$max === undefined ? Number.MAX_SAFE_INTEGER : _ref2$max,
      _ref2$decimals = _ref2.decimals,
      decimals = _ref2$decimals === undefined ? 2 : _ref2$decimals;

  return float({ min: min, max: max }).toFixed(decimals);
};

var integer = function integer() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref3$min = _ref3.min,
      min = _ref3$min === undefined ? 0 : _ref3$min,
      _ref3$max = _ref3.max,
      max = _ref3$max === undefined ? Number.MAX_SAFE_INTEGER : _ref3$max;

  min = Math.ceil(min);
  max = Math.floor(max) + 1;
  return Math.floor(float({ min: min, max: max }));
};

var boolean = function boolean() {
  var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref4$percent = _ref4.percent,
      percent = _ref4$percent === undefined ? 0.5 : _ref4$percent;

  return Math.random() > percent;
};



var numbers = Object.freeze({
	float: float,
	fixed: fixed,
	integer: integer,
	boolean: boolean
});

var list = function list(_ref) {
  var values = _ref.values;

  if (values.length < 1) return undefined;
  return values[Math.floor(Math.random() * values.length)];
};

var mask = function mask(_ref2) {
  var format = _ref2.format;

  var result = '';
  var array = format.split('');
  for (var i = 0; i < array.length; i++) {
    if (array[i] === '\\') {
      if (i === array.length - 1) return '#error#';
      result += array[i + 1];
      i++;
      continue;
    }

    if (array[i] === '[') {
      var values = [];
      i++;
      while (i < array.length - 1) {
        if (array[i] === ']') break;

        if (array[i] === '-') {
          if (values.length === 0 || i === array.length - 1 || array[i + 1] === ']' || format.charCodeAt(i - 1) >= format.charCodeAt(i + 1)) return '#error#';
          var c = format.charCodeAt(i - 1);
          while (c !== format.charCodeAt(i + 1)) {
            values.push(String.fromCharCode(c));
            c++;
          }
        } else {
          values.push(array[i]);
        }

        i++;
      }
      if (array[i] !== ']') return '#error';
      result += list({ values: values });
      continue;
    }

    if (!isNaN(array[i])) {
      result += integer({ min: 0, max: 9 });
      continue;
    }

    result += array[i];
  }
  return result;
};



var utils = Object.freeze({
	list: list,
	mask: mask
});

var objectDestructuringEmpty = function (obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
};









var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt. ut labore et dolore magna aliqua. Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat. Duis aute irure dolor reprehenderit voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim est laborum.'.toLowerCase().split(/\s*[,. ]\s*/).filter(function (w) {
  return w !== undefined && w.length > 0;
});

var loremWord = function loremWord() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  objectDestructuringEmpty(_ref);

  return list({ values: lorem });
};

var loremWords = function loremWords() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref2$min = _ref2.min,
      min = _ref2$min === undefined ? 5 : _ref2$min,
      _ref2$max = _ref2.max,
      max = _ref2$max === undefined ? 15 : _ref2$max,
      _ref2$sentence = _ref2.sentence,
      sentence = _ref2$sentence === undefined ? false : _ref2$sentence;

  var result = [];
  var count = Math.max(1, integer({ min: min, max: max }));

  while (count > 0) {
    result.push(loremWord());
    count--;
  }

  result[0] = result[0][0].toUpperCase() + result[0].slice(1);

  return result.join(' ') + (sentence ? '.' : '');
};

var loremSentences = function loremSentences() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref3$min = _ref3.min,
      min = _ref3$min === undefined ? 2 : _ref3$min,
      _ref3$max = _ref3.max,
      max = _ref3$max === undefined ? 4 : _ref3$max;

  var result = [];
  var count = Math.max(1, integer({ min: min, max: max }));

  while (count > 0) {
    result.push(loremWords({ sentence: true }));
    count--;
  }

  return result.join(' ');
};



var lorem$1 = Object.freeze({
	loremWord: loremWord,
	loremWords: loremWords,
	loremSentences: loremSentences
});

var timestamp = function timestamp() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$min = _ref.min,
      min = _ref$min === undefined ? Date.now() - 365 * 24 * 60 * 60 * 1000 : _ref$min,
      _ref$max = _ref.max,
      max = _ref$max === undefined ? Date.now() : _ref$max;

  return integer({ min: min, max: max });
};



var dates = Object.freeze({
	timestamp: timestamp
});

var fakeImageUrl = function fakeImageUrl() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$width = _ref.width,
      width = _ref$width === undefined ? 640 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? 480 : _ref$height,
      _ref$bg = _ref.bg,
      bg = _ref$bg === undefined ? '282828' : _ref$bg,
      _ref$fg = _ref.fg,
      fg = _ref$fg === undefined ? 'EAE0D0' : _ref$fg,
      _ref$text = _ref.text,
      text = _ref$text === undefined ? 'Fake Image' : _ref$text;

  return 'http://fakeimg.pl/' + width + 'x' + height + '/' + bg + '/' + fg + '/?text=' + text.replace(' ', '+');
};

var realImageUrl = function realImageUrl() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref2$width = _ref2.width,
      width = _ref2$width === undefined ? 640 : _ref2$width,
      _ref2$height = _ref2.height,
      height = _ref2$height === undefined ? 480 : _ref2$height,
      _ref2$type = _ref2.type,
      type = _ref2$type === undefined ? 'any' : _ref2$type,
      _ref2$filter = _ref2.filter,
      filter = _ref2$filter === undefined ? '' : _ref2$filter;

  return 'http://placeimg.com/' + width + '/' + height + '/' + type + '/' + filter;
};

var avatarUrl = function avatarUrl() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref3$gender = _ref3.gender,
      gender = _ref3$gender === undefined ? '' : _ref3$gender;

  if (gender !== 'm' && gender !== 'f') gender = boolean() ? 'm' : 'f';

  if (gender === 'f') return 'https://randomuser.me/api/portraits/women/' + integer({ min: 1, max: 99 }) + '.jpg';
  return 'https://randomuser.me/api/portraits/men/' + integer({ min: 1, max: 99 }) + '.jpg';
};



var images = Object.freeze({
	fakeImageUrl: fakeImageUrl,
	realImageUrl: realImageUrl,
	avatarUrl: avatarUrl
});

var firstnamesFemale = ['Louise', 'Camille', 'Emma', 'Inès', 'Chloe', 'Sarah', 'Alice', 'Lea', 'Juliette', 'Jeanne', 'Eva', 'Clara', 'Lina', 'Anna', 'Charlotte', 'Mathilde', 'Marie', 'Manon', 'Lucie', 'Anaïs', 'Jade', 'Zoe', 'Nina', 'Lou', 'Clemence', 'Pauline', 'Lisa', 'Adèle', 'Gabrielle', 'Romane', 'Julia', 'Victoria', 'Emilie', 'Rose', 'Julie', 'Margaux', 'Lena', 'Victoire', 'Lola', 'Valentine', 'Agathe', 'Alix', 'Elisa', 'Elise', 'Margot', 'Yasmine', 'Laura', 'Noa', 'Sofia', 'Noemie', 'Heloïse', 'Sara', 'Apolline', 'Salome', 'Diane', 'Maya', 'Ambre', 'Elsa', 'Josephine', 'Capucine', 'Ava', 'Sasha', 'Eleonore', 'Iris', 'Fatoumata', 'Alicia', 'Eden', 'Mila', 'Nour', 'Andrea', 'Garance', 'Aya', 'Violette', 'Constance', 'Justine', 'Melissa', 'Oceane', 'Olivia', 'Esther', 'Ines', 'Luna', 'Suzanne', 'Mariam', 'Maëlys', 'Myriam', 'Sophie', 'Celia', 'Lila', 'Madeleine', 'Marion', 'Anouk', 'Stella', 'Eloïse', 'Charlie', 'Leonie', 'Chiara', 'Carla', 'Blanche', 'Faustine', 'Claire', 'Lily', 'Roxane', 'Maëlle', 'Alexandra', 'Elena', 'Daphne', 'Clementine', 'Lise', 'Ella', 'Aminata', 'Romy', 'Aïcha', 'Kenza', 'Sophia', 'Lilou', 'Marine', 'Celeste', 'Lyna', 'Paloma', 'Lucile', 'Salma', 'Maïa', 'Melina', 'Sixtine', 'Amelie', 'Imane', 'Eve', 'Anaëlle', 'Lilia', 'Selma', 'Alma', 'Amandine', 'Eugenie', 'Louna', 'Celine', 'Raphaëlle', 'Ninon', 'Naomi', 'Manel', 'Elodie', 'Jasmine', 'Solène', 'Helène', 'Hanna', 'Angèle', 'Rachel', 'Tess', 'Thaïs', 'Albane', 'Berenice', 'Morgane', 'Sirine', 'Maria', 'Hortense', 'Chloé', 'Ana', 'Awa', 'Mia', 'Rebecca', 'Marguerite', 'Giulia', 'Alexia', 'Aurore', 'Isaure', 'Estelle', 'Philippine', 'Hannah', 'Nora', 'Audrey', 'Shirel', 'Clarisse', 'Amina', 'Lana', 'Assia', 'Rania', 'Hawa', 'Judith', 'Penelope', 'Rosalie', 'Alienor', 'Elea', 'Flora', 'Axelle', 'Farah', 'Lili', 'Louison', 'Coline', 'Astrid', 'Caroline', 'Fanny', 'Angelina', 'Zelie', 'Maïssa', 'Fatima', 'Jessica', 'Maryam', 'Leane', 'Dina', 'Bintou', 'Candice', 'Maud', 'Cassandre', 'Elisabeth', 'Ariane', 'Mina', 'Inaya', 'Elia', 'Shana', 'Lara', 'Maeva', 'Kelly', 'Syrine', 'Laure', 'Fanta', 'Charline', 'Louisa', 'Flore', 'Melanie', 'Mona', 'Amira', 'Enora', 'Lison', 'Sonia', 'Maïmouna', 'Cecile', 'Colombe', 'Camelia', 'Ludivine', 'Brune', 'Naomie', 'Laetitia', 'Clotilde', 'Marwa', 'Sabrina', 'Prune', 'Irène', 'Sidonie', 'Bianca', 'Fatou', 'Yaël', 'Oumou', 'Anastasia', 'Chaïma', 'Alya', 'Tessa', 'Emmy', 'Anissa', 'Mahaut', 'Livia', 'Alyssa', 'Fleur', 'Domitille', 'Vanessa', 'Pia', 'Léa', 'Lydia', 'Emy', 'Tara', 'Hana', 'Oriane', 'Diana', 'Isabelle', 'Cassandra', 'Asma', 'Marianne', 'Emmanuelle', 'Cleo', 'Mariama', 'Aliya', 'Leïla', 'Maylis', 'Marilou', 'Paola', 'Dounia', 'Ashley', 'Amel', 'Bertille', 'Ilona', 'Ethel', 'Aïssatou', 'Leonore', 'Louane', 'Philomène', 'Grace', 'Maïlys', 'Marina', 'Thelma', 'Lilas', 'Mae', 'Olympe', 'Elina', 'Assa', 'Amelia', 'Meline', 'Talia', 'Loane', 'Sana', 'Joséphine', 'Anne', 'Helena'];
var firstnamesMale = ['Gabriel', 'Alexandre', 'Arthur', 'Adam', 'Raphaël', 'Louis', 'Paul', 'Antoine', 'Maxime', 'Thomas', 'Victor', 'Lucas', 'Jules', 'Nathan', 'Hugo', 'Sacha', 'Mohamed', 'Enzo', 'Gaspard', 'Clement', 'Samuel', 'Ethan', 'Leo', 'Adrien', 'Martin', 'Rayan', 'Baptiste', 'Yanis', 'Simon', 'Joseph', 'Mathis', 'Oscar', 'Alexis', 'Pierre', 'Noah', 'Axel', 'Theo', 'Romain', 'Valentin', 'Augustin', 'Julien', 'Nicolas', 'Maxence', 'Noe', 'Benjamin', 'Quentin', 'Tom', 'Charles', 'David', 'Jean', 'Eliott', 'Aaron', 'Elias', 'Matthieu', 'Tristan', 'Timothee', 'Mathieu', 'Matteo', 'William', 'Amine', 'Felix', 'Côme', 'Ruben', 'Ulysse', 'Antonin', 'Guillaume', 'Aurelien', 'Robin', 'Maël', 'Kevin', 'Mehdi', 'Ismaël', 'Liam', 'Gabin', 'Noam', 'Evan', 'Marius', 'Mathias', 'Isaac', 'Samy', 'Ibrahim', 'Basile', 'Daniel', 'Emile', 'Lucien', 'Elie', 'Rayane', 'Leonard', 'Thibault', 'Achille', 'Leon', 'Edouard', 'Hadrien', 'Lenny', 'Matheo', 'Malo', 'Titouan', 'Solal', 'Joshua', 'Max', 'Gregoire', 'Vincent', 'Youssef', 'Luca', 'Esteban', 'Yacine', 'Florian', 'Corentin', 'Amaury', 'Edgar', 'Yassine', 'Roman', 'Milo', 'Octave', 'Hector', 'Ahmed', 'Hippolyte', 'Dylan', 'Ayoub', 'Emmanuel', 'Nolan', 'Abel', 'Yann', 'Mamadou', 'Ali', 'Anatole', 'Etienne', 'Naël', 'Anis', 'Erwan', 'Stanislas', 'Theodore', 'Armand', 'Moussa', 'Marc', 'Ilyes', 'Theophile', 'Lorenzo', 'Ryan', 'Diego', 'Pablo', 'Nils', 'Rafael', 'Sofiane', 'Alex', 'Vadim', 'Amir', 'Kylian', 'Jeremy', 'Gustave', 'Arsène', 'Loïc', 'Leopold', 'Cesar', 'Elliot', 'Mateo', 'Wassim', 'Nino', 'Anthony', 'Jonathan', 'Anton', 'François', 'Dorian', 'Eliot', 'Remi', 'Milan', 'Mathys', 'Hamza', 'Marin', 'Henri', 'Maximilien', 'Ilian', 'Sami', 'Nathanaël', 'Nassim', 'Issa', 'Zakaria', 'Luc', 'Joachim', 'Bastien', 'Dimitri', 'Luka', 'Djibril', 'Ilan', 'Romeo', 'Olivier', 'Virgile', 'Kaïs', 'Auguste', 'Damien', 'Timothe', 'Noham', 'Alban', 'Bilal', 'Younes', 'Eric', 'Tiago', 'Souleymane', 'Omar', 'Zacharie', 'Eloi', 'Adem', 'Jonas', 'Matthias', 'Timeo', 'Balthazar', 'Ibrahima', 'Jacques', 'Rafaël', 'James', 'Walid', 'Mohammed', 'Karim', 'Aurèle', 'Abdoulaye', 'Julian', 'Anas', 'Adama', 'Yohan', 'Gaël', 'Ousmane', 'Georges', 'Raphael', 'Sam', 'Owen', 'Ambroise', 'Elyes', 'Aymeric', 'Adel', 'Dan', 'Jeremie', 'Cyprien', 'Lino', 'Aymen', 'Ariel', 'Christian', 'Ivan', 'Jean-Baptiste', 'Johan', 'Arnaud', 'Sebastien', 'Philippe', 'Marceau', 'Ange', 'Léo', 'Youssouf', 'Leandre', 'Lilian', 'Gauthier', 'Tony', 'Killian', 'Swann', 'Constantin', 'Alan', 'Mickaël', 'Benoît', 'Idriss', 'Niels', 'Clovis', 'Gaston', 'Marwan', 'Nael', 'Marcus', 'Jad', 'Naïm', 'Elyas', 'Ilyas', 'Ferdinand', 'Florent', 'Malik', 'Yannis', 'Justin', 'Mahamadou', 'Gaëtan', 'Adrian', 'Elio', 'Andy', 'Lukas', 'Karl', 'Aksel', 'Neil', 'Sandro', 'Ernest', 'Oumar', 'Kenzo', 'Sekou', 'Lassana', 'Marco', 'Xavier', 'Melvin', 'Thibaut', 'Robinson', 'Christophe', 'Jordan', 'Melvil', 'Aboubacar', 'Darius', 'Bilel', 'Ewen', 'Ilyès'];
var lastnames = ['Martin', 'Bernard', 'Thomas', 'Petit', 'Robert', 'Richard', 'Durand', 'Dubois', 'Moreau', 'Laurent', 'Simon', 'Michel', 'Lefebvre', 'Leroy', 'Roux', 'David', 'Bertrand', 'Morel', 'Fournier', 'Girard', 'Bonnet', 'Dupont', 'Lambert', 'Fontaine', 'Rousseau', 'Vincent', 'Muller', 'Lefevre', 'Faure', 'Andre', 'Mercier', 'Blanc', 'Guerin', 'Boyer', 'Garnier', 'Chevalier', 'Francois', 'Legrand', 'Gauthier', 'Garcia', 'Perrin', 'Robin', 'Clement', 'Morin', 'Nicolas', 'Henry', 'Roussel', 'Mathieu', 'Gautier', 'Masson', 'Marchand', 'Duval', 'Denis', 'Dumont', 'Marie', 'Lemaire', 'Noel', 'Meyer', 'Dufour', 'Meunier', 'Brun', 'Blanchard', 'Giraud', 'Joly', 'Riviere', 'Lucas', 'Brunet', 'Gaillard', 'Barbier', 'Arnaud', 'Martinez', 'Gerard', 'Roche', 'Renard', 'Schmitt', 'Roy', 'Leroux', 'Colin', 'Vidal', 'Caron', 'Picard', 'Roger', 'Fabre', 'Aubert', 'Lemoine', 'Renaud', 'Dumas', 'Lacroix', 'Olivier', 'Philippe', 'Bourgeois', 'Pierre', 'Benoit', 'Rey', 'Leclerc', 'Payet', 'Rolland', 'Leclercq', 'Guillaume', 'Lecomte', 'Lopez', 'Jean', 'Dupuy', 'Guillot', 'Hubert', 'Berger', 'Carpentier', 'Sanchez', 'Dupuis', 'Moulin', 'Louis', 'Deschamps', 'Huet', 'Vasseur', 'Perez', 'Boucher', 'Fleury', 'Royer', 'Klein', 'Jacquet', 'Adam', 'Paris', 'Poirier', 'Marty', 'Aubry', 'Guyot', 'Carre', 'Charles', 'Renault', 'Charpentier', 'Menard', 'Maillard', 'Baron', 'Bertin', 'Bailly', 'Herve', 'Schneider', 'Fernandez', 'Le Gall', 'Collet', 'Leger', 'Bouvier', 'Julien', 'Prevost', 'Millet', 'Perrot', 'Daniel', 'Le Roux', 'Cousin', 'Germain', 'Breton', 'Besson', 'Langlois', 'Remy', 'Le Goff', 'Pelletier', 'Leveque', 'Perrier', 'Leblanc', 'Barre', 'Lebrun', 'Marchal', 'Weber', 'Mallet', 'Hamon', 'Boulanger', 'Jacob', 'Monnier', 'Michaud', 'Rodriguez', 'Guichard', 'Gillet', 'Etienne', 'Grondin', 'Poulain', 'Tessier', 'Chevallier', 'Collin', 'Chauvin', 'Da Silva', 'Bouchet', 'Gay', 'Lemaitre', 'Benard', 'Marechal', 'Humbert', 'Reynaud', 'Antoine', 'Hoarau', 'Perret', 'Barthelemy', 'Cordier', 'Pichon', 'Lejeune', 'Gilbert', 'Lamy', 'Delaunay', 'Pasquier', 'Carlier', 'Laporte'];
var emailDomains = ['gmail.com', 'hotmail.com', 'yahoo.fr', 'wanadoo.fr', 'free.fr'];

// Profile

var firstname = function firstname() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$gender = _ref.gender,
      gender = _ref$gender === undefined ? '' : _ref$gender;

  if (gender !== 'm' && gender !== 'f') gender = boolean() ? 'm' : 'f';

  if (gender === 'f') return list({ values: firstnamesFemale });
  return list({ values: firstnamesMale });
};

var lastname = function lastname() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  objectDestructuringEmpty(_ref2);

  return list({ values: lastnames });
};

var fullname = function fullname() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref3$gender = _ref3.gender,
      gender = _ref3$gender === undefined ? '' : _ref3$gender;

  return firstname({ gender: gender }) + ' ' + lastname();
};

var email = function email() {
  var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref4$fullname = _ref4.fullname,
      fullname = _ref4$fullname === undefined ? '' : _ref4$fullname,
      _ref4$prefix = _ref4.prefix,
      prefix = _ref4$prefix === undefined ? 'fake.' : _ref4$prefix,
      _ref4$domain = _ref4.domain,
      domain = _ref4$domain === undefined ? '' : _ref4$domain;

  if (!fullname) fullname = fullname();
  fullname = fullname.toLowerCase();

  var _fullname$split = fullname.split(' ', 2),
      _fullname$split2 = slicedToArray(_fullname$split, 2),
      firstname = _fullname$split2[0],
      lastname = _fullname$split2[1];

  if (!domain && boolean()) firstname = firstname[0];

  var sep = domain ? '.' : list({ values: ['.', '-', ''] });
  fullname = '' + firstname.replace(/[^\w]/, '') + sep + lastname.replace(/[^\w]/, '');
  if (!domain && boolean({ percent: 0.75 })) fullname += integer({ min: 12, max: 88 });

  if (!domain) domain = list({ values: emailDomains });

  return fullname + '@' + prefix + domain;
};



var profile = Object.freeze({
	firstname: firstname,
	lastname: lastname,
	fullname: fullname,
	email: email
});

var memorized = [];

var memorize = function memorize(value) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  objectDestructuringEmpty(_ref);

  if (!isMemorized(value)) memorized.push(value);
  return value;
};

var isMemorized = function isMemorized(value) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  objectDestructuringEmpty(_ref2);

  return memorized.includes(value);
};

var getOneMemorized = function getOneMemorized() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref3$forget = _ref3.forget,
      forget = _ref3$forget === undefined ? false : _ref3$forget;

  var index = integer({ max: memorized.length - 1 });
  var value = memorized[index];
  if (forget) forgetOneMemorized(value);
  return value;
};

var getAllMemorized = function getAllMemorized() {
  var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref4$forget = _ref4.forget,
      forget = _ref4$forget === undefined ? false : _ref4$forget;

  var array = [].concat(memorized);
  if (forget) exports.forgetAllMemorized();
  return array;
};

var forgetOneMemorized = function forgetOneMemorized(value) {
  var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  objectDestructuringEmpty(_ref5);

  memorized = memorized.filter(function (v) {
    return v !== value;
  });
};

var forgetAllMemorized = function forgetAllMemorized() {
  var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  objectDestructuringEmpty(_ref6);

  memorized = [];
};



var mem = Object.freeze({
	memorize: memorize,
	isMemorized: isMemorized,
	getOneMemorized: getOneMemorized,
	getAllMemorized: getAllMemorized,
	forgetOneMemorized: forgetOneMemorized,
	forgetAllMemorized: forgetAllMemorized
});

exports.numbers = numbers;
exports.utils = utils;
exports.lorem = lorem$1;
exports.dates = dates;
exports.images = images;
exports.profile = profile;
exports.mem = mem;

Object.defineProperty(exports, '__esModule', { value: true });

})));
