import { gql } from "@apollo/client"

export const CREATE_JUEGO = gql`

mutation createJuego($title:String, $description:String,$image:String){
  
  createJuego(title:$title, description:$description,image: $image){
		_id
    title
    description
    image
    
  }
}
`
export const REMOVE_JUEGO = gql`
  mutation deleteJuego($_id:ID){
  deleteJuego(_id: $_id)
{
  _id
  title
  image
  description
}
}
`
export const UPDATE_JUEGO = gql`

mutation updateJuego($_id: ID,$title:String, $description:String, $image:String){
  updateMovie(_id: $_id,title:$title, description:$description, image: $image){
    _id
    title
    description
    image
  }
}
`