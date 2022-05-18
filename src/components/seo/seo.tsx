import { Seo } from "@/types/Seo";
import { NextPage } from "next";
import Head from "next/head";

const SEO : NextPage<Seo> = ({description, author, title, meta=[]}: Seo) => {

    const metadata = [
        {
            name: "description",
            content: description
        },
        {
            name: "og:title",
            content: title
        },
        {
            name: "og:description",
            content: description
        },
        {
            name: "og:type",
            content: "website"
        },
        {
            name: "author",
            content: author
        }
    ].concat(meta);

    return(
        <Head>
        <title>{title} - Mi Empresa</title>
        
        {metadata.map(({name, content}, i) => (
            <meta key={i} name={name} content={content} />
        ))}


        <link rel="icon" href="/favicon.ico" />
      </Head>
    )
}

SEO.defaultProps = {
    lang: "es-mx",
    meta: []
}

export default SEO;