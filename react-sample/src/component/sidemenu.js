import React from 'react';
import Sidebar from 'react-sidebar';
 
class SideMenu extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        sidemenuOpen: true
      };
      this.onSetSideMenuOpen = this.onSetSideMenuOpen.bind(this);
    }
  
    onSetSideMenuOpen(open) {
      this.setState({ sidebarOpen: open });
    }
  
    render() {
      return (
        <Sidebar
          sidebar={<div><b>サイドバー</b><br></br><b>サイドバー</b></div>}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          styles={{ sidebar: { background: "white" } }}
        >
          <button onClick={() => this.onSetSideMenuOpen(true)}>
            サイドーバーを開く
          </button>
        </Sidebar>
      );
    }
  }
  
  
export default SideMenu