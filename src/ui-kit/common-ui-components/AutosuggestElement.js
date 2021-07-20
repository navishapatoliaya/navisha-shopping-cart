import React, { Component } from "react";
import PropTypes from "prop-types";
import Autosuggest from "react-autosuggest";

class AutosuggestElement extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
    this.props.onChange(this.state);
  };

  getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength === 0
      ? []
      : this.props.suggestionValues.filter(
          lang => lang.name.toLowerCase().slice(0, inputLength) === inputValue
        );
  };
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  getSuggestionValue = suggestion => suggestion.name;

  renderSuggestion = suggestion => <div>{suggestion.name}</div>;

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: this.props.placeholder,
      value,
      onChange: this.onChange
    };
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

AutosuggestElement.propTypes = {
  suggestionValues: PropTypes.array.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func
};

export default AutosuggestElement;