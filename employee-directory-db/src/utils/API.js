import axios from "axios";
export default {
  // Gets all users
  getUsers: function() {
    return new Promise((resolve, reject) => {
      axios
        .get("https://randomuser.me/api/?results=200&nat=us")
        .then(res => {
          const users = res.data.results;
          const data = users.map(user => {
            return {
              image: user.picture.thumbnail,
              first: user.name.first,
              last: user.name.last,
              phone: user.phone,
              email: user.email,
              dob: user.dob.date
            };
          });
          resolve(data);
        })
        .catch(err => reject(err));
    });
  },
  // getUser: function(search) {
  //   return new Promise((resolve, reject) => {
  //     axios
  //       .get("https://randomuser.me/api/?results=200&nat=us")
  //       .then(res => {
  //         const users = res.data.results;
  //         const data = users
  //         .filter(check => {
  //           var stringName = check.name.first+check.name.last;
  //           var length = search.trim().length
  //           var boo = false
  //           for(var i = 0; i<=stringName.length-1; i++){
  //             for(var j=0; i<=stringName.length-1-length; j++) {
  //               if()
  //             }
  //           }

  //         })
  //         .map(user => {
  //           return {
  //             image: user.picture.thumbnail,
  //             first: user.name.first,
  //             last: user.name.last,
  //             phone: user.phone,
  //             email: user.email,
  //             dob: user.dob.date
  //           };
  //         });
  //         resolve(data);
  //       })
  //       .catch(err => reject(err));
  //   });
  // }
};