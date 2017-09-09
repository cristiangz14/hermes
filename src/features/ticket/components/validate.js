const isBlank = value => (!value || /^\s*$/.test(value));

const isEmail = email => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

const validate = (values) => {
  const errors = {};

  if (isBlank(values.subject)) {
    errors.subject = 'Please input the subject';
  }

  if (isBlank(values.severity)) {
    errors.severity = 'Please choose the severity';
  }

  if (isBlank(values.description)) {
    errors.description = 'Please input the description';
  }

  if (!isBlank(values.requesterEmail) && !isEmail(values.requesterEmail)) {
    errors.requesterEmail = 'Please input a valid email';
  }

  if ((!isBlank(values.requesterName) && isBlank(values.requesterEmail))) {
    errors.requesterEmail = 'Please input the email';
  }

  if ((!isBlank(values.requesterEmail) && isBlank(values.requesterName))) {
    errors.requesterName = 'Please input the name';
  }

  return errors;
};

export default validate;
