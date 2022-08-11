const URL_USERS= "https://jsonplaceholder.typicode.com/users";

showData = (data) => {
  let body = ``;
  
  data.map((user) => {
    return (body += `
    <tr>
    <th scope="row">${user.id}</th>
    <td>${user.username}</td>
    <td class="email-table">${user.email}</td>
    <td>${user.phone}</td>
    <td class="city-table">${user.address.city}</td>
    <td class="company-table">${user.company.name}</td>
    </tr>
    `);
  });
  document.getElementById("table-row").innerHTML = body;
};

const getUsers = async () =>{
  try {
    const resp = await axios(URL_USERS);
    const dataUsers = await showData(resp.data);
  } catch(error) {
    throw new Error(`Error: ${error}`);
  }
}

getUsers();


