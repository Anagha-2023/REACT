function Header(props){
  return(
    <h1>Hello I am {props.data}</h1>
  )
}
export default Header;

// class component

// import {Component} from 'react';

// class Header extends Component{
//   render(){
//     return (
//       <h1>Hello I am a {this.props.data}</h1>
//     )
//   }
// }

// export default Header