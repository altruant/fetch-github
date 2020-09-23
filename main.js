const REPO_URL = 'https://api.github.com/users/altruant/repos'

const repoData = fetch(REPO_URL)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        buildTemplate(data);
        console.log(buildTemplate(data));
      });
const repos = document.getElementById('repo-template').innerHTML
console.log(repos);


const repoTemplate = Handlebars.compile(repos);
console.log(repoTemplate);

function buildTemplate(repoList) {
  const html = repoTemplate({repos: repoList});
  document.querySelector('#user-repositories-list').innerHTML = html;
}
