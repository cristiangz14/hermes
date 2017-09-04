const isBlank = (value) => {
  return (!value || /^\s*$/.test(value))
}

const isEmail = (email) => {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
}

const validate = values => {
  const errors = {}


  if (isBlank(values.subject)) {
    errors.subject = 'Required'
  }

  if (isBlank(values.severity)) {
    errors.severity = 'Required'
  }

  if (isBlank(values.description)) {
    errors.description = 'Required'
  }

  /*if (!values.requestedBy || !values.requestedBy.length) {
    errors.requestedBy = 'Required'
  }*/
  return errors
}

export default validate
