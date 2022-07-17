import BasicComp from "../Basic";
import MetaTag from "../MetaTag";
import Heading from "../Heading";

export default class Seo {
    constructor(baseUrl) {
        this.baseUrl = baseUrl
        this.Classes = [BasicComp]
    }

    httpGet() {
        fetch(this.baseUrl).then((res) => {
            return res.text()
        }).then(html => {
            // console.log(res2);
            this.trace(html)
        }).catch(err => {
            console.log(err);
        })
    }

    trace(content) {
        const parse = new DOMParser()
        const html = parse.parseFromString(content, "text/html")
        document.getElementById('urlTitle').innerHTML = html.title

        ///////////////// Check Basic SEO
        const BasicCheck = new BasicComp
        BasicCheck.Run(html)

        ///////////////// check Meta Tags
        const MetaTags = new MetaTag
        MetaTags.constructor(html)
        MetaTags.Run()


        ///////////////// Heading
        const CheckHeading = new Heading
        CheckHeading.constructor(html)
        CheckHeading.Run()
    }
}