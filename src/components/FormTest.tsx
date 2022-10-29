import React, { useState } from "react"

type FormType = {
  email: string
  password: string
}

const initialForm: FormType = {
  email: '',
  password: ''
}

export const Form = () => {
  const [form, setForm] = useState<FormType | null>(initialForm)

  const updateEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newForm = form
    if (newForm !== null) {
      newForm.email = e.target.value
      setForm(newForm)
    }
  }

  const updatePassword = (e: any) => {
    const newForm = form
    if (newForm !== null) {
      newForm.password = e.target.value
      setForm(newForm)
    }
  }

  const submit = () => {
    console.log(form)
  }

  return (
    <div>
      <label>Email: 
        <input type="text" defaultValue={form?.email} onChange={ updateEmail } />
      </label>
      <label>Password:
        <input type="text" onChange={ updatePassword }/>
      </label>
      <button onClick={submit}>Submit</button>
      <div>
        
      </div>
    </div>
  )
}