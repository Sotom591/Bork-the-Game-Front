import React, { Component } from 'react';
import { Modal } from 'semantic-ui-react'
import { Link } from 'react-router-dom'



class LoseScreenCont extends Component {

  state = {
    showModal: true
  }

  render(){
    return(
      <div>
      <Modal open={this.state.showModal} centered={true} closeOnDocumentClick={true} basic size='small'>
         <p className="modalH">Poor Pupper...</p>
         <Modal.Content>
           <p className="modal">
             That didn't turn out too well, did it?
           </p>
           <Link to={"/"}><button onClick="window.location.reload()" className="modalBtn">Try Again?</button></Link>
         </Modal.Content>
      </Modal>
      </div>
    )
  }
}

export default LoseScreenCont;
