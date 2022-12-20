let outputUsers = document.querySelector("#users-output")


// es como si fuera createP
const createCard = (productos) => {
	// js string template
	// x += y  // x = x + y // Addition assignment 
	outputUsers.innerHTML += `
	<div class="card mt-5">
		<div class="card-header">
			id: ${productos.id}
		</div>
		<div class="card-body">
			<h5 class="card-title">nombre: ${productos.precio}</h5>
			<p class="card-text">edad: ${productos.precio}</p>
			<a href="#" disabled class="btn btn-muted">editar</a>
			<a href="#"  class="btn btn-danger" onclick="deleteUser(${productos.id})" >delete</a>
		</div>
	</div>
	`
}

const createNewUser = async (e) => {
	e.preventDefault()
	await createUser(
		{
			id: e.target.id.value,
			name: e.target.name.value,
			age: e.target.age.value
		}
	)

	e.target.id.value = ""
	e.target.name.value = ""
	e.target.age.value = ""
	await showUsers()

}

// es lo mismo que crear, pero, el form se pre llena con la data del user 
// const editUser = async () => {} 

// metodo de un componente
const showUsers = async () => {
	outputUsers.innerHTML = ""

	// services
	let data = await getUsers()

	// dom manipulation
	data.forEach(productos => {
		createCard(productos)
	});
}

const deleteUser = async (id) => {
	await eraseUser(id)
	await showUsers()
	// ELIMINAR LA TARJETA DE ESTE USER ESPECÍFICO
}

const btnGetUsers = document.querySelector("#getUsers")
btnGetUsers.addEventListener("click", showUsers)

const formCreateUser = document.querySelector("#createUser")
formCreateUser.addEventListener("submit", createNewUser)