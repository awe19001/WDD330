const quiz = [
  ["What is Superman's real name?","Clark Kent"],
  ["What is Wonder Woman's real name?","Dianna Prince"],
  ["What is Batman's real name?","Bruce Wayne"]
];
const view = {
  score: document.querySelector('#score strong'),
  question: document.getElementById('question'),
  result: document.getElementById('result'),
  info: document.getElementById('info'),
  render(target,content,attributes) {
  for(const key in attributes) {
  target.setAttribute(key, attributes[key]);
  }
  target.innerHTML = content;
  }
  };
  
  
function start(quiz){
  let score = 0;
  // main game loop
  for(const [question,answer] of quiz){
      const response = ask(question);
      check(response,answer);
  }
  // end of main game loop
  gameOver();
  // function declarations
  function ask(question){
      return prompt(question);
  }
  function check(response,answer){
      if(response === answer){
      alert('Correct!');
      score++;
      } else {
      alert(`Wrong! The correct answer was ${answer}`);
      }
  }
  function gameOver(){
      alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);
  }
}
start(quiz);