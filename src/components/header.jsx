
function header(props) {
    return(
    <h1 style={{textAlign:"center"}}>Hello I am {props.value}</h1>
    )
}

export default header



// import {Component} from 'react'
// class header extends Component {

//     render() {
//         return(
//             <h1 style={{color:"white",textAlign:"center"}}>Hello I am {this.props.value}</h1>
//         )
//     }    
// }

// export default header