import React, { useState } from 'react';
import './App.css';
import { Formik } from "formik";
import axios from "axios"
import { MyFormExample } from './components/MyFormExample';


const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  return (
    <Formik
      initialValues={{ firstField: '', secondField: '' }}
      onSubmit={async (value, { setFieldValue }) => {
        setIsLoading(true)
        try {
          const { data } = await axios.get(
            `https://jsonplaceholder.typicode.com/posts/${value.firstField}`,
          );
          setFieldValue('secondField', data.title);
          setTimeout(() => {
            setIsLoading(false)
          }, 500);
        } catch (error) {
          console.log(error);
          setFieldValue('secondField', 'Error')
          setTimeout(() => {
            setIsLoading(false)
          }, 500);
        }
      }}
    >
      <MyFormExample
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </Formik>
  );
};



export default App;