import { useState } from 'react'
import people from './data'
import {
  BiChevronLeft,
  BiChevronRight,
  BiSolidQuoteRight,
} from 'react-icons/bi'
const App = () => {
  const [index, setIndex] = useState(0)
  const { name, image, job, text } = people[index]

  // we can use this as a next and Previous person
  const nextPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex + 1) % people.length

      return newIndex
    })
  }
  const prevPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex - 1 + people.length) % people.length

      return newIndex
    })
  }

  // or we can use this as a next and Previous person
  // // const nextPerson = () => {
  // //   setIndex((currentIndex) => {
  // //     const newIndex = currentIndex + 1
  // //     if (newIndex > people.length - 1) {
  // //       return 0
  // //     }
  // //     return newIndex
  // //   })
  // // }
  // // const prevPerson = () => {
  // //   setIndex((currentIndex) => {
  // //     const newIndex = currentIndex - 1
  // //     if (newIndex < 0) {
  // //       return people.length - 1
  // //     }
  // //     return newIndex
  // //   })
  // // }

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length)
    if (randomNumber === index) {
      randomNumber = index + 1
    }
    const newIndex = randomNumber % people.length
    setIndex(newIndex)
  }

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <BiSolidQuoteRight />
          </span>
        </div>
        <h4 className="author"> {name} </h4>
        <p className="job"> {job} </p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <BiChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <BiChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>
          Random Person
        </button>
      </article>
    </main>
  )
}
export default App
