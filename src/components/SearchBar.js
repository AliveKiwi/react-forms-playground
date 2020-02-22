import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
    // this.onFormSubmit = this.onFormSubmit.bind(this); USE THIS WITH (A)
  }

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  //   onFormSubmit(e) { //THIS IS (A)
  //     e.preventDefault();
  //     this.props.onSubmit(this.state.term);
  //   }

  render() {
    return (
      <div className="ui segment">
        {/* <form className="ui form" onSubmit={this.onFormSubmit}> */}
        {/* <form className="ui form" onSubmit={e => this.onFormSubmit(e)}> */}
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>
              <p>Search Bar</p>
              <input
                type="text"
                value={this.state.term}
                onChange={e => this.setState({ term: e.target.value })}
              ></input>
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
