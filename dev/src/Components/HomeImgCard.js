import React from 'react'
import './HomeImgCard.css'

function HomeImgCard() {
    return (
        <div className="HomeImgCard_container">
            <article>
    <figure>
        <img alt="A rather marvellous macaw, opening one of its wings to support the cause." src="https://images.pexels.com/photos/2317904/pexels-photo-2317904.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
    </figure>

    <div>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellat, consequuntur doloribus voluptate esse iure?
        </p>
        <h1>
            Marvellous Macaw
        </h1>
    </div>
</article>
        </div>
    )
}

window.onload = function () {
    const article = document.querySelector('article');

// to compute the center of the card retrieve its coordinates and dimensions
const {
  x, y, width, height,
} = article.getBoundingClientRect();
const cx = x + width / 2;
const cy = y + height / 2;

// following the mousemove event compute the distance betwen the cursor and the center of the card
function handleMove(e) {
  const { pageX, pageY } = e;

  // ! consider the relative distance in the [-1, 1] range
  const dx = (cx - pageX) / (width / 2);
  const dy = (cy - pageY) / (height / 2);

  // rotate the card around the x axis, according to the vertical distance, and around the y acis, according to the horizontal gap 
  this.style.transform = `rotateX(${10 * dy * -1}deg) rotateY(${10 * dx}deg)`;
}

// following the mouseout event reset the transform property
function handleOut() {
  this.style.transform = 'initial';
}

article.addEventListener('mousemove', handleMove);
article.addEventListener('mouseout', handleOut);

}

export default HomeImgCard
