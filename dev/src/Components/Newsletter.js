import React from 'react'
import './Newsletter.css'

function Newsletter() {
    return (
        <div>
            <form action="" class="newsletter">
        <h2> <b> Join our Newsletter </b> </h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <div class="newsletter-box">
            <i class="fas fa-envelope"></i>
            <input class="emailbox" type="email" name="" value="" placeholder="Enter your email id" />
            <button type="button" name="button">Subscribe</button>
        </div>
    </form>
        </div>
    )
}

export default Newsletter
