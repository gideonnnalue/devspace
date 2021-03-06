import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const InputGroup = props => {
  const {
    name,
    placeholder,
    value,
    error,
    icon,
    type,
    onChange,
  } = props;
  return (
    <div className="input-group mb-3">
        <div className="input-group-prepend">
            <div className="input-group-text form-textfield">
                <i className={icon}></i>
            </div>
        </div>
      <input
        className={classnames("form-control form-control-lg form-textfield", {
          "is-invalid": error
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

InputGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    icon: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired
}

InputGroup.defaultProps = {
    type: 'text'
}


export default InputGroup;
