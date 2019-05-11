import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const arrayOfColors = ["#cd6155", "#af7ac5", "#5499c7", "#48c9b0", "#58d68d", "#f5b041", "#dc7633", "#EAECEE",
                     "#c0392b", "#9b59b6", "#2980b9", "#1abc9c", "#2ecc71", "#f39c12", "#d35400", "#D5D8DC",
                     "#a93226", "#884ea0", "#2471a3", "#17a589", "#28b463", "#d68910", "#ba4a00", "#ABB2B9",
                     "#922b21", "#76448a", "#1f618d", "#148f77", "#239b56", "#b9770e", "#a04000", "#808B96",
                     "#7b241c", "#633974", "#1a5276", "#117864", "#1d8348", "#9c640c", "#873600", "#566573",
                     "#641e16", "#512e5f", "#154360", "#0e6251", "#186a3b", "#7e5109", "#6e2c00", "#2C3E50"];
var color = null;
var backgroundColor;

class Square extends React.Component {
    constructor(props){
        super(props);
        this.state = {boardColor: null,};
    }

    handleClick(){
      const boardColor = arrayOfColors[color]; 
      this.setState({boardColor});
    }
    
    render() {
      const {boardColor} = this.state;
      return (
        <button  className="square" style={{background: boardColor}}  onClick={() => this.handleClick()}>
          {this.state.value}
        </button>
      );
    }
}
  
class Board extends React.Component {
    renderSquare(i) {
      return <Square />;
    }
  
    render() {
      const status = 'Board';
  
      return (
        <div className="board-grid"> 
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
            {this.renderSquare(9)}
            {this.renderSquare(10)}
            {this.renderSquare(11)}
          </div>
          <div className="board-row">
            {this.renderSquare(12)}
            {this.renderSquare(13)}
            {this.renderSquare(14)}
            {this.renderSquare(15)}
            {this.renderSquare(16)}
            {this.renderSquare(17)}
          </div>
          <div className="board-row">
            {this.renderSquare(18)}
            {this.renderSquare(19)}
            {this.renderSquare(20)}
            {this.renderSquare(21)}
            {this.renderSquare(22)}
            {this.renderSquare(23)}
          </div>
          <div className="board-row">
            {this.renderSquare(24)}
            {this.renderSquare(25)}
            {this.renderSquare(26)}
            {this.renderSquare(27)}
            {this.renderSquare(28)}
            {this.renderSquare(29)}
          </div>
          <div className="board-row">
            {this.renderSquare(30)}
            {this.renderSquare(31)}
            {this.renderSquare(32)}
            {this.renderSquare(33)}
            {this.renderSquare(34)}
            {this.renderSquare(45)}
          </div>
        </div>
      );
    }
}

class ColorSquare extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: null,
        };
        let myStyle = {background: "pink"};
        myStyle.background  = arrayOfColors[this.props.value];
        backgroundColor = myStyle;
    }
    render() {
      return (
        <button className="square" style={backgroundColor} onClick={() =>{color = this.props.value;}}>
          {}
        </button>
      );
    }
}

class Colors extends React.Component {
    renderColor(i) {
      return <ColorSquare value={i} />;
    }
  
    render() {
      const status = 'Colours';
  
      return (
        <div className="colour-grid">
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderColor(0)}
            {this.renderColor(1)}
            {this.renderColor(2)}
            {this.renderColor(3)}
            {this.renderColor(4)}
            {this.renderColor(5)}
            {this.renderColor(6)}
            {this.renderColor(7)}
          </div>
          <div className="board-row">
            {this.renderColor(8)}
            {this.renderColor(9)}
            {this.renderColor(10)}
            {this.renderColor(11)}
            {this.renderColor(12)}
            {this.renderColor(13)}
            {this.renderColor(14)}
            {this.renderColor(15)}
          </div>
          <div className="board-row">
            {this.renderColor(16)}
            {this.renderColor(17)}
            {this.renderColor(18)}
            {this.renderColor(19)}
            {this.renderColor(20)}
            {this.renderColor(21)}
            {this.renderColor(22)}
            {this.renderColor(23)}
          </div>
          <div className="board-row">
            {this.renderColor(24)}
            {this.renderColor(25)}
            {this.renderColor(26)}
            {this.renderColor(27)}
            {this.renderColor(28)}
            {this.renderColor(29)}
            {this.renderColor(30)}
            {this.renderColor(31)}
          </div>
          <div className="board-row">
            {this.renderColor(32)}
            {this.renderColor(33)}
            {this.renderColor(34)}
            {this.renderColor(35)}
            {this.renderColor(36)}
            {this.renderColor(37)}
            {this.renderColor(38)}
            {this.renderColor(39)}
          </div>
          <div className="board-row">
            {this.renderColor(40)}
            {this.renderColor(41)}
            {this.renderColor(42)}
            {this.renderColor(43)}
            {this.renderColor(44)}
            {this.renderColor(45)}
            {this.renderColor(46)}
            {this.renderColor(47)}
          </div>
        </div>
      );
    }
}
  
class Display extends React.Component {
    render() {
      const title = "PIXEE";
      return (
        <div className="container">
          <div className="header">
            <h1>{title}</h1>
          </div>

          <div className="game-board">
            <Board />
            <Colors />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Display />,
    document.getElementById('root')
  );
  