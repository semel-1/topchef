import React from "react";
import PropTypes from "prop-types";
import './InputContainer.css';

const InputContainer = (props) => {
  const {
    label,
    type,
    placeholder,
    id,
    className,
    required,
  } = props;

  return (
    <div className="flex flex-col gap-3">
      <label
        htmlFor={id || ""}
        className="text-gray-200 text-lg uppercase"
      >
        {label}{" "}
        <small className="text-yellow-500 text-lg">*</small>
      </label>
      <input
        type={type || "text"}
        placeholder={placeholder || ""}
        id={id || ""}
        className={`h-14 bg-[#1a1c1d] px-5 text-gray-200 text-lg font-thin ${className } border-[1px] border-[#1a1c1d] focus:border-yellow-500 hover:border-yellow-500 focus:outline-none transition-colors duration-300`}
        required={required || false}
        
      />
    </div>
  );
};

InputContainer.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  required: PropTypes.bool,
};

InputContainer.defaultProps = {
  type: "text",
  placeholder: "",
  id: "",
  className: "",
  required: false,
};

export default InputContainer;
