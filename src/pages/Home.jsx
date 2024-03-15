import { useEffect, useState } from "react"
import data from '../data/data.json'
import Card from '../components/Card'

function Home() {
const [books, setBooks] = useState([]);
const [local, setLocal] = useState([]);
const [exist, isExist] = useState();

useEffect(() => {
    setBooks(data);
    setLocal(getData);
}, [])

function handleBookmark(id) {
  let copied = JSON.parse(JSON.stringify(local));
  if (exist) {
    copied = copied.filter(el => {
      return !(el.imageLink == data.imageLink && el.title == data.title)
    })
  }else {
    copied.push(data);
  }
  setLocal(copied);
  localStorage.setItem('books', JSON.stringify(copied));
}

function getData() {
  let data =[];
  if (localStorage.getItem('books')) {
    data = JSON.parse(localStorage.getItem('books'))
  }
  return data;
}

  return (
    <div className="d-flex justify-content-between container flex-wrap gap-3 mt-4">
       {
        books.length > 0 && books.map((book, index) => {
          let isExist = false;
          if (local.length) {
            isExist = local.some(el => {
              return el.imageLink == book.imageLink
            })
          }
          return <Card exist={isExist} click={() => {handleBookmark}} key={index} data={book}></Card>
        })
       }
    </div>
  )
}

export default Home