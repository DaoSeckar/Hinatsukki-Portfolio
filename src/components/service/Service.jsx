import React from 'react'
import './service.css'
import {BsCheck} from 'react-icons/bs'

const Service = () => {
  return (
    <section id='service'>
      <h1>My Commission Info!</h1>

      <div className="container service__container">
        <article className="service">
          <div className="service__head">
            <h3>Rigging Commission</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Something something something Bust</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Something something something half body</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Something something something full body</p>
            </li>
          </ul>
        </article>
        {/*End of Rigging comm*/}


        <article className="service">
          <div className="service__head">
            <h3>Art Commission</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Something something something Bust</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Something something something half body</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Something something something full body</p>
            </li>
          </ul>
        </article>
        {/*End of Art comm*/}       
        
         <article className="service">
          <div className="service__head">
            <h3>Art + Rig Commission</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Something something something Bust</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Something something something half body</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Something something something full body</p>
            </li>
          </ul>
        </article>
        {/*End of Art + Rig comm*/}

      </div>
    </section>
  )
}

export default Service