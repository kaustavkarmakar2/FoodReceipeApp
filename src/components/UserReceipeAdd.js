
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Button from '@material-ui/core/Button';

const SimpleForm = (props) => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit} >
      <div>
        <label>Name of dish</label>
        <div>
          <Field name="Name of dish" component="input" type="text" placeholder="Name of dish"/>
        </div>
      </div>
      <div>
        <label>Steps To cook</label>
        <div>
          <Field name="Steps To cook" component="input" type="text" placeholder="Steps To cook"/>
        </div>
      </div>
      <div>
        <label>Quatity</label>
        <div>
          <Field name="Quatity" component="input" type="text" placeholder="Quatity"/>
        </div>
      </div>
      <div>
        <label>Ingredient name</label>
        <div>
          <Field name="Ingredient name" component="input" type="text" placeholder="Ingredient name"/>
        </div>
      </div>
      
      
      
      <div>
        <label>Notes</label>
        <div>
          <Field name="notes" component="textarea"/>
        </div>
      </div>
      <div>
        <Button type="submit" >Submit</Button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'simple'  // a unique identifier for this form
})(SimpleForm)