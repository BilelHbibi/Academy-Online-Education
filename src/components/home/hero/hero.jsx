import React from 'react'
import "./hero.css"
import Title from '../../common/title/Title'

const hero = () => {
  return (
    <>
     <section className="hero">
        <div className="container">
            <div className="row">
                <Title subtitle='WELCOME TO ACADEMIA' title='BEST ONLINE EDUCATION'/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid perspiciatis illo debitis eligendi aliquam. Rerum officiis deleniti aliquam tempore sequi quae corporis, praesentium, enim id nisi assumenda repellat accusamus soluta.</p>
                <div className="button">
                    <button className='primary-btn'>
                        GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
                    </button>
                    <button>
                        VIEW COURSES <i className='fa fa-long-arrow-alt-right'></i>
                    </button>
                </div>
            </div>
        </div>
     </section>
    </>
  )
}

export default hero