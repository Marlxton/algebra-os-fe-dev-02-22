import './FormMessage.css'

function FormMessage(props) {
    if (!props.visible) return null;
  
    return <div className="form-message">Successfuly signed in!
    </div>;
  }

  export default FormMessage;