import React, { Component } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import { Link } from 'react-router-dom'



class WinScreenCont extends Component {

  state = {
    showModal: true
  }

  render(){
    return(
      <div>
      <Modal open={this.state.showModal} centered={true} closeOnDocumentClick={true} basic size='small'>
         <Header className='winModalH' content='You Won!'/>
         <Modal.Content>
           <p className='winModalP'>
             Thanks to you, the curse has been lifted. And best of all, you're feeling very full right now.
           </p>
           <Link to={"/"}><Button>Play Again?</Button></Link>
         </Modal.Content>
      </Modal>
      </div>
    )
  }
}

export default WinScreenCont;
