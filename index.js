// 64bebc1e2c6d3f056a8c85b7 token

// Server methode: Post -> Sign up

// let url = "https://cute-jade-binturong-boot.cyclic.app/api";

// const signup = async ({ name, surname, email, password }) => {
//   const respond = await fetch(
//     `${url}/user/sign-up?access_token=64bebc1e2c6d3f056a8c85b7`,
//     {
//       method: "POST",
//       body: JSON.stringify({
//         name: name,
//         surname: surname,
//         email: email,
//         password: password,
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   );

//   const data = await respond.json();
//   console.log(data);
// };
// console.log(
//   signup({
//     name: "James",
//     surname: "Bond",
//     email: "jane@gmail.com",
//     password: "12345678",
//   })
// );

// Post -> Sign in

// let url = "https://cute-jade-binturong-boot.cyclic.app/api";

// const Sign_in = async ({ email, password }) => {
//   const respond = await fetch(
//     `${url}/user/sign-in?access_token=64bebc1e2c6d3f056a8c85b7`,
//     {
//       method: "POST",
//       body: JSON.stringify({
//         email: email,
//         password: password,
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     },
//   );

//   const data = await respond.json();
//   console.log(data);
// };

// Sign_in({
//   email: "james@gmail.com",
//   password: "12345678",
// });

// 64bebc1e2c6d3f056a8c85b7 token

// Server methode: Post -> Sign up

// let url = "https://cute-jade-binturong-boot.cyclic.app/api";

// let signup = async ({ name, surname, email, password }) => {
//   let respond = await fetch(
// `${url}/user/sign-up?access_token=64bebc1e2c6d3f056a8c85b7`,
//     {
//       method: "POST",
//       body: JSON.stringify({
//         name: name,
//         surname: surname,
//         email: email,
//         password: password,
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   );
//   let data = await respond.json();
//   console.log(data);
// };

// console.log(
//   signup({
//     name: "Jame",
//     surname: "Bon",
//     email: "june@gmail.com",
//     password: "1234567",
//   })
// );

// 64bebc1e2c6d3f056a8c85b7 token

// Server methode: Post -> Sign in

let url = "https://cute-jade-binturong-boot.cyclic.app/api";

let SignIn = async ({ email, password }) => {
  let respond = await fetch(
    `${url}/user/sign-in?access_token=64bebc1e2c6d3f056a8c85b7`,
    {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  let data = await respond.json();
  console.log(data);
};

SignIn({
  email: "june@gmail.com",
  password: "1234567",
});
