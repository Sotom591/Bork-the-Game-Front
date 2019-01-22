import React, { Component } from 'react';
import { Modal } from 'semantic-ui-react'
import { Link } from 'react-router-dom'



class WinScreenCont extends Component {

  state = {
    showModal: true
  }

  render(){
    return(
      <div>
      <Modal open={this.state.showModal} centered={true} closeOnDocumentClick={true} basic size='small'>
         <p className="modalH"> Goodboi, Bestboi! </p>
         <Modal.Content>
           <p className="modal">
             Thanks to you, the curse has been lifted. And best of all, you're feeling very full right now.
           </p>
           <Link to={"/"}><button className="modalBtn" onClick="window.location.reload()">Play Again?</button></Link>
         </Modal.Content>
      </Modal>
      </div>
    )
  }
}

export default WinScreenCont;
