import {gql} from '@apollo/client'
//USER

export const LOGIN =  gql`
query login($email:String, $password: String){
    login(email: $email, password: $password){
        _id
        email
        password
    }
}

`
//JUEGOS

export const GET_JUEGOS = gql`

query getJuegos{
    getJuegos {
        _id 
        title
        description
        image
    }
}
`
