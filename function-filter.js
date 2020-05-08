function getShortMessages(messages){
  console.log(messages);
    const shortMessage = messages.filter(word=>word.message.length<50)
    return shortMessage.map(x=>x.message)
   // console.log(shortMessage.map(x=>x.message)); 
}

// var messages = [ {
//     message: 'Esse id amet quis eu esse aute officia ipsum.' // random
//   },
//   {
//     message: 'Esse id amet quis eu esse aute officia ipsum.' // random
//   },
//   {
//     message: 'Esse dfssddddddddddddddddddddddddddddddddddddddddid amet quis eu esse aute officia ipsum.' // random
//   }
// ]
// getShortMessages(messages);
module.exports = getShortMessages