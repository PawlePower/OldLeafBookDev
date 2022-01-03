import React,{useState,useEffect} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './CategoriesComponent.css'
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';
import Product from './Product';
import Newsletter from './Newsletter';
import Footer from './Footer';



function CategoriesComponent() {

    const books = useState("")
    const [results, setResult] = useState([])


	// useEffect(async () => {

	// 	  var url ='https://www.googleapis.com/books/v1/volumes?q=science&key=AIzaSyAEYBt8poIFNwHX4ZiUoUv0kCvMi_feDts&maxResults=40';
	// 	  axios.get(url)
	// 		.then(data =>{
			  
	// 		  const res = data.data.items;
			  
	// 		  setResult(data.data.items);
	// 		  console.log({res});
	// 		})
	// 		.catch(error=>{console.log(error)})  
	


	//   }, [2]);
	

		function FetchData()
		{
	
		  var url ='https://www.googleapis.com/books/v1/volumes?q=science&key=AIzaSyAEYBt8poIFNwHX4ZiUoUv0kCvMi_feDts&maxResults=40';
		  axios.get(url)
			.then(data =>{
			  
			  const res = data.data.items;
			  
			  setResult(data.data.items);
			  console.log({res});
			})
			.catch(error=>{console.log(error)})  
	
			
		}

	
		
	


	return (
		<div>
		<div className="fetch_data" style={{marginTop:"60px"}}> <Button onClick={()=>FetchData()}>GOOGLE API</Button> </div>
		<Container fluid>
			<Row xs={1} sm={2} md={3} lg={3} xl={4}>

			{results.map(book => (
				<Col style={{marginBottom:"6px"}}>

                
               
                 <Product id={123} 
                 title={book.volumeInfo.title}
                  price={500}
                  image={book.volumeInfo.imageLinks.thumbnail}
                  rating={book.volumeInfo.averageRating}
                  author={book.volumeInfo.authors}
                  />
				
				</Col>
				))}

			</Row>
		</Container>
		<Newsletter></Newsletter>
		<Footer></Footer>
		</div>
	)
}

export default CategoriesComponent
