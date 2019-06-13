import React, { Component } from 'react';
import {Card, CardActions, CardText, CardTitle, Button, CardMenu, IconButton} from 'react-mdl'
import './componentCSS/Project.css'

export default class Project extends Component {
  constructor(props){
    super(props);
    this.state=({
      a: [0,1,2,3,4,5,6,7,8,9]
    })
  }
  render() {
    return (
      <div className="cards">

      { 
        this.state.a.map((num,key)=>{
          console.log(num)
          return(
            <Card shadow={0} key={key} className="singleCard">
    <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis.
    </CardText>
    <CardActions border>
        <Button colored>View Updates</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton ripple name="share" onClick ={()=>console.log("pressed")} />
    </CardMenu>
</Card>
          )
        })
      }

      </div>
    )
  }
}
