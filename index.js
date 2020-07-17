// import './task.css';
// import './app.js';
// import './server';

let xhr = new XMLHttpRequest();
xhr.open('GET', "http://localhost:7070/", true); 

xhr.addEventListener('load', () => {
  if (xhr.status >= 200 && xhr.status < 300) {
      try {
          const data = JSON.parse(xhr.responseText);
          console.error(data);
          console.log(xhr);
          console.log(444);

      } catch (e) {
          console.error(e);
      }
  }
  else{
    console.log(33);

  }
});
xhr.send();
 
console.log(111);