import React, { useState } from 'react';

interface FormProps {
  text?: string;
}

const Form: React.FC<FormProps> = (props) => {
  const [value, setValue] = useState<string | undefined>('');
  const handleNameChanger = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }
  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log(e);
  }

  return (
    <div className="App">
      <form onChange={handleSubmit}>
        <input onChange={handleNameChanger} type="text" />
        <h1>{value}</h1>
      </form>
    </div>
  );
}

export default Form;
