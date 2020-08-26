import React, { Component } from 'react';
import axios from "axios";
import { Button } from '@material-ui/core';
// import MaterialTable from 'material-table';
 
class GetAllArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: []
    };
    this.getData = this.getData.bind(this);
  }

  async getData() {
    await axios
      .get('http://localhost:3000/articles')
      .then(response => { 
        const data = response.data.articles;
        console.log(data);
        this.setState({
          info : data[0]
        });
      });
      // .then(results => {
      //   const data = results.data.data;        
      //   this.setState({
      //     info: data,
      //     isLoading: false
      //   });
      // });
  }
 
  render() {
    // const columns = [
    //   { title: 'IP', field: 'ipAddresses' },
    //   { title: 'user', field: 'logonUserName' },
    //   { title: 'hostname', field: 'computerName'},
    //   { title: 'memory', field: 'memory'},
    //   { title: 'osName', field: 'osName'},        
    // ]
    
    
    return (
      <div>
        <Button variant="contained" color="primary" onClick={this.getData}>info get</Button>
        data={this.state.info.id}
      </div>
      // <div>                           
      //   <MaterialTable
      //   title="PC INFO"
      //   columns={columns}
      //   data={this.state.info}
      //   isLoading={this.state.isLoading}
      //   options={{
      //     pageSize: 10,
      //     pageSizeOptions: [10, 20,50, 100, 200, 300, 400 ,500],
      //     toolbar: true,
      //     paging: true
      //   }}
      //   />        
      //   <Button variant="contained" color="primary" onClick={this.getData}>info get</Button>
      // </div>
    )
  }
}
 
export default GetAllArticle