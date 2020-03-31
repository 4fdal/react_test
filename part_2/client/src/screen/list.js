import React from 'react'

export default class List extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            list : []
        }
    }

    componentDidMount(){
        fetch('/api/get_list').then(response => response.json()).then(result => {
            this.setState({list : result})
        }).catch(err => console.log(err))
    }

    render(){
        const {list} = this.state

        return (
            <div className='App'>
                <h1> List .js </h1>
                {
                 list.length ? (
                    <div> 
                        {list.map(item => {
                            return (
                                <div>
                                    {item}
                                </div>
                            )
                        })}
                    </div>
                 ) : (
                    <div> 
                        Tidak Ada Item
                    </div>
                 ) 
                }
            </div>
        )
    }
}