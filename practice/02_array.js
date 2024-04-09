
const marvel = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel.push(dc_heros) : this pushes the dc_heros array as just single element for e.g. : ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]

// const hero = marvel.concat(dc_heros)
// console.log(hero);

const newHeros = [...marvel, ...dc_heros] // : "..." spreads/joins two or more arrays into one (e.g. think of a two glasses beging dropped and when it breaks it spreads.)
//console.log(newHeros);

const another_array = [1,2,3,[4,5,6],7,[7,8,[4,5]]]
const realArray = another_array.flat(Infinity) // takes in the depth (can be infinite)
//console.log(realArray);

const make_it_array = Array.from("Ritesh"); // converts the value "Ritesh" into an array
// console.log(make_it_array);