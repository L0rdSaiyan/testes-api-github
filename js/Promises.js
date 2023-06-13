//Instanciando a promise
const myPromise = new Promise((resolve, reject) => {
  const nome = "VICTOR";

  if (nome === "VICTOR") {
    resolve("Usuário Victor encontrado!");
  } else {
    reject(`Usuário Victor não foi encontrado (${nome})`);
  }
});

myPromise.then((data) => {
  console.log(data);
});

//encadeamento de then's
const myPromise2 = new Promise((resolve, reject) => {
  const nome = "Victor";

  if (nome === "Victor") {
    resolve("Usuário Victor encontrado!");
  } else {
    reject(`Usuário Victor não foi encontrado (${nome})`);
  }
});

myPromise2
  .then((data) => {
    return data.toLowerCase(); //return necessário para enviar para o próximo then
  })
  .then((stringModificada) => {
    console.log(stringModificada);
  });

//Retorno do Catch

const myPromise3 = new Promise((resolve, reject) => {
  const nome = "Joao";

  if (nome === "Victor") {
    resolve("Usuário Victor encontrado!");
  } else {
    reject(`Usuário Victor não foi encontrado (${nome})`);
  }
});

myPromise3
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(`Aconteceu um erro. ${err}`);
  });

//várias promessas com o all
const p1 = new Promise((resolve, reject) => {
  resolve("p1 ok!");
});
const p2 = new Promise((resolve, reject) => {
  resolve("p2 ok!");
});
const p3 = new Promise((resolve, reject) => {
  resolve("p3 ok!");
});

const resolveAll = Promise.all([p1, p2, p3]).then((data) => {
  console.log(data);
});

//várias promessas com o race

const userName = "L0rdSaiyan";

fetch(`https://api.github.com/users/${userName}`, {
  method: "GET",
  headers: {
    Accept: "application/vnd.github.v3+json",
  },
})
  .then((response) => {
    console.log(typeof response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
    alert(data.name);
  })
  .catch((err) => {
    console.log(`Ocorreu um erro! ${err}`);
  });
