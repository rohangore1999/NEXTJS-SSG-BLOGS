import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import * as fs from 'fs'


function slug({ data }) {
    console.log(data)
    // FLOW:
    // Find the file for the particular Slug(url query which we received from blogs.js)
    // const [blog, setBlog] = useState()

    // const router = useRouter()
    // console.log(router.query)
    // const { slug } = router.query //we will the query which we are passing through the url


    // when we are in blogs page; click on one of the blog it will go to [slug].js
    // In that it will give slug so we are calling our getblog.js api
    // By passing the query, we are getting that particular blog
    // And we are showing

    // useEffect(() => {
    //     if (!router.isReady) return //if router is not ready then return

    //     const { slug } = router.query //we will the query which we are passing through the url
    //     fetch(`http://localhost:3000/api/getblogs?slug=${slug}`)
    //         .then((res) => res.json())
    //         .then((res1) => setBlog(res1))
    // }, [router.isReady]) //when router.isReady change; then useEffect will run >> return boolean

    // console.log(blog)

    return (
        <div>
            <h1>Title of the page {data?.title}</h1>

            <div>{data?.content}</div>
        </div>
    )
}

export default slug

// export async function getServerSideProps(context) {
//     let data = await fetch(`http://localhost:3000/api/getblogs?slug=${context.params.slug}`).then((res)=>res.json())

//     return {
//         props: {
//             data
//         }
//     }
// }



// Static Side Generation >> here we are replacing API's working means no server/backend for Static website

// as in SSG we need to create 2 pages: 
// 1: how-to-learn-javascript.json
// 2: how-to-learn-python.json

// so we need getStaticPath >> so that it knows how many path/pages needs to create

export async function getStaticPaths() {
    return {
        paths: [
            { params: { slug: "how-to-learn-javascript" } },
            { params: { slug: "how-to-learn-python" } }
        ],
        fallback: true
    }
}

// below getStaticProps >> as we got "how-to-learn-javascript" so now from where I get the content of that page
export async function getStaticProps(context) {
    const { slug } = context.params

    // reading the required json file
    let myblog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8')


    return {
        props: { data: JSON.parse(myblog) }
    }
}