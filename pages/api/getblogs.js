// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// If you hit this  getblogs.js api with query: http://localhost:3000/api/getblogs?slug=how-to-learn-javascript
// it will return that data in the particular blog as a response

import * as fs from 'fs'

export default function handler(req, res) {
  // using fs we read the json file and get the content as a JSON
  fs.readFile(`blogdata/${req.query.slug}.json`, 'utf-8', (err, data) => {
    if (err) {
      res.status(500).json({ error: "No Blogs Found" })
    }

    console.log(data)// return string; so need to parse
    console.log(req.query.slug) // it will give you the query after '?'; eg:http://localhost:3000/api/getblogs?slug=rohan
    res.status(200).json(JSON.parse(data))
  })

}
