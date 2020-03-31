import React from 'react'
import {Link} from 'react-router-dom'

class Home extends React.Component{
    render(){
        return (
            <div className='app'>
                <h1> Home .js </h1>
                <Link to={'./list'}>
                    <button variant="raised">
                        To List
                    </button>
                </Link>
            </div>
        )
    }
}

export default Home