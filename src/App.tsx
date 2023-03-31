import React, { useState } from 'react';
import './App.css';
import { Formik } from "formik";
import axios from "axios"
import { MyFormExample } from './components/MyFormExample';
import { CompanySearchForm } from './components/CompanySearchForm';
import { EntrepreneurUnitType, CompanyUnitType, ResponseResultSearch } from './components/CompanySearchForm/CompanySearchForm.types';

const BASE_URL = "https://api-fns.ru/api/search";
const API_KEY = "e89d0ac7ea8fc4b4f4c374cbee7e56ca34a4f1bf"

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isFetching, setIsFetching] = useState(false)
  return (
    <>
      <Formik
        initialValues={{
          firstField: '',
          secondField: ''
        }}
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
      <Formik
        initialValues={{
          inn: '',
          address: '',
          whereFound: '',
          dateOGRN: '',
        }}
        onSubmit={async (value, { setFieldValue }) => {
          console.log(value.inn)
          setIsFetching(true)
          try {
            const data = await fetch(`${BASE_URL}?q=${value.inn}&key=${API_KEY}`)
            // const response: ResponseResultSearch = await data.json()
            const response = await data.json()
            console.log(response)
            // console.log(response.items[1]['ЮЛ'])
            // setFieldValue('address', response.items[1].АдресПолн)
            // setFieldValue('whereFound', response.items[1].ГдеНайдено)
            // setFieldValue('dateOGRN', response.items[1].ОГРН)
            setIsFetching(false)
            return response
          } catch (error) {
            console.log(error)
            setIsFetching(false)
          }
        }}
      >
        <CompanySearchForm
          isFetching={isFetching}
          setIsFetching={setIsFetching}
        />
      </Formik>
    </>
  );
};



export default App;