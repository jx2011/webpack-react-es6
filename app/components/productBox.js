/**
 * Created by zeng on 2016/5/9.
 */
var React = require('react');
var ProductBox;
ProductBox = React.createClass({
    render: function () {
        return (
            <div className="productBox">
                hello react&es2015&webpack!
            </div>
        );
    }
});

module.exports = ProductBox;