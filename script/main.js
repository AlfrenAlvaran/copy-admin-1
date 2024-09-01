import { linkIcons } from './Icons/arrayIcons.js'
import { rigthSectionIcon } from './Icons/arrayIcons.js'
// import { img } from './images/assets.js'
document.addEventListener("DOMContentLoaded", () => {
    // ROOT
    const container = document.createElement("div")
    container.classList.add('container')
    document.body.appendChild(container)
    aside(container)
    MAIN(container)
    rightSeciton(container)
})
// Aside Components
const aside = (container) => {
    const aside = document.createElement("aside")
    // Upper Sodebar
    const toggle = document.createElement('div')
    toggle.classList.add('toggle')

    const logo = document.createElement('div')
    logo.classList.add('logo')

    const span = document.createElement('span')
    span.classList.add("danger")
    span.innerHTML = "Prog"

    const logoIMg = new Image()
    logoIMg.src = "./script/images/logo.png"
    logoIMg.alt = 'Logo'

    const h2 = document.createElement('h2')
    h2.innerHTML = 'Asmr'

    toggle.appendChild(logo)

    logo.appendChild(logoIMg)
    logo.appendChild(h2)
    h2.appendChild(span)

    aside.appendChild(toggle)


    // closing
    const close = document.createElement('div')
    close.classList.add('close')
    close.id = "close-btn"
    linkIcons.map(item => {
        if (item.label && item.label.includes("close")) {
            const span = document.createElement('span')
            span.classList.add(item.span)
            span.innerHTML = item.label
            close.appendChild(span)
        }
    })


    toggle.appendChild(close)


    // sidebar
    const sidebar = document.createElement('div')
    sidebar.classList.add("sidebar")

    linkIcons.map(item => {
        if (!item.label || !item.label.includes('close')) {
            const link = document.createElement('a')
            const span = document.createElement('span')
            const labels = document.createElement("h3")

            span.classList.add(item.span)
            span.innerHTML = item.text
            labels.innerHTML = item.label || ''


            link.href = "#"
            link.appendChild(span)
            sidebar.appendChild(link)
            link.appendChild(labels)

            if (item.label && item.label.includes("Tickets")) {
                const messageCount = document.createElement('span')
                messageCount.classList.add('message-count')
                messageCount.innerHTML = "27"
                link.appendChild(messageCount)
            }
        }
    })



    // redner to container
    container.appendChild(aside)
    aside.appendChild(sidebar)
}


const MAIN = (container) => {
    const main = document.createElement('main')

    


    container.appendChild(main)
}

// Right Section
const rightSeciton = (container) => {
    const section = document.createElement("div")
    section.classList.add("right-section")

    container.appendChild(section)

    const nav = document.createElement("div")
    nav.classList.add('nav')

    section.appendChild(nav)

    rigthSectionIcon.map(item => {
       if(item.label !== "light_mode" && item.label !== "light_mode") {
        const button = document.createElement("button");
        const spanMenu = document.createElement('span');
        spanMenu.classList.add(item.span)
        spanMenu.innerHTML = item.label
        button.appendChild(spanMenu);
        nav.appendChild(button);
       }else {
        const mode = document.createElement("div")
        mode.classList.add('dark-mode')
        const span = document.createElement('span')
        span.classList.add(item.span)
        if(item.label !== "dark_mode") {
            span.classList.add('active')
        }
       }
    })

    const profile = document.createElement('div')
    profile.classList.add('profile')
    nav.appendChild(profile)

    const info = document.createElement("div")
    info.classList.add('info')

    const p = document.createElement("p")
    const b = document.createElement('b')

    p.innerHTML = "Hey,"
    p.appendChild(b)
    b.innerHTML ="Admin"

    const small = document.createElement('small')
    small.classList.add('text-muted')
    small.innerHTML="Admin"

    info.appendChild(p)
    info.appendChild(small)
    
    profile.appendChild(info)

    const photo = document.createElement('div')
    photo.classList.add('profile-photo')

    const img = document.createElement('img')
    img.src = './script/images/profile-1.jpg'

    profile.appendChild(photo)
    photo.appendChild(img)

    const userProfile = document.createElement('div')
    userProfile.classList.add('user-profile')

    const logo = document.createElement('div')
    logo.classList.add('logo')

    const logoImg = new Image()
    logoImg.src = './script/images/logo.png'

    const h2 = document.createElement('h2')
    h2.innerHTML = "ASMRPROG"
    p.innerHTML ='Web'

    logo.appendChild(logoImg)
    logo.appendChild(h2)
    logo.appendChild(p)


    section.appendChild(userProfile)
    userProfile.appendChild(logo)
}



