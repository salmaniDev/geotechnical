export default class BasicComp {
    constructor(props) {
    }

    Run(content) {
        let li = document.createElement('li')
        li.setAttribute('class', "item true")
        let head = document.createElement('div')
        head.classList.add('head')
        head.innerHTML = "وجود lang برای تگ html"
        li.appendChild(head)
        let htmltag = content.getElementsByTagName('html')[0].getAttribute('lang');

        if (!htmltag) {
            li.classList.replace('true', 'false')
            head.innerHTML = "لطفا تگ lang را به html اضافه کنید"
        }

        document.getElementById('list').append(li)
    }

}