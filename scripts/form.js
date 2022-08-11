const form = document.getElementById("form");

const d = document;

form.addEventListener("submit", (e) =>{
  e.preventDefault();
  const user = d.getElementById("user").value;
  const email = d.getElementById("email").value;
  
  const comments = d.getElementById("comments").value; 
  console.table(`user: ${user} \nemail: ${email} \ncomments: ${comments}`);
});

