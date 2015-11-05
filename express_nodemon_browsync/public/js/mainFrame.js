var classNames = require('classnames');
var MainFrame = React.createClass({
  getInitialState: function() {
    return null;
  },
  componentDidMount: function() {
    var socket = io.connect();
    socket.on('connect', function() {
      console.log('connected');
    });
    socket.on("unique-message", function(data) {
      console.log(data);
    });
    socket.on("message", function(data) {
      console.log(data);
    });
  },
  render: function() {
    return (
      <div className="MainFrame">
        <MainScreen />
        <ScreenBottom data={this.props.data}/>
      </div>
    );
  }
});
var MainScreen = React.createClass({
  render: function() {
    return (
      <div className="MainScreen">
        <ScreenTop />
        <TowerLeft />
        <TowerRight />
      </div>
    );
  }
});
var ScreenTop = React.createClass({
  render: function() {
    return (
      <div className="ScreenTop"></div>
    );
  }
});
var TowerLeft = React.createClass({
  render: function() {
    return (
      <div className="TowerLeft"></div>
    )
  }
});
var TowerRight = React.createClass({
  render: function() {
    return (
      <div className="TowerRight"></div>
    )
  }
});


var ScreenBottom = React.createClass({
  getInitialState: function() {
    console.log(this.props.data);
    return null
  },
  render: function() {
    var hero_btn = [];
    for(i=0;i<this.props.data.length;i++) {
      hero_btn.push(<div className=""></div>);
    }
    console.log(hero_btn);
    return (
      <div className="ScreenBottom">{hero_btn}</div>
    );
  }
});


var data = [
  {Name: "Ract", Color: "Yellow"},
  {Name: "Triangle", Color: "Blue"},
  {Name: "Circle", Color: "Purple"}
];

React.render(
  // React.createElement('h1', null, 'Hello, world!'),
  <MainFrame data={data}/>,
  document.getElementById('panel')
);
