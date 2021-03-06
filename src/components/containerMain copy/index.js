import React from 'react';
import {Route,Switch} from 'react-router-dom'
// 私有组件方法
import PrivateRouter from "../privateRouter/index";
/** 自动化工程 */
import Components from "./components";


class ContainerMain extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return (
        <Switch>
          {
            Components.map(item => {
              return <Route exact key={item.path} path={item.path} component={item.component} />
            })
          }
        </Switch>
    )
  }
}
export default ContainerMain;
