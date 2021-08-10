//Fetching classmates repo from github using Promise.all
//and render full name, url and  owner  of the repo

const userNamesOfRepo = ["OlenaKasian", "semih1239", "varsha84"];

function fetchRepo(user) {
  return new Promise((resolve, reject) => {
    fetch(`https://api.github.com/search/repositories?q=user:${user}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        renderUserData(data, user);
        resolve(data);
      })
      .catch((err) => reject(err));
  });
}

function renderUserData(data, user) {
  const h1 = document.createElement("h1");
  h1.innerHTML = `Repository of ${user} :`;
  document.body.appendChild(h1);
  const div = document.createElement("div");
  h1.appendChild(div);
  data.items.forEach((element) => {
    const userName = document.createElement("p");
    userName.innerHTML = `The repo name is : ${element.name}`;
    div.appendChild(userName);

    const api = document.createElement("p");
    api.innerHTML = `The url is: ${element.html_url}`;
    div.appendChild(api);

    const owner = document.createElement("p");
    owner.innerHTML = `The owner of GitHub acc is: ${element.owner.login}`;
    div.appendChild(owner);
  });
}

async function retrieveData() {
  await Promise.all([
    fetchRepo(userNamesOfRepo[0]),
    fetchRepo(userNamesOfRepo[1]),
    fetchRepo(userNamesOfRepo[2]),
  ]);
  return console.log("All user data fetched");
}

retrieveData();
