import axios from 'axios';

// re-add payload-or whatever parameters
export async function login(user, password) {
    // Set up data to send
    let data = {
        email: user,
        pw: password
    }

    const res = await axios.post('http://localhost:5000/users/login', data);

    return res.data;
}
  /*  async function axiosTest() {
        const response = await axios.get(url)
        return response.data
    } */
    //await axios(test_config)
     /*   .then(res => {
          this.stuff = res.data;
          this.loaded = true;
        })
        .catch(err => { 
          // Add message here!
          throw err 
        }); */

/*
export default function login(callBack, errorCallBack) {
    // Set up axios
    let config = {
        method: 'post',
        url: process.env.API_URL + '/users/login'
    }
    // Set up data to send
    let data = {
        
        email: mail,
        pw: password
        
        email: "sporkina@hotmail.com",
        pw: "sporks"
    }

    axios(config, data)
        .then(res => {
            if (callBack != null) {
                callBack(res);
            }
        })
        .catch(err => {
            if (errorCallBack != null) {
                errorCallBack(err);
            }
        });
}
*/

/*
exports.getLocation = getLocation;
exports.dob = dateOfBirth;
*/