// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs'

export default async function handler(req, res) {
  // using promises so that to achieve the sync behaviour of JS
  // data contain the name of the files
  let data = await fs.promises.readdir("blogdata") // it will return promise into data var after completion

  let allBlogs = [] //to store that data of the files

  // to iterate in the each file
  for (let index = 0; index<data.length;index++){
    const item = data[index]

    // reading the each file
    let myfile = await fs.promises.readFile('blogdata/'+item, 'utf-8')

    // pushing the parse data (json) into an array
    allBlogs.push(JSON.parse(myfile))
  }

  res.status(200).json(allBlogs) //after that show to browser


  // using fs we read the json file and get the content as a JSON
  // fs.readdir('blogdata', (err, data) => {
  //   console.log(data)// return string; so need to parse
  //   let allBlogs = []

  //   data.forEach((item) => {
  //     console.log(item)

  //     fs.readFile('blogdata/' + item, 'utf-8', (content) => {
  //       allBlogs.push(content)
  //     })
  //   })

  //   res.status(200).json(allBlogs)
  // })

}
