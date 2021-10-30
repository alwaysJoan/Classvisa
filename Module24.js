//add code below
let people = [
  {
    name: "Eliza",
    city: "Los Angeles",
    likes: ["pizza", "karaoke", "improv", "dancing"],
  },
  {
    name: "Shiela",
    city: "Denver",
    likes: ["photography", "painting", "movies"],
  },
  {
    name: "Ben",
    city: "Los Angeles",
    likes: ["pizza", "karate", "sci-fi", "poetry"],
  },
  {
    name: "Mohammed",
    city: "Los Angeles",
    likes: ["sailing", "golf", "kayaking"],
  },
  {
    name: "Yukiko",
    city: "Tokyo",
    likes: ["ramen", "karaoke", "jazz", "hamburgers"],
  },
  {
    name: "Chris",
    city: "Brooklyn",
    likes: ["pizza", "karaoke", "improv", "cooking"],
  },
];

function addLikeToPerson(people, nameToMatch, topic) {
  // loop through the collection of people
  for(let i = 0; i < people.length; i++){
    if(people[i].name === nameToMatch){
      people[i].likes.push(topic);
      return people[i];
    }
  }
}

//question2
function countLikesByTopic(topic){
  
  let counter = 0;
  
  for (var i=0; i<people.length; i++){
    
    for (let j=0; j<people[i].likes.length; j++){
      
      if(people[i].likes[j] === topic){
        counter++
      }
    }

  }

  return counter;

}
console.log(countLikesByTopic(people, 'pizza'))