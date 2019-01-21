import React, { Component } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import { Link } from 'react-router-dom'



class LoseScreenCont extends Component {

  state = {
    showModal: true
  }

  render(){
    return(
      <div>
      <Modal open={this.state.showModal} centered={true} closeOnDocumentClick={true} basic size='small'>
         <Header className='loseModalH' content='You Lost!'/>
         <Modal.Content>
           <p className='loseModalP'>
             That didn't turn out too well, did it?
           </p>
           <Link to={"/"}><Button>Try Again?</Button></Link>
         </Modal.Content>
      </Modal>
      </div>
    )
  }
}

export default LoseScreenCont;
