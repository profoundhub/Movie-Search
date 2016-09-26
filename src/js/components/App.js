const leaderboard = document.getElementById("leaderboard");

let daniel = "http://www.freecodecamp.com/profoundhub";
let recent = "https://fcctop100.herokuapp.com/api/fccusers/top/recent";
let alltime = "https://fcctop100.herokuapp.com/api/fccusers/top/alltime";

var TableTop = React.createClass({
  change: function(x) {
    this.props.changeSrc(x);
  },

  render: function() {
    return (
      <tr id="header">
        <th>Rank</th>
        <th>Avatar</th>
        <th>UserName</th>
        <th onClick = { this.change.bind(this, alltime) }>
          <i className="fa fa-check" aria-hidden="true"></i>
            <a className="hvr-pulse">All Time</a>
        </th>
        <th onClick = { this.change.bind(this, recent) }>
          <i className="fa fa-check" aria-hidden="true"></i>
            <a className="hvr-pulse">Recent</a>
        </th>
      </tr>
    );
  }
});

var Template = React.createClass({
  render: function() {
    return (
      <tr>
        <td>
          { this.props.index }
        </td>
        <td>
          <p>
            <img src={ this.props.data["img"] } />
          </p>
        </td>
        <td>
          <p>
            { this.props.data["username"] }
          </p>
        </td>
        <td>
          <p>
            { this.props.data["alltime"] }
          </p>
        </td>
        <td>
          <p>
            { this.props.data["recent"] }
          </p>
        </td>
      </tr>
    );
  }
});

var LeaderBoard = React.createClass({
  getInitialState: function() {
    return {
      source: recent,
      data: [],
    };
  },

  componentDidMount: function() {
    this.changeSrc(this.state.source);
  },

  changeSrc: function(x) {
    this.serverRequest = $.get(x, function (result) {
      this.setState({
        data: result
      });
    }.bind(this));
  },

  render: function() {
    return (
      <div>
        <h1 className="center-this">Build an FCC Camper Leaderboard!</h1>
          <table>
            <TableTop changeSrc = { this.changeSrc.bind(this) } />
            {
              this.state.data.map(function(curr, index) {
                return <Template index = { index + 1 } data = { curr } />;
              })
            }
          </table>
      </div>
    );
  }
});

var Footer = React.createClass({
  render: function() {
    return(
      <div>
        <br /><hr /><br />
        <footer className="well">
          <p className="text-center">&copy; 2016 -- Daniel Lim | Profound Ideation Inc. | All Rights Reserved</p>
        </footer>
      </div>
    )
  }
});

ReactDOM.render(
  <div>
    <LeaderBoard />
    <Footer />
  </div>, leaderboard
);
