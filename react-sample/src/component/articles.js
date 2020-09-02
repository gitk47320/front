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
    // this.getData = this.getData.bind(this);
  }

  componentWillMount() {
    axios
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
    <div className = "articles">
      <TableContainer component = {Paper}>
        <Table size="small" aria-label="simple table">
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
    </div>
    );
  }
}
 
export default Articles