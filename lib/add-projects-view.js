module.exports =
class AddProjectView {
  constructor () {
    this.element = document.createElement('div')
    this.element.id = 'add-projects-view'

    this.icon = document.createElement('div')
    this.icon.classList.add('icon', 'octocat')
    this.icon.title = "Octocat in Space"
    this.element.appendChild(this.icon)

    this.description = document.createElement('div')
    this.description.classList.add('description')
    this.description.innerText = 'Your project is currently empty'
    this.element.appendChild(this.description)
    
    this.openFileButton = document.createElement('button')
    this.openFileButton.classList.add('btn')
    this.openFileButton.innerText = 'Open a file'
    this.openFileButton.addEventListener('click', () => {
      atom.commands.dispatch(this.element, 'application:open-file')
    })
    this.element.appendChild(this.openFileButton)

    this.addProjectsButton = document.createElement('button')
    this.addProjectsButton.classList.add('btn', 'btn-primary')
    this.addProjectsButton.innerText = 'Add folder(s)'
    this.addProjectsButton.addEventListener('click', () => {
      atom.pickFolder(paths => {
        if (paths) {
          atom.project.setPaths(paths)
        }
      })
    })
    this.element.appendChild(this.addProjectsButton)

    this.reopenProjectButton = document.createElement('button')
    this.reopenProjectButton.classList.add('btn')
    this.reopenProjectButton.innerText = 'Reopen a project'
    this.reopenProjectButton.addEventListener('click', () => {
      atom.commands.dispatch(this.element, 'application:reopen-project')
    })
    this.element.appendChild(this.reopenProjectButton)
  }
}
