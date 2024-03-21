// practicing projects
// oop learning
// constructor functions
// function Quiz(question, answers, correctAnswer) {
//   this.question = question;
//   this.answers = answers;
//   this.correctAnswer = correctAnswer;
//   this.showQuestion = function () {
//     console.log(this.question);
//   };
//   this.checkAnswer = function () {
//     console.log("The answer is : ", this.answers[this.correctAnswer]);
//   };
// }

// const quiz1 = new Quiz("question text1", [1, 2, 3, 4], 0);
// const quiz2 = new Quiz("question text2", [1, 2, 3, 4], 1);
// console.log(quiz1);
// console.log(quiz2);

// prototype

// function Quiz(question, answers, correctAnswer) {
//   this.question = question;
//   this.answers = answers;
//   // this.correctAnswer = correctAnswer;
//   // this.showQuestion = function () {
//   //   console.log(this.question);
//   // };
//   // this.checkAnswer = function () {
//   //   console.log("The answer is : ", this.answers[this.correctAnswer]);
//   // };
// }

// Quiz.prototype.showQuestion = function () {
//   console.log(this.question);
// };

// Quiz.prototype.checkAnswer = function () {
//   console.log("The answer is : ", this.answers[this.correctAnswer]);
// };

// Quiz.prototype.constant = 5;

// const quiz1 = new Quiz("question text1", [1, 2, 3, 4], 0);
// const quiz2 = new Quiz("question text2", [1, 2, 3, 4], 1);
// console.log(quiz1);
// console.log(quiz2);

// classes
// classes are a template for creating objects

// class Quiz {
//   constructor(question, answers, correctAnswer) {
//     this.question = question;
//     this.answers = answers;
//     this.correctAnswer = correctAnswer;
//     // this.showQuestion = function () {
//     //   console.log(this.question);
//     // };
//     // this.checkAnswer = function () {
//     //   console.log("The answer is : ", this.answers[this.correctAnswer]);
//     // };
//     // age ye metode xas dashte bashim inja minivisimesh
//     // vagar na age tekrari bashe vase hame payin minivisim ke ersbari beshe
//   }

//   // prototype

//   // instance method
//   showQuestion() {
//     console.log(this.question);
//   }

//   checkAnswer() {
//     console.log("The answer is : ", this.answers[this.correctAnswer]);
//   }

//   static printSomething() {
//     console.log("im a static method");
//   }
// }

// const quiz1 = new Quiz("question text1", [1, 2, 3, 4], 0);
// console.log(quiz1);
// quiz1.checkAnswer();

// Quiz.printSomething();

// inheritance

// class Quiz {
//   constructor(question, answers, correctAnswer) {
//     this.question = question;
//     this.answers = answers;
//     this.correctAnswer = correctAnswer;
//   }

//   showQuestion() {
//     console.log(this.question);
//   }

//   checkAnswer() {
//     console.log("The answer is : ", this.answers[this.correctAnswer]);
//   }
// }

// class Category extends Quiz {
//   constructor(question, answers, correctAnswer, category) {
//     super(question, answers, correctAnswer);
//     this.category = category;
//   }

//   showCategory() {
//     console.log("The category is:", this.category);
//   }
// }

// const c1 = new Category("question text1", [1, 2, 3, 4], 2, "js");
// console.log(c1);
// c1.checkAnswer();
// c1.showCategory();

// abstraction
// a way of hiding the implementation and showing only the
// fuctionality to the users

// class Animal {
//   constructor() {
//     if (this.constructor === Animal) {
//       throw new Error("Abstract classes can't be instantiated.");
//     }
//   }

//   say() {
//     throw new Error("Method 'say()' must be implemented.");
//   }
// }

// class Cat extends Animal {
//   say() {
//     console.log("meow");
//   }
// }

// const cat1 = new Cat();
// cat1.say();

// Encapsulation

// class Quiz {
//   #correctAnswer = 1; //field

//   checkAnswer() {
//     if (this.#correctAnswer > 2) {
//       console.log("correct");
//     } else {
//       console.log("wrong");
//     }
//   }
// }

// const quiz1 = new Quiz();
// quiz1.checkAnswer();

// Polymorphism

