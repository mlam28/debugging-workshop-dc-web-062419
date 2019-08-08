document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('joke-form')
  const jokeList = document.getElementById('joke-list')
  let joke;
  
  function addJoke(joke){
    let username = document.getElementById('name-input').value
    const newJokeLi = document.createElement('li')
    newJokeLi.innerHTML = `
    <span class="username">${username} says: ${joke}</span> 
    `
    jokeList.appendChild(newJokeLi)
    document.getElementById('name-input').value = ''

  }
  
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    let username = document.getElementById('name-input').value
    if(username !== "");
    fetchJoke()
    
  })

  function fetchJoke(){
  
    console.log("reached joke")
    fetch('https://icanhazdadjoke.com/', {
      method: 'GET',
      headers: {
        "Accept": "application/json"
      }
    })
     
    .then(res => res.json())
    .then(jokeData => addJoke(jokeData.joke))
    
  }
  
})
