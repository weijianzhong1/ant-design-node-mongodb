import React, { Component } from "react";
// asideMenu
import AsideMenu from "../../../components/asideMneu/index.js";

class Aside extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
            <AsideMenu  />
        )
    }
}

export default Aside;