document.getElementById('form').addEventListener('submit', function (event) {
  event.preventDefault();

  const firstname = document.getElementById('firstname').value;
  const lastname = document.getElementById('lastname').value;
  const email = document.getElementById('email').value;
  const cargo = document.getElementById('cargo').value; 
  const salario = document.getElementById('salario').value; 

  const apiUrl = 'https://crudcrud.com/api/4ce1796f97ba4e6b9428eccbd7f7de8a/inscritos';

  const data = {
    firstname,
    lastname,
    email,
    cargo, 
    salario 
  };

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      const tableResult = document.getElementById('table').getElementsByTagName('tbody')[0];
      const newRow = tableResult.insertRow(tableResult.rows.length);

      const rowFirstname = newRow.insertCell(0);
      rowFirstname.innerHTML = data.firstname;

      const rowLastname = newRow.insertCell(1);
      rowLastname.innerHTML = data.lastname;

      const rowEmail = newRow.insertCell(2);
      rowEmail.innerHTML = data.email;

      const rowCargo = newRow.insertCell(3);
      rowCargo.innerHTML = data.cargo;

      const rowSalario = newRow.insertCell(4);
      rowSalario.innerHTML = data.salario;

      cleanInput();
    })
    .catch(error => {
      console.error('Erro ao criar usuário', error);
      alert('ERROR');
    });
});

function cleanInput() {
  let firstname = document.getElementById('firstname');
  const lastname = document.getElementById('lastname');
  const email = document.getElementById('email');
  const cargo = document.getElementById('cargo');
  const salario = document.getElementById('salario');
  firstname.value = '';
  lastname.value = '';
  email.value = '';
  cargo.value = ''; 
  salario.value = ''; 
}
