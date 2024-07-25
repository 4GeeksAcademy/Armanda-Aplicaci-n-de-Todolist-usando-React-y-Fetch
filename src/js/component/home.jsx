import React, { useEffect, useState } from "react";

const UserList = () => {

const [count, setCount] = useState([]);

useEffect(() => {
	const fetchUser = async () => {
		try {
			const response = await fetch('https://playground.4geeks.com/todo/users/Armanda%20Jaque'),
			const data = await response.json();
			setUsers(data);
		}catch (error) {
			console.error('Error fetching users:', error);
		}
	};

	fetchUsers();
}, []);


 {
	method: "PUT",
	body: JSON.stringify(todos),
	headers: {
	  "Content-Type": "application/json"

	  
	}
  })
  .then(resp => {
	  
		  return (<form>
			<div class="mb-3">
			  <label for="exampleInputEmail1" class="form-label">Email address</label>
			  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
			  <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
			</div>
			<div class="mb-3">
			  <label for="exampleInputPassword1" class="form-label">Password</label>
			  <input type="password" class="form-control" id="exampleInputPassword1" />
			</div>
			<div class="mb-3 form-check">
			  <input type="checkbox" class="form-check-input" id="exampleCheck1" />
			  <label class="form-check-label" for="exampleCheck1">Check me out</label>
			</div>
			<button onClick={() => setCount(count + 1)}>Incrementar</button> 
		  </form>); // Intentará parsear el resultado a JSON y retornará una promesa donde puedes usar .then para seguir con la lógica
  }

		   



  })
  .then(data => {
	  // Aquí es donde debe comenzar tu código después de que finalice la búsqueda
	  console.log(data); // Esto imprimirá en la consola el objeto exacto recibido del servidor
  })
  .catch(error => {
	  // Manejo de errores
	  console.log(error);
  });


export default Home;


