const URL_USERS= "https://jsonplaceholder.typicode.com/users";

fetch(URL_USERS)
  .then((response) => response.json())
  .then((data) => showData(data));

showData = (data) => {
  let body = ``;

  data.map((user) => {
    return (body += `
      <tr>
        <th scope="row">${user.id}</th>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        <td>${user.address.city}</td>
        <td>${user.company.name}</td>
      </tr>
    `);
  });
  document.getElementById("table-row").innerHTML = body;
};
