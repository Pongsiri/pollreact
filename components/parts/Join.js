var React = require('react');
var Link = require('react-router').Link;

var Join = React.createClass({

	join() {
		var memberName = React.findDOMNode(this.refs.name).value;
		this.props.emit('join', { name: memberName });
	},

	render() {
		return (
			<form action="javascript:void(0)" onSubmit={this.join}>

				<label>ใส่ชื่อ.....</label>
				<input ref="name"
					   className="form-control"
				       placeholder="ชื่อของคุณ"
				       required />
				<button className="btn btn-primary">ร่วมลงคะแนน</button>
				<Link to="/speaker">เมนูสำหรับผู้กำหนดหัวข้อ</Link>
				<Link to="/board">ผลรวมคะแนน</Link>
			</form>
		);
	}

});

module.exports = Join;