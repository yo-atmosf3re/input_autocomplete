import axios, { InternalAxiosRequestConfig } from 'axios';
import { Formik, Form, Field, useFormikContext } from 'formik';
import React from 'react'
import { CompanySearchFormPropsI, CompanyUnitType, EntrepreneurUnitType, FieldExampleI, ResponseResultSearch } from './CompanySearchForm.types'

const BASE_URL = "https://api-fns.ru/api/search";
const API_KEY = "e89d0ac7ea8fc4b4f4c374cbee7e56ca34a4f1bf"

export const CompanySearchForm: React.FC<CompanySearchFormPropsI> = ({
   isFetching, setIsFetching
}) => {
   // const [companyInfo, setCompanyInfo] = React.useState<EntrepreneurUnitType | CompanyUnitType | null>(null);
   // const [inputValue, setInputValue] = React.useState<string>('')
   // const [isLoading, setIsLoading] = React.useState<boolean>(false)

   // const handleSearch = async (fieldValue: string) => {
   //    // ! Здесь должен быть код запроса к API для получения информации по ИНН;
   //    // ! В случае успеха, ответ можно записать в state, используя setCompanyInfo;
   //    // ! Если запрос не удался, можно вывести сообщение об ошибке;
   //    setIsLoading(true)
   //    try {
   //       const data = await fetch(`${BASE_URL}?q=${inputValue}&key=${API_KEY}`)
   //       if (!data.ok) {
   //          throw new Error("Принести failed!")
   //       }
   //       const response = await data.json()
   //       console.log(response)
   //       setCompanyInfo(response.items)
   //       setIsLoading(false)
   //       return response
   //    } catch (error) {
   //       console.log(error)
   //    }
   //    // ! Здесь должен быть код запроса к API для получения списка ИНН по заданному значению;
   //    // ! В случае успеха, список можно записать в state, используя setSearchResults;
   //    // ! Если запрос не удался, можно вывести сообщение об ошибке;
   // }

   // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   //    const { value } = e.currentTarget
   //    setInputValue(value)
   // }

   // const handleSelectResult = (fieldValue: string) => {
   //    setInputValue('')
   //    // ! Здесь нужно вызвать handleSearch повторно;
   // }

   // console.log(companyInfo)

   const { handleSubmit, handleChange, values } = useFormikContext<FieldExampleI>()

   return (
      <form
         onSubmit={handleSubmit}
      >
         <input
            name='inn'
            value={values.inn}
            onChange={handleChange}
            type="text"
         />
         <button
            type='submit'
            disabled={!values.inn}
         >
            Заполнить
         </button>
         {
            isFetching && 'Загрузка...'
         }
         <br />
         <label
            htmlFor="address">
            Полный адрес
            <input
               type="text"
               name="address"
               value={values.address}
               onChange={handleChange}
            />
         </label>
         <br />
         <label
            htmlFor="whereFound">
            Где найдено?
            <input
               type="text"
               name="whereFound"
               value={values.whereFound}
               onChange={handleChange}
            />
         </label>
         <br />
         <label
            htmlFor="dateOGRN">
            ОГРН
            <input
               type="text"
               name="dateOGRN"
               value={values.dateOGRN}
               onChange={handleChange}
            />
         </label>
         <br />
      </form >
   );
}

//    <Formik
      //    initialValues={{ inn: "" }}
      //    onSubmit={() => { }}
      // >
      //    {
      //       (formik) => (
      //          <Form>
      //             <label htmlFor="inn">
      //                ИНН
      //             </label>
      //             <Field
      //                type="text"
      //                name="inn"
      //                onChange={handleInputChange}
      //                value={inputValue}
      //             />
      //             <button
      //                type="submit"
      //                onClick={() => handleSearch(formik.values.inn)}>
      //                Запросить
      //             </button>
      //             {
      //                isFetching
      //                   ? 'Загрузка...'
      //                   : companyInfo
      //                      ? (
      //                         <>
      //                            <br />
      //                            <label
      //                               htmlFor="address">
      //                               Полный адрес
      //                            </label>
      //                            <Field
      //                               type="text"
      //                               name="address"
      //                               value={companyInfo['АдресПолн']}
      //                            />
      //                            <br />
      //                            <label
      //                               htmlFor="whereFound">
      //                               Где найдено?
      //                            </label>
      //                            <Field
      //                               type="text"
      //                               name="whereFound"
      //                               value={companyInfo['ГдеНайдено']}
      //                            />
      //                            <br />
      //                            <label
      //                               htmlFor="dateOGRN">
      //                               ОГРН
      //                            </label>
      //                            <Field
      //                               type="text"
      //                               name="dateOGRN"
      //                               value={companyInfo['ОГРН']}
      //                            />
      //                            <br />
      //                            {/* <label
      //                            htmlFor="ulName">
      //                            Наименование ЮЛ
      //                         </label>
      //                         <Field
      //                            type="text"
      //                            name="website"
      //                            value={companyInfo['']}
      //                         /> */}
      //                            {/* <label htmlFor="inn">
      //                            ИНН
      //                         </label>
      //                         <Field
      //                            type="text"
      //                            name="inn"
      //                            value={companyInfo['ИНН']}
      //                         /> */}
      //                         </>
      //                      )
      //                      : (
      //                         formik.submitCount > 0 && <span>По заданному ИНН ничего не найдено</span>
      //                      )
      //             }
      //          </Form>
      //       )
      //    }
      // </Formik>