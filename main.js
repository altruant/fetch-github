const REPO_URL = 'https://api.github.com/users/altruant/repos'
const INFO_URL = 'https://api.github.com/users/altruant'
const ORG_URL = 'https://api.github.com/users/altruant/orgs'

// repo data

const repoData = fetch(REPO_URL)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        buildRepoTemplate(data);
      });
const repos = document.getElementById('repo-template').innerHTML;

const repoTemplate = Handlebars.compile(repos);

function buildRepoTemplate(repoList) {
  const html = repoTemplate({repos: repoList});
  document.querySelector('#user-repositories-list').innerHTML = html;
}

// profile data

const profileData = fetch(INFO_URL)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    buildInfoTemplate(data);
  });

const infos = document.getElementById('info-template').innerHTML;

const infoTemplate = Handlebars.compile(infos);

function buildInfoTemplate(data) {
  const html = infoTemplate(data);
  document.querySelector('#user-info').innerHTML = html;
}

// org data

const orgData = fetch(ORG_URL)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    buildOrgTemplate(data);
  });

const orgs = document.getElementById('org-template').innerHTML;

const orgTemplate = Handlebars.compile(orgs);

function buildOrgTemplate(data) {
  const html = orgTemplate({orgs: data});
  document.querySelector('#org-info').innerHTML = html;
}

// custom helper function

Handlebars.registerHelper('isOne', function(a){
  if(a == 1) {
    return "follower"
  } else {
    return "followers"
  }
});
