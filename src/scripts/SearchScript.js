import React, { Component } from 'react'
import Search from '../components/Search'

export class SearchScript extends Component {

    componentDidMount(){
        const script1 = document.createElement("script")
        const script2 = document.createElement("script")
        const script3 = document.createElement("script")
        const script4 = document.createElement("script")
        const script5 = document.createElement("script")
        const script6 = document.createElement("script")

        script1.src = "jquery-1.9.1.js";
        script1.async = true;

        script2.src = "jquery-ui-1.10.4.custom.js";
        script2.async = true;

        script3.src = "box_hotels.js";
        script3.async = true;

        script4.src = "comun.js";
        script4.async = true;

        script5.src = "jquery.blockUI.js";
        script5.async = true;



        document.head.appendChild(script1);
        document.head.appendChild(script2);
        document.head.appendChild(script3);
        document.head.appendChild(script4);
        document.head.appendChild(script5);

    }
    
    render() {
        return (
            <Search></Search>
        )
    }
}

export default SearchScript