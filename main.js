const linksSocialMedia = {
  github: 'WendelSantosNunes',
  instagram: 'wendelnunes1',
  twitter: 'WendelN96410536'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

// Api

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLinkGitHub.href = data.html_url
      userImagem.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
