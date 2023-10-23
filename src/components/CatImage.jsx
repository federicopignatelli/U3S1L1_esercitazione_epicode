import { Component } from 'react'

class CatImage extends Component {
    render () {
        return <img src={this.props.urlimage} alt={this.props.altimage} width="300px"></img>
    }
}

export default CatImage