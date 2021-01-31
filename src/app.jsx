
/* class App extends React.Component {
  
    nameComponent() {
      return ( <h1 className='headerName'>Mayur Bagwe</h1>);
    }

    imageComponent() {
        return (<div><img src="/my_image.jpeg" alt="mypic" width="350" height="350"/> </div>);
      }

    bioComponent() {
        return (<div className="center"> Mayur is as Full-Stack Software Developer, currently living in Mumbai, India. I have done Bachelor of Engineering in Information Technology from Mumbai University. I began my software engineering career for Capgemini India in 2015 and was involved in designing and implementing enterprise business solutions for our clients across various domains. I am very passionate about working on emerging technologies and still striving to better myself as a Full-Stack Developer.</div>);
    }
    
    buttonClick(){
        console.log("Inside click fn")
        window.open("https://github.com/MayurBagwe", "_blank"); 
    }

    render() {
      return ( 
        <div>
            {this.nameComponent()}
            {this.imageComponent()}
            {this.bioComponent()}
            <div className="wrapper">
                <button  className="button" onClick={this.buttonClick.bind(this)}>View my Git Hub Repo</button>
            </div> 
         </div>
       )
    }
} */
//ReactDOM.render(<App/>, document.getElementById('myName'));




const element = (
    <div title="React App">
        <h1 className='headerName'>Mayur Bagwe</h1>


        <div><img src="/my_image.jpeg" alt="mypic" width="350" height="350" /> </div>

        <div className="center">
            Mayur is a Software Developer, currently living in Mumbai, India. I have done Bachelor of Engineering in Information Technology from Mumbai University. I began my software engineering career for Capgemini India in 2015 and was involved in designing and implementing enterprise business solutions for our clients across various domains using SAP,Oracle,Java. I am very passionate about working on emerging technologies and still striving to better myself as a Full-Stack Developer.
         </div>
        <div className="wrapper">
                <a href="https://github.com/MayurBagwe" target="_blank" className="button">View my GITHUB Repo</a>
        </div>
    </div>
)

ReactDOM.render(element, document.getElementById('myName'));

