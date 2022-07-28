const axios = require('axios')





export default function register(email,password) {



    
}
axios.post('http://localhost:3000/users', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });



