

import React from 'react';
import axios from 'axios';
import Giphy from "./Giphy";


class Fiszki extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            fiszki:[]
        }
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/fiszki/')
            .then(response => {
                console.log(response)
                this.setState({fiszki: response.data})
            })
            .catch(error  => {
                console.log(error)
            })



    }
    render() {
        const {fiszki} = this.state
        return(



            <div>
                lalal:
                {
                    fiszki.length ?
                    fiszki.map(fiszki => <div key={fiszki.id}>{fiszki.id} {fiszki.text} {fiszki.reverse}</div>) :
                    null


                }
                
            </div>




        );
    }
}

    export default Fiszki;
