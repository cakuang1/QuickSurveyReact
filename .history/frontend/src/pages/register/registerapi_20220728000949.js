const axios = require('axios')








export default function newuser(email,password) {
    console.log('test')
    axios.post('http://localhost:3000/users', {
        email: email,
        password: password
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    


}



