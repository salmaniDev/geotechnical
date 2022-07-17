export default class Heading {
    constructor(htmlContent) {
        this.content = htmlContent
    }
    getHeading(tag) {
        const tagLenght = this.content.querySelectorAll(tag).length

        const li = document.createElement('li')
        li.setAttribute('class', 'item true')

        const head = document.createElement('div')
        head.classList.add('head')
        head.innerHTML += "تعداد تگ " + tag + " در صفحه : " + tagLenght

        li.append(head)
        if (tagLenght == 0) {
            li.classList.replace('true', 'false')
        }
        document.getElementById('list').append(li)
    }


    Run() {
        const setH1 = this.getHeading("h1");
        const setH2 = this.getHeading("h2");
        const setH3 = this.getHeading("h3");
        const setH4 = this.getHeading("h4");
        const setH5 = this.getHeading("h5");
        const setH6 = this.getHeading("h6");
    }
}