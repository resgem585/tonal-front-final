import { gql } from "@apollo/client"
// USER
export const CREATE_USER = gql `
mutation createUser($email:String, $password: String) {
  createUser(email:$email, password:$password){
    email
    password
  }
}
`


// JUEGOS

export const CREATE_JUEGO = gql`

mutation createCreateJuego($title:String, $description:String, $image:String){
  
  createJuego(title:$title, description:$description,image: $image){
		_id
    title
    description
    image
    
  }
}
`
export const REMOVE_MOVIE = gql`
  mutation deleteEmp($_id:ID){
  deleteMovie(_id: $_id)
{
  _id
  title
  image
  likes
  dateOfReleased
  description
}
}
`

// TONAL

export const CREATE_TONAL = gql`

mutation createTonal($title:String, $significado:String, $description:String, $image:String){
  
  createTonal(title:$title, significado:$significado, description:$description, image:$image){
		_id
    title
    significado
    description
    image
  }
}
`
// TEMAZ

export const CREATE_TEMAZ = gql`

mutation createTemaz($title:String, $description:String, $image:String){
  
  createTemaz(title:$title, description:$description, image:$image){
		_id
    title
    description
    image
  }
}
`

//CURIOSIDADES 

export const CREATE_SIGNO = gql`

mutation createSigno($title:String, $description:String, $image:String){
  
  createSigno(title:$title, description:$description, image:$image){
		_id
    title
    description
    image
  }
}
`
