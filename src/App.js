import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
import users from './data'
function App () {
  let [value, setValue] = useState(0)

  //TODO:
  //push to git latter

  // initialize before pushing to  github

  // const { title, image, name, quote } = users[value]

  //If Number is  greater than the length of an array, then return 0
  const filterNumber = number => {
    if (number > users.length - 1) {
      return 0
    }
    //If Number is less than the length of an array, then  return  the last value in the array

    if (number < 0) {
      return users.length - 1
    }
    return number
  }

  const prevPerson = () => {
    setValue(index => {
      let newIndex = index - 1
      return filterNumber(newIndex)
    })
  }

  //move forward to  the from  the beginning of the array
  const nextPerson = () => {
    setValue(index => {
      let newIndex = index + 1
      return filterNumber(newIndex)
    })
  }

  //Apply Clear function to apply clean slate animation
  useEffect(() => {
    let slider = setInterval(() => {
      setValue(oldValue => {
        let number = oldValue + 1
        if (value > users.length - 1) {
          return (number = +0)
        }
        return number
      })
    }, 3000)

    return () => clearInterval(slider)
  }, [value])

  //move backward  in the  array

  return (
    <main className='section'>
      <h1 className='title'>
        <span>/</span>
        Reviews
      </h1>

      <div className='section-center'>
        {users.map((user, personIndex) => {
          const { id, image, name, title, quote } = user

          //for Slideshow position changing  the index in relation  to  the css position

          let position = 'nextSlide'

          if (personIndex === value) {
            position = 'activeSlide'
          }
          if (
            personIndex === value - 1 ||
            (value === 0 && personIndex === users.length - 1)
          ) {
            position = 'lastSlide'
          }
          return (
            <article className={position} key={id}>
              <h4 className='title'></h4>
              <div className='title'>
                <img src={image} alt={name} className='person-img' />

                <h4> {name}</h4>

                <h4 className='title'>{title}</h4>

                <p>{quote}</p>
                <FaQuoteRight className='icon' />
              </div>
              <div></div>
            </article>
          )
        })}

        <button className='next-btn' onClick={nextPerson}>
          {console.log(value)}

          <FiChevronRight className='next' />
        </button>

        <button className='prev-btn' onClick={prevPerson}>
          <FiChevronLeft className='prev' />
        </button>
      </div>
    </main>
  )
}

export default App
