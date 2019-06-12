import React, { Component } from 'react';
import {Card, CardActions, CardText, CardTitle, Button, CardMenu, IconButton} from 'react-mdl'

export default class Project extends Component {
  render() {
    return (
      <div>
        <Card shadow={0} style={{width: '320px', marginTop: '10%' , height: '320px', margin: 'auto'}}>
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
      </div>
    )
  }
}
