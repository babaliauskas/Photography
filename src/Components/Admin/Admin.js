import React from 'react'
import axios from 'axios'

export default class Admin extends React.Component {
    constructor(){
        super()
        this.state = {
            url: '',
            images: []
        }
    }

    componentDidMount = () => {
        axios.get('/api/get')
        .then(response => {
            this.setState({ images: response.data })
        })
    }

    handleDelete = (id) => {
        axios.delete(`/api/delete/${id}`)
        .then(deleted => {
            axios.get('/api/get')
                .then(response => {
                this.setState({ images: response.data })
            })
        })
        .catch(err => console.log(err))
    }

    handleImages = e => {
        this.setState({
            url: e
        })
    }

    handleAddImage = () => {
        axios.post('/api/newphoto', {url: this.state.url})
        .then(newPhoto => {
            axios.get('/api/get')
                .then(response => {
                this.setState({ images: response.data, url: '' })
            })
        })
    }
   
    render() {

        if (this.state.images[0]) {
            var images = this.state.images.map((e,i) => {
                console.log(e.id)
                return (
                    <div key={i}>
                        <div>
                            <img className='images' src={e.url} alt=""/>
                        </div>
                        <div> 
                            <button onClick={() => this.handleDelete(e.id)}>delete</button>
                        </div>
                    </div>
                )
            })
        }
        console.log(this.state.url)
        return (
            <div className='dashboard'>
                <input 
                    onChange={e => this.handleImages(e.target.value)}
                    type="text"
                    value={this.state.url}/>
                <button onClick={this.handleAddImage}>ADD</button>

                <div className='photo'>
                    {images}
                    
                </div>
            </div>
        )
    }
}