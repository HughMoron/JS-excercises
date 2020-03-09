import React, {Component} from "react";

class titleHeader extends Component {
    state = {
        title: ""
    };
    static getDerivedStateFromProps(props, state){
       console.log("symc state with props");
       console.log("current state", state.title);
       console.log("new props", props.newTitle);

        if(state.title !== props.newTitle){
            return{
                title: props.newTitle
            };
        }else{
            return null
        }
    }
    render () {
        console.log("component did render")
        return <h1>{this.state.title}</h1>
    }
    componentDidMount(){
        console.log("component did mount")
    let header = document.querySelector("h1")
    header.style.background = "yellow"            
    }

    componentDidUpdate(){
        console.log("component did update")
        let header = document.querySelector("h1")
        header.style.background = "green"
    }

    componentWillUnmount(){
        console.log("component will unmount")
        alert("component will unmount")
        this.setState({
            title: ""
        });
    }
}


export default titleHeader;