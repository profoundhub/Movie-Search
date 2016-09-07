var React = require('react');

var Footer = React.createClass({
  render: function() {
    return(
      <div>
        <p><hr /></p>
          <div className="well">
            <footer>
              <p className="text-center">
                © 2016 -- Daniel Lim | Profound Ideation Inc. | All Rights Reserved
              </p>
            </footer>
          </div>
      </div>
    )
  }
});

module.exports = Footer;
