import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import * as fs from 'fs'

function blogs({ data }) {

    // FLOW:
    // Step: when we click on below link, that particular json get loaded and show that data
    // Step: Iterate and display their titles

    console.log(data)
    return (
        <div>
            <div className={styles.blogs}>
                <h1>Latest BLogs</h1>
                {data.map((item, idx) => (
                    <div key={item.slug}>
                        <Link href={`/blogpost/${item.slug}`}>
                            <a>
                                <h3>{item.title}</h3>
                            </a>
                        </Link>
                        <p>{item.content.substr(0, 140)}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default blogs


// export async function getServerSideProps() {
//     // fetching from the api
//     // it will give all the data
//     // parsing it into the json

//     const data = await fetch('http://localhost:3000/api/blogs').then((res) => res.json())

//     // returning the props
//     return {
//         props:
//         {
//             data
//         }
//     }
// }

export async function getStaticProps(context) {
    // reading dirs
    let d = await fs.promises.readdir("blogdata")
    let myfile;
    let data = []

    // reading each files from dir
    for (let index = 0; index < d.length; index++) {
        const item = d[index]
        console.log(item)
        myfile = await fs.promises.readFile('blogdata/' + item, 'utf-8')
        data.push(JSON.parse(myfile))
    }

    return {
        props: { data }
    }
}

