import {gql} from '@apollo/client'


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
//TONAL
export const GET_TONAL = gql`
query getTonal{
    getTonal {
        _id 
        title
        significado
        description
        image
    }
}
`
//TEMAZ

export const GET_TEMAZ = gql`
query getTemaz{
    getTemaz {
        _id 
        title
        description
        image
    }
}
`

//CURIOSIDADES

export const GET_SIGNO = gql`
query getSigno{
    getSigno {
        _id 
        title
        description
        image
    }
}
`