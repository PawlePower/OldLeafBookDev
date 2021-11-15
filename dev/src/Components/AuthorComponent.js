import React from 'react'
import './AuthorComponent.css'


function AuthorComponent() {
    return (
        <div className="container_author">
        <div class='container_a mx-auto mt-5 col-md-10 col-11'>
    <div class="header text-muted"> What people are saying about LXD </div>
    <div class="row" style={{justifyContent: "center"}}>
        <div class="card col-md-3 col-11">
            <div class="card-content">
                <div class="card-body p-0">
                    <div class="profile mb-4 mt-3"> <img src="https://i.imgur.com/Ur43esv.jpg"/> </div>
                    <div class="card-subtitle">
                        <p> <small class="text-muted"> <i class="fas fa-quote-left"></i> I expected anything less than perfect for the team of experts. They are the best team ever! <i class="fas fa-quote-left fa-flip-horizontal"></i> </small> </p>
                    </div>
                    <div class="card-body company"> <i class="fab fa-ebay fa-2x"></i> <small class="intro text-muted">Sam Diago, Marketer</small> </div>
                </div>
            </div>
        </div>
        <div class="card col-md-3 col-11 second">
            <div class="card-content">
                <div class="card-body p-0">
                    <div class="profile mb-4 mt-3"> <img src="https://i.imgur.com/8RKXAIV.jpg"/> </div>
                    <div class="card-subtitle">
                        <p> <small class="text-muted"> <i class="fas fa-quote-left "></i> I really enjoyed working with them, they are Group of Professionals and they know what they're Doing <i class="fas fa-quote-left fa-flip-horizontal"></i> </small> </p>
                    </div>
                    <div class="card-body company"> <i class="fab fa-amazon fa-2x"></i><small class="intro text-muted">Monty Jones, Software Developer</small> </div>
                </div>
            </div>
        </div>
        <div class="card col-md-3 col-11 third">
            <div class="card-content">
                <div class="card-body p-0">
                    <div class="profile mb-4 mt-3"> <img src="https://i.imgur.com/J6l19aF.jpg"/> </div>
                    <div class="card-subtitle">
                        <p> <small class="text-muted"> <i class="fas fa-quote-left"></i> I always wanted cool videos of my concerts never knew whom to talk to but they are amazing! <i class="fas fa-quote-left fa-flip-horizontal"></i> </small> </p>
                    </div>
                    <div class="card-body company"> <i class="fab fa-yelp fa-2x"></i><small class="intro text-muted">John Tim, Tech Support</small> </div>
                </div>
            </div>
        </div>
    </div>
</div>
        </div>
    )
}


    



export default AuthorComponent
