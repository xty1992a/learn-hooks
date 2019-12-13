import React, { Component } from "react";
import Icon from "components/Icon";
import "./index.less";

const rdm = () =>
  Math.random()
    .toString(36)
    .substr(2, 15);

export default /*class Search extends Component {
  static defaultProps = {
	placeholder: '搜索',
	value: '',
	onSearch: e => void 0,
	onInput: e => void 0,
  };

  state = {};

  constructor(props) {
	super(props);
	this.inputId = rdm();
	this.inputRef = React.createRef();
  }

  onConfirm = e => {
	e.preventDefault();
	this.props.onSearch(this.props.value);
	this.inputRef.current.blur();
  };
  onInput = e => {
	this.props.onInput(e.target.value);
  };

  render() {
	const rootClass = 'search ' + (this.state.isFocus ? 'search_focus' : '');
	return (
		<form onSubmit={this.onConfirm} className={rootClass}>
		  <input type="search"
				 ref={this.inputRef}
				 defaultValue={this.props.value}
				 id={this.inputId}
				 onInput={this.onInput}/>
		  <label className="search-mask" htmlFor={this.inputId}>
			<Icon name="search"/>
			<span className="search-placeholder">{this.props.placeholder}</span>
		  </label>
		  <button className="search-cancel-btn">取消</button>
		</form>
	);
  }
}*/

function SearchFn(props) {
  const inputRef = React.createRef();
  const inputId = rdm();

  const onConfirm = e => {
    e.preventDefault();
    props.onSearch(this.props.value);
    inputRef.current.blur();
  };
  const onInput = e => {
    props.onInput(e.target.value);
  };

  return (
    <form onSubmit={onConfirm} className="search">
      <input
        type="search"
        ref={inputRef}
        defaultValue={props.value}
        id={inputId}
        onInput={onInput}
      />
      <label className="search-mask" htmlFor={inputId}>
        <Icon name="search" />
        <span className="search-placeholder">{props.placeholder}</span>
      </label>
      <button className="search-cancel-btn">取消</button>
    </form>
  );
}
