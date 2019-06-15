import * as numbers from './numbers'
import * as utils from './utils'

const _firstnamesFemale = [ 'Louise','Camille','Emma','Inès','Chloe','Sarah','Alice','Lea','Juliette','Jeanne','Eva','Clara','Lina','Anna','Charlotte','Mathilde','Marie','Manon','Lucie','Anaïs','Jade','Zoe','Nina','Lou','Clemence','Pauline','Lisa','Adèle','Gabrielle','Romane','Julia','Victoria','Emilie','Rose','Julie','Margaux','Lena','Victoire','Lola','Valentine','Agathe','Alix','Elisa','Elise','Margot','Yasmine','Laura','Noa','Sofia','Noemie','Heloïse','Sara','Apolline','Salome','Diane','Maya','Ambre','Elsa','Josephine','Capucine','Ava','Sasha','Eleonore','Iris','Fatoumata','Alicia','Eden','Mila','Nour','Andrea','Garance','Aya','Violette','Constance','Justine','Melissa','Oceane','Olivia','Esther','Ines','Luna','Suzanne','Mariam','Maëlys','Myriam','Sophie','Celia','Lila','Madeleine','Marion','Anouk','Stella','Eloïse','Charlie','Leonie','Chiara','Carla','Blanche','Faustine','Claire','Lily','Roxane','Maëlle','Alexandra','Elena','Daphne','Clementine','Lise','Ella','Aminata','Romy','Aïcha','Kenza','Sophia','Lilou','Marine','Celeste','Lyna','Paloma','Lucile','Salma','Maïa','Melina','Sixtine','Amelie','Imane','Eve','Anaëlle','Lilia','Selma','Alma','Amandine','Eugenie','Louna','Celine','Raphaëlle','Ninon','Naomi','Manel','Elodie','Jasmine','Solène','Helène','Hanna','Angèle','Rachel','Tess','Thaïs','Albane','Berenice','Morgane','Sirine','Maria','Hortense','Chloé','Ana','Awa','Mia','Rebecca','Marguerite','Giulia','Alexia','Aurore','Isaure','Estelle','Philippine','Hannah','Nora','Audrey','Shirel','Clarisse','Amina','Lana','Assia','Rania','Hawa','Judith','Penelope','Rosalie','Alienor','Elea','Flora','Axelle','Farah','Lili','Louison','Coline','Astrid','Caroline','Fanny','Angelina','Zelie','Maïssa','Fatima','Jessica','Maryam','Leane','Dina','Bintou','Candice','Maud','Cassandre','Elisabeth','Ariane','Mina','Inaya','Elia','Shana','Lara','Maeva','Kelly','Syrine','Laure','Fanta','Charline','Louisa','Flore','Melanie','Mona','Amira','Enora','Lison','Sonia','Maïmouna','Cecile','Colombe','Camelia','Ludivine','Brune','Naomie','Laetitia','Clotilde','Marwa','Sabrina','Prune','Irène','Sidonie','Bianca','Fatou','Yaël','Oumou','Anastasia','Chaïma','Alya','Tessa','Emmy','Anissa','Mahaut','Livia','Alyssa','Fleur','Domitille','Vanessa','Pia','Léa','Lydia','Emy','Tara','Hana','Oriane','Diana','Isabelle','Cassandra','Asma','Marianne','Emmanuelle','Cleo','Mariama','Aliya','Leïla','Maylis','Marilou','Paola','Dounia','Ashley','Amel','Bertille','Ilona','Ethel','Aïssatou','Leonore','Louane','Philomène','Grace','Maïlys','Marina','Thelma','Lilas','Mae','Olympe','Elina','Assa','Amelia','Meline','Talia','Loane','Sana','Joséphine','Anne','Helena' ]
const _firstnamesMale = [ 'Gabriel','Alexandre','Arthur','Adam','Raphaël','Louis','Paul','Antoine','Maxime','Thomas','Victor','Lucas','Jules','Nathan','Hugo','Sacha','Mohamed','Enzo','Gaspard','Clement','Samuel','Ethan','Leo','Adrien','Martin','Rayan','Baptiste','Yanis','Simon','Joseph','Mathis','Oscar','Alexis','Pierre','Noah','Axel','Theo','Romain','Valentin','Augustin','Julien','Nicolas','Maxence','Noe','Benjamin','Quentin','Tom','Charles','David','Jean','Eliott','Aaron','Elias','Matthieu','Tristan','Timothee','Mathieu','Matteo','William','Amine','Felix','Côme','Ruben','Ulysse','Antonin','Guillaume','Aurelien','Robin','Maël','Kevin','Mehdi','Ismaël','Liam','Gabin','Noam','Evan','Marius','Mathias','Isaac','Samy','Ibrahim','Basile','Daniel','Emile','Lucien','Elie','Rayane','Leonard','Thibault','Achille','Leon','Edouard','Hadrien','Lenny','Matheo','Malo','Titouan','Solal','Joshua','Max','Gregoire','Vincent','Youssef','Luca','Esteban','Yacine','Florian','Corentin','Amaury','Edgar','Yassine','Roman','Milo','Octave','Hector','Ahmed','Hippolyte','Dylan','Ayoub','Emmanuel','Nolan','Abel','Yann','Mamadou','Ali','Anatole','Etienne','Naël','Anis','Erwan','Stanislas','Theodore','Armand','Moussa','Marc','Ilyes','Theophile','Lorenzo','Ryan','Diego','Pablo','Nils','Rafael','Sofiane','Alex','Vadim','Amir','Kylian','Jeremy','Gustave','Arsène','Loïc','Leopold','Cesar','Elliot','Mateo','Wassim','Nino','Anthony','Jonathan','Anton','François','Dorian','Eliot','Remi','Milan','Mathys','Hamza','Marin','Henri','Maximilien','Ilian','Sami','Nathanaël','Nassim','Issa','Zakaria','Luc','Joachim','Bastien','Dimitri','Luka','Djibril','Ilan','Romeo','Olivier','Virgile','Kaïs','Auguste','Damien','Timothe','Noham','Alban','Bilal','Younes','Eric','Tiago','Souleymane','Omar','Zacharie','Eloi','Adem','Jonas','Matthias','Timeo','Balthazar','Ibrahima','Jacques','Rafaël','James','Walid','Mohammed','Karim','Aurèle','Abdoulaye','Julian','Anas','Adama','Yohan','Gaël','Ousmane','Georges','Raphael','Sam','Owen','Ambroise','Elyes','Aymeric','Adel','Dan','Jeremie','Cyprien','Lino','Aymen','Ariel','Christian','Ivan','Jean-Baptiste','Johan','Arnaud','Sebastien','Philippe','Marceau','Ange','Léo','Youssouf','Leandre','Lilian','Gauthier','Tony','Killian','Swann','Constantin','Alan','Mickaël','Benoît','Idriss','Niels','Clovis','Gaston','Marwan','Nael','Marcus','Jad','Naïm','Elyas','Ilyas','Ferdinand','Florent','Malik','Yannis','Justin','Mahamadou','Gaëtan','Adrian','Elio','Andy','Lukas','Karl','Aksel','Neil','Sandro','Ernest','Oumar','Kenzo','Sekou','Lassana','Marco','Xavier','Melvin','Thibaut','Robinson','Christophe','Jordan','Melvil','Aboubacar','Darius','Bilel','Ewen','Ilyès' ]
const _lastnames = [ 'Martin','Bernard','Thomas','Petit','Robert','Richard','Durand','Dubois','Moreau','Laurent','Simon','Michel','Lefebvre','Leroy','Roux','David','Bertrand','Morel','Fournier','Girard','Bonnet','Dupont','Lambert','Fontaine','Rousseau','Vincent','Muller','Lefevre','Faure','Andre','Mercier','Blanc','Guerin','Boyer','Garnier','Chevalier','Francois','Legrand','Gauthier','Garcia','Perrin','Robin','Clement','Morin','Nicolas','Henry','Roussel','Mathieu','Gautier','Masson','Marchand','Duval','Denis','Dumont','Marie','Lemaire','Noel','Meyer','Dufour','Meunier','Brun','Blanchard','Giraud','Joly','Riviere','Lucas','Brunet','Gaillard','Barbier','Arnaud','Martinez','Gerard','Roche','Renard','Schmitt','Roy','Leroux','Colin','Vidal','Caron','Picard','Roger','Fabre','Aubert','Lemoine','Renaud','Dumas','Lacroix','Olivier','Philippe','Bourgeois','Pierre','Benoit','Rey','Leclerc','Payet','Rolland','Leclercq','Guillaume','Lecomte','Lopez','Jean','Dupuy','Guillot','Hubert','Berger','Carpentier','Sanchez','Dupuis','Moulin','Louis','Deschamps','Huet','Vasseur','Perez','Boucher','Fleury','Royer','Klein','Jacquet','Adam','Paris','Poirier','Marty','Aubry','Guyot','Carre','Charles','Renault','Charpentier','Menard','Maillard','Baron','Bertin','Bailly','Herve','Schneider','Fernandez','Le Gall','Collet','Leger','Bouvier','Julien','Prevost','Millet','Perrot','Daniel','Le Roux','Cousin','Germain','Breton','Besson','Langlois','Remy','Le Goff','Pelletier','Leveque','Perrier','Leblanc','Barre','Lebrun','Marchal','Weber','Mallet','Hamon','Boulanger','Jacob','Monnier','Michaud','Rodriguez','Guichard','Gillet','Etienne','Grondin','Poulain','Tessier','Chevallier','Collin','Chauvin','Da Silva','Bouchet','Gay','Lemaitre','Benard','Marechal','Humbert','Reynaud','Antoine','Hoarau','Perret','Barthelemy','Cordier','Pichon','Lejeune','Gilbert','Lamy','Delaunay','Pasquier','Carlier','Laporte' ]
const domains = [ 'gmail.com', 'hotmail.com', 'yahoo.fr', 'wanadoo.fr', 'free.fr' ]

// Profile

export function firstname(gender = '') {
  if (gender !== 'm' && gender !== 'f')
    gender = (numbers.bool() ? 'm' : 'f')

  if (gender === 'f')
    return utils.oneOf(_firstnamesFemale)
  return utils.oneOf(_firstnamesMale)
};

export function lastname() {
  return utils.oneOf(_lastnames)
};

export function fullname(gender = '') {
  return `${firstname(gender)} ${lastname()}`
};

export function email({name = '', suffix = '.fake', domain = ''} = {}) {
  if (!name)
    name = fullname()
  name = name.toLowerCase()

  let [ firstname, lastname ] = name.split(' ', 2)
  if (!domain && numbers.bool())
    firstname = firstname[0]

  const sep = domain ? '.' : utils.oneOf(['.', '-', ''])
  name = `${firstname.replace(/[^\w]/, '')}${sep}${lastname.replace(/[^\w]/, '')}`
  if (!domain && numbers.bool(0.75))
    name += numbers.int({min: 12, max: 88})

  if (!domain)
    domain = utils.oneOf(domains)

  return `${name}@${domain}${suffix}`
}
