var React = require('react');

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

module.exports = Footer;
