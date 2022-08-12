const form = document.getElementById("form");
const d = document;

form.addEventListener("submit", (e) =>{
  e.preventDefault();

  const user = d.getElementById("user").value;
  const email = d.getElementById("email").value;
  const comments = d.getElementById("comments").value; 
  // REgEx for user and email valitation
  const regExUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  const regExUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)@[a-z0-9-]+(\.[a-z0-9-]+)(\.[a-z]{2,15})$/;
  // user NAme validation
  if(!regExUserName.test(user)) {
    console.error("El nombre solo debe incluir letras")
  }
  // email validation
  if(!regExUserEmail.test(email)) {
    console.error("El e-mail debe tener @, un . y al menos dos caracteres luego del .");
  }   
  console.table(`user: ${user} \nemail: ${email} \ncomments: ${comments}`);
});

