/* eslint-disable func-names */

import * as yup from 'yup';

const phoneRegEx = /.+/;

yup.addMethod(yup.string, 'phone', function (errorMessage)
{
  return this.matches(phoneRegEx, errorMessage);
});

export default yup;
