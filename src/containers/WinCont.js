import React, { Component } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react'



class WinCont extends Component {

  state = {
    showModal: true
  }

  // handleWin = () => {
  //   if(this.props.player.kills.count === 3){
  //     console.log("you win")
  //     this.setState({
  //       showModal: !this.state.showModal
  //     })
  //   }
  // }
  //
  // componentDidUpdate(){
  //   this.handleWin()
  // }

  render(){
    return(
      <div>
      <Modal open={this.state.showModal} centered={true} closeOnDocumentClick={true} basic size='small'>
         <Header content='You Won!' />
         <Modal.Content>
           <p>
             Thanks to you, the curse has been lifted. And best of all, you're feeling very full right now.
           </p>
         </Modal.Content>
      </Modal>
      </div>
    )
  }

}

export default WinCont;
