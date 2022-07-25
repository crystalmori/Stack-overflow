// const config              = require('./dbConfig')
// const  sqlConnectionServer = require('mssql');


// // sqlConnectionServer.connect(config).then((res)=>{
// // console.log(res)
// // }).catch((err)=>{console.log("err",err)})

// const getComments = async() => {
//     try {
//         let pool = await sqlConnectionServer.connect(config);
//         let comments = pool.request().query("SELECT * FROM Comments");
//         console.log(comments);
//         return comments;

//     } catch(error) {
//         console.log(error);
//     }
// }

// module.exports = {
//     getComments
// }
