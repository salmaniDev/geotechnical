export default class Ssl {
    Run(value) {
        const urlSsl = value.includes("https")

        const li = document.createElement('li')
        li.setAttribute('class', 'item true')

        const head = document.createElement('div')
        head.classList.add('head')
        head.innerHTML += "SSL وبسایت فعال است"

        li.append(head)
        if (!urlSsl) {
            li.classList.includes('true', 'false')
            head.innerHTML = 'SSL وبسایت را فعال کنید'
        }
        document.getElementById('list').append(li)
    }
}