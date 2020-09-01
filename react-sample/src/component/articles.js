import React, { Component } from 'react';
import axios from "axios";
import { Button, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, makeStyles } from '@material-ui/core';
import './articles.scss'

class Articles extends Component {
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
        const articles = response.data.articles;
        console.log(articles);
        this.setState({
          info : articles
        });
      });
  }
 
  render() {
    return (
      <div>
        <TableContainer component = {Paper} width= "50%">
          <Table className = {classes.table} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>記事のタイトル</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.info.map( (article) => (
                <TableRow key = {article.name}>
                  <TableCell component = "th" scope = "row">
                    {article.title}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button variant="contained" color="primary" onClick={this.getData}>info get</Button>
      </div>
    );
  }
}
 
export default Articles