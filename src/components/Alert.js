import React from "react";
// import PropTypes from 'prop-types'


function alert(props) {
    const capitalize =(word)=>{
        let lower = word.toLowerCase()
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
  return (    
      props.alert &&<div className={`alert alert-${props.alert.type} alert-dismissible fade show`}role="alert">
        <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
        
      </div>
    
  );
}

export default alert;