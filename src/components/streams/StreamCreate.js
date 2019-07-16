import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

class StreamCreate extends Component {
  // eslint-disable-next-line
    renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  // eslint-disable-next-line
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

    return (
      <div className={className}>
        <label htmlFor={input.name}>
          {label}
          <input {...input} autoComplete="off" />
        </label>
        {this.renderError(meta)}
      </div>
    );
  };

  // eslint-disable-next-line
  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form className="ui form error" onSubmit={handleSubmit(this.onSubmit)}>
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />

        <button className="ui button primary" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

StreamCreate.propTypes = {
  handleSubmit: PropTypes.func,
};

const validate = formValues => {
  // Whenever an error is detected, it gets passed into the "renderInput" props object, as part of meta. It then can be accessed inside of that component's scope
  const errors = {};

  if (!formValues.title) errors.title = 'Please enter a title';
  if (!formValues.description)
    errors.description = 'Please enter a description';

  return errors;
};

export default reduxForm({
  form: 'streamCreate',
  validate,
})(StreamCreate);
