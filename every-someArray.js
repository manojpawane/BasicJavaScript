function checkUsersValid(goodUsers) {
    //console.log(goodUsers);
    return function allUsersValid(submittedUsers) {
        console.log(submittedUsers);
        return submittedUsers.every(function(submit){
            return goodUsers.some(function(good){
                return good.id === submit.id;
            })
        })
    };
  }

  module.exports = checkUsersValid



