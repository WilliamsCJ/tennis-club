/**
 * validate is a function to validate form input in Formik, specific to the constraints of creating a new Player.
 */
const validate = values => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'Required';
    } else if (values.firstName && values.firstName.length > 255) {
      errors.firstName = 'Too long';
    }

    if (values.middleNames && values.middleNames.length > 255) {
      errors.middleNames = 'Too long';
    }

    if (!values.lastName) {
      errors.lastName = 'Required';
    } else if (values.lastName && values.lastName.length > 255) {
      errors.lastName = 'Too long';
    }
  
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email';
    }

    if (!values.dob) {
      errors.dob = 'Required';
    }

    if (!values.phone1) {
      errors.phone1 = 'Required';
    } else if (!/^[0-9]*$/i.test(values.phone1)) {
      errors.phone1 = 'Invalid phone number';
    }

    if (values.phone2 && !/^[0-9]*$/i.test(values.phone2)) {
      errors.phone2 = 'Invalid phone number';
    }

    if (values.phone3 && !/^[0-9]*$/i.test(values.phone3)) {
      errors.phone3 = 'Invalid phone number';
    }
  
    return errors;
  };

export default validate;