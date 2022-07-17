import Seo from "./Seo"
import Ssl from "../Ssl"

export default class View {
    Run() {
        let hero = document.createElement('div')
        hero.classList.add('hero')

        let form = document.createElement('form')
        form.addEventListener('submit', (e) => {
            e.preventDefault();
        })
        let input = document.createElement('input')
        input.placeholder = "نام دامنه را وارد کنید"
        input.value = "https://fartech.ir/"
        input.classList.add('input')


        let btn = document.createElement('span')
        btn.classList.add('submit')
        btn.addEventListener('click', () => {
            const seoRun = new Seo(input.value);
            seoRun.constructor(input.value)
            seoRun.httpGet()

            ///////////////// check SSL
            const checkSsl = new Ssl
            checkSsl.Run(input.value)
        })
        let btnIcon = document.createElement('i')
        btnIcon.setAttribute('class', 'icon icon-search')
        btn.append(btnIcon)

        form.append(input, btn)
        hero.append(form)

        let list = document.createElement('ul')
        list.id = 'list'


        let title = document.createElement('span')
        title.id = 'urlTitle'

        window.addEventListener('load', () => {
            input.focus();
        })

        document.getElementById('body').append(hero, title, list)
    }

}