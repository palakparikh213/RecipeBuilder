//https://www.freecodecamp.org/news/how-to-perform-crud-operations-using-react/

//import React from 'react'
import { Button, Form } from 'semantic-ui-react'
//import React, {useState} from 'react';

export default function Create() {
    //const [recipeName, setRecipeName] = useState('');
    return(
        <Form className = "create-form">
        <Form.Field required>
          <label>Recipe Name</label>
          <input placeholder='Recipe Name' />
        </Form.Field>
        <Form.Field label='Type of Meal' control='select'>
                <option value='breakfast'>Breakfast</option>
                <option value='lunch'>Lunch</option>
                <option value='dinner'>Dinner</option>
                <option value='snack'>Snack</option>
                <option value='other'>Other</option>
        </Form.Field>
        <Button type='Create Recipe'>Submit</Button>
      </Form>
    )
}


