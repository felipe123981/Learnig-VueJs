// the authenticate function is trhowing an Promisse pensing fullfilled

import axios from "axios";

const url = 'http://localhost:3333/sessions/';
let result = false;
export async function authenticate (email, password) {
     await axios.post(url, {
        email: email,
        password: password,
     })
     .then(response => {
        if(response.status != '200') {
            result = false;
        }

        result = true;
     })

     return result;
}
//função de login para inicializar o store
export function authLogin(email, password) {
   if(authenticate(email, password)) {
      axios.post(url, {
         email: email,
         password: password
      })
      //.then(response => {
         /*
         this.$store.state.user = [
            {
               username: response.data.user.name,
               email: response.data.user.email,
               avatar: response.data.user.avatar_url,
               token: response.data.token
            }
         ]
         */
      //})
      .catch(error => {
         console.log(error)
      })  
   }
   else {
      console.log("Incorrect login or password! Try again later.")
   }
} 

