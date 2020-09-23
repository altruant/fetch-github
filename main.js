const REPO_URL = 'https://api.github.com/users/altruant/repos'

const repoData = fetch(REPO_URL)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        buildTemplate(data);
      });
const repos = document.getElementById('repo-template').innerHTML

const repoTemplate = Handlebars.compile(repos);

function buildTemplate(repoList) {
  const html = repoTemplate({repos: repoList});
  document.querySelector('#user-repositories-list').innerHTML = html;
}
