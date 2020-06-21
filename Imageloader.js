import React, { Component } from 'react'
import './Imageloader.css'
import Axios from 'axios'

class imageloader extends Component {
    constructor(props) {
        super(props)
        this.state = {
           allimages : "",
           imagesDetails : ""     
        }
        this.imageHandler = this.imageHandler.bind(this);  
        this.clickHandler = this.clickHandler.bind(this); 
    }

clickHandler(selectedImage){
     console.log(selectedImage)
   let values =  Object.keys(selectedImage).map((key, i) => (
        <p key = {i}>
            <span> {key} : </span>
            <span>  {selectedImage[key]}  </span>   
        </p>
    ))
   this.setState({imagesDetails : values})
  }  

 imageHandler(){
     Axios.get("https://pixabay.com/api/?key=17116025-59af6bf08512e84d50c227107&q=yellow+flowers&image_type=photo&pretty=true")
     .then(Response => {
        this.setState({ allimages : Response.data.hits.map(i => (
        <img className = 'table' key={i.id} src={i.previewURL} alt ='blank'
        onClick ={() => this.clickHandler(i)}/>))})
        
     })
 }   

    render() {
        return (
            <div> 
               <button onClick ={this.imageHandler}>Click Here to Open Images</button> 
               <span style={{width : '65%', float : 'left'}}>{this.state.allimages}</span>
               <span style={{float : 'inline-start', wordWrap : 'break-word'}}> {this.state.imagesDetails}</span>
            </div>
        )
    }
}

export default imageloader;
