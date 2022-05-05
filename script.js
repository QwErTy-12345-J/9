document.body.onload = function() {
  const pre = document.createElement('pre');
  
  fetch('https://api.github.com')
    .then(function(response) {
      return response.json()
    })
    .then(function(data) {      
      pre.innerHTML = JSON.stringify(data, null, 2);
      console.log(data);
    })
    .catch(function(error) {
      console.log('blya u');
      console.error(error);
    });

  document.body.appendChild(pre);
}


