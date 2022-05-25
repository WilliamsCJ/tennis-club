/**
 * validate is a function to validate form input in Formik, specific to the constraints of creating a new Match.
 */
 const validate = values => {
  const errors = {};

  if (!values.player1) {
    errors.player1 = 'Required';
  } 

  if (!values.player2) {
    errors.player2 = 'Required';
  } 

  if (values.player1 === values.player2) {
    errors.player2 = "Can't be the same"
  }

  if (!values.datePlayed) {
    errors.datePlayed = 'Required';
  } else if (new Date(values.datePlayed) > new Date()) {
    errors.datePlayed = "Can't be in future"
  }

  if (!values.venue) {
    errors.venue = 'Required';
  }

  if (!values.courtNumber) {
    errors.courtNumber = 'Required';
  }

  if (
    (values.set1P1Games === 6 && values.set1P2Games > 4) || 
    (values.set1P2Games === 6 && values.set1P1Games > 4) ||
    (values.set1P1Games === 7 && (values.set1P2Games !== 5 || values.set1P2Games !== 6)) || 
    (values.set1P2Games === 7 && (values.set1P1Games !== 5 || values.set1P1Games !== 6)) 
    ) {
      errors.set1P1Games = "Invalid scores.";
      errors.set1P2Games = "Invalid scores.";
    } else if (values.set1P1Games < 6 && values.set1P2Games < 6) {
      errors.set1P1Games = "Invalid scores.";
      errors.set1P2Games = "Invalid scores.";
    }

  if (
    (values.set2P1Games === 6 && values.set2P2Games > 4) || 
    (values.set2P2Games === 6 && values.set2P1Games > 4) ||
    (values.set2P1Games === 7 && (values.set2P2Games !== 5 || values.set2P2Games !== 6)) || 
    (values.set2P2Games === 7 && (values.set2P1Games !== 5 || values.set2P1Games !== 6)) 
    ) {
      errors.set2P1Games = "Invalid scores.";
      errors.set2P2Games = "Invalid scores.";
    } else if (values.set2P1Games < 6 && values.set2P2Games < 6) {
      errors.set2P1Games = "Invalid scores.";
      errors.set2P2Games = "Invalid scores.";
    }

  if (values.set3P1Games === '' && values.set3P2Games === '') {

  }
  else if ((values.set3P1Games === '' && values.set3P2Games !== '') || (values.set3P2Games === '' && values.et3P1Games !== '')) {
    errors.set3P1Games = "Invalid score.";
    errors.set3P2Games = "Invalid score.";
  } else if (
    (values.set3P1Games === 6 && values.set3P2Games > 4) || 
    (values.set3P2Games === 6 && values.set3P1Games > 4) ||
    (values.set3P1Games === 7 && (values.set3P2Games !== 5 || values.set3P2Games !== 6)) || 
    (values.set3P2Games === 7 && (values.set3P1Games !== 5 || values.set3P1Games !== 6)) 
    ) {
      errors.set3P1Games = "Invalid score.";
      errors.set3P2Games = "Invalid score.";
    } else if (values.set3P1Games < 6 && values.set3P2Games < 6) {
      errors.set3P1Games = "Invalid scores.";
      errors.set3P2Games = "Invalid scores.";
    }

  return errors;
};

export default validate;