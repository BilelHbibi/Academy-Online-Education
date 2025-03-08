import React from 'react'
import "./contact.css"
import Back from '../common/back/Back'

const Contact = () => {
    const map='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d409961.03475633205!2d10.049405147241004!3d36.606629950824164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2stn!4v1693700683899!5m2!1sfr!2stn" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
  return (
    <>
     <Back title="Contact Us"/>
     <section className='contact padding'>
        <div className="container shadow flexSB">
            <div className="left row">
                <iframe src={map}></iframe>
            </div>

            <div className="right row">
                <h1>Contact Us</h1>
                <p>We're open for any suggestion or just to have a chat</p>
                <div className="items grid3">
                    <div className="box">
                        <h4>ADDRESS: </h4>
                        <p>198 West 21th Street, Suite 721 New York NY 10016</p>
                    </div>
                    <div className="box">
                        <h4>EMAIL :</h4>
                        <p>info@yoursite.com</p>
                    </div>
                    <div className="box">
                        <h4>PHONE: </h4>
                        <p>+ 1235 2355 98</p>
                    </div>
                </div>

                <form action="">
                    <div className="flexSB">
                        <input type="text" placeholder='Name'/>
                        <input type="email" placeholder='Email'/>
                    </div>
                    <input type="email" placeholder='Subject'/>
                    <textarea cols="30" rows="10">
                        Create a message here ...
                    </textarea>
                    <button className="primary-btn">SEND MESSAGE</button>
                </form>
                <h3>Follow us here</h3>
                <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
            </div>
        </div>
     </section>
    </>
  )
}

export default Contact