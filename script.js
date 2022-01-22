// click add and remove fuctions funcsnality this included in forEach fuction uses system 

const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        panelActiveClasses()
        panel.classList.add('active')
    })
})

function panelActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}