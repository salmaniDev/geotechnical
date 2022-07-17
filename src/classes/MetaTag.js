export default class MetaTag {
    constructor(baseUrl) {
        this.baseUrl = baseUrl
    }

    GetMeta(metaName) {
        const metas = this.baseUrl.getElementsByTagName('meta');

        for (let i = 0; i < metas.length; i++) {
            if (metas[i].getAttribute('name') === metaName) {
                return true;
            }
        }

        return '';
    }

    Run() {
        /////////////////// Meta Tag Description
        const metaDesc = this.GetMeta('description')

        const metaDescLi = document.createElement('li')
        metaDescLi.setAttribute('class', "item true")

        const metaDescHead = document.createElement('div')
        metaDescHead.classList.add('head')
        metaDescHead.innerHTML += 'وجود متا تگ Description';
        metaDescLi.appendChild(metaDescHead)

        if (!metaDesc) {
            metaDescLi.classList.replace('true', 'false')
            metaDescHead.innerHTML = "متا تگ Description را به صفحه اضافه کنید"
        }


        /////////////////// Meta Tag View Port
        const metaViewport = this.GetMeta('viewport')

        const metaViewLi = document.createElement('li')
        metaViewLi.setAttribute('class', "item true")

        const metaViewHead = document.createElement('div')
        metaViewHead.classList.add('head')
        metaViewHead.innerHTML += 'وجود متا تگ viewoprt';
        metaViewLi.appendChild(metaViewHead)

        if (!metaViewport) {
            metaViewLi.classList.replace('true', 'false')
            metaViewHead.innerHTML = "متا تگ viewport را به صفحه"
        }

        /////////////////// Meta Tag keyword
        const metaKeyword = this.GetMeta('keyword')

        const metaKeuwordLi = document.createElement('li')
        metaKeuwordLi.setAttribute('class', "item true")

        const metaKeuwordHead = document.createElement('div')
        metaKeuwordHead.classList.add('head')
        metaKeuwordHead.innerHTML += "وجود متا تگ keyword"
        metaKeuwordLi.appendChild(metaKeuwordHead)

        if (!metaKeyword) {
            metaKeuwordLi.classList.replace('true', 'false')
            metaKeuwordHead.innerHTML = "متا تگ keyword را به صفحه اضافه کنید"
        }


        document.getElementById('list').append(metaDescLi, metaViewLi, metaKeuwordLi)
    }
}