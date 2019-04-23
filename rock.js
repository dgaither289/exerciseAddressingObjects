

// var correctAnswer =  prompt("Pick! rock, papper, scissors");
// console.log(correctAnswer)


// var pc = Math.floor(Math.random()*2)

// var pcanswer = null


// if (pc == 1 ){
//  	pcanswer ="rock";
//  }
//  else if (pc == 2 ){
//  	pcanswer = "papper";
//  }
//  else {
//  	pcanswer = "scissors"
//  }
//  console.log(pcanswer)
 

//   if (pcanswer === correctAnswer) {
//   	console.log("Its a Darw")
//   } 
//   if (pcanswer === "rock"){
//   	if  (correctAnswer === "papper") {
//   		console.log("Player Wins!")
//   	}
//   	if (correctAnswer === "scissors") {
//   		console.log("Player Looses!")
//   	}
//   }
//   if (pcanswer === "scissors"){
//   	 if (correctAnswer === "rock") {
//   		console.log("Player Wins!")
//   	}
//   	if (correctAnswer === "papper") {
//   		console.log("Player Looses!")
//   	}
//   }
//   if (pcanswer === "papper"){
//   	if (correctAnswer === "scissors") {
//   		console.log("Player Wins!")
//   	}
//   	if (correctAnswer === "rock") {
//   		console.log("Player Looses!")
//   	}
//   }





//var teachers = [86,'Shane',23, 'Zach', 1,'Patricia',5, 'Cl',15, 'Junior',];

//for(var i=0;teachers.length>i;i++){
  //console.log(teachers[i])
//}

//teachers.sort();
//console.log(teachers)

// var shopping_list = ["pop tarts", "ramen noodles", "chips", "salsa", "coffe" ];

// shopping_list.push("fruit loop");

// shopping_list[4] = "fair trade coffe";

// shopping_list.splice(2,2,"rice", "beans")

// var shopping_cart = [""]

// shopping_cart.push(shopping_list.pop());

// //shopping_cart.push(shopping_list.pop(shopping_list.reverse));//another way to do it//
// shopping_cart.push(shopping_list.shift());

// while(shopping_list.length>0){//this will take the first list and push it to the seconf lit, intil the first list is empty 
//   shopping_cart.push(shopping_list.pop());
// }


// shopping_cart.reverse(shopping_cart.sort());//can write on one line or shopping_cart.sort().reverse();


// //var outputsting = ""; this one did not work 
// //for(val i = 0; i<shopping_cart.length; i++){
//   //outputstring += shopping_cart[i] +",";
// //}

// console.log("My cart contains: ", shopping_cart.join(','));

// console.log(shopping_list);


// console.log(shopping_cart);

var course = {
  name: 'JavaScript Applications',
  awesome: true,
  teachers: ['Assaf', 'Shane'],
  students: [
    {
      name: 'Steve',
      computer: {
        OS: 'Linux',
        type: 'laptop'
      }
    },
    {
      name: 'Katy',
      computer: {
        OS: 'OSX',
        type: 'macbook'
      }
    },
    {
      name: 'Chuck',
      computer: {
        OS: 'OSX',
        type: 'macbook'
      }
    }

  ],
  preReqs : {
    skills : ['html', 'css', 'git'],
    equipment: {
      laptop: true,
      OSOptions: ['linux', 'osx']
    }
  }
};
console.log(course.name);
console.log(course.teachers[1]);
console.log(course.students[0].name);
console.log(course.students[1].computer.type);
console.log(course.preReqs.equipment)
console.log(course.preReqs.equipment.OSOptions[1])
console.log(course.preReqs.equipment.OSOptions.join(' or '))

var students_OSX = [];

for(var i=0; course.students.length>i; i++){
  if(course.students[i].computer.OS === 'OSX'){
    students_OSX.push(course.students[i])
  } 
}

console.log("These are the students using Mac", students_OSX )

