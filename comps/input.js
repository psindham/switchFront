

// import {Link} from 'react-router-dom';
const UDInput = ({placeholder,name,type,defaulttext,required}) => {
    return ( 
        <input type={type} className="form-control bordercolor" id={name} placeholder={placeholder} text={defaulttext} required={required} />
    );
}
 
export default UDInput;