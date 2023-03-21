import { useFormikContext } from 'formik';
import React from 'react'

interface FieldExampleI {
   firstField: string
   secondField: string
}

interface MyFormFieldPropsI {
   isLoading: boolean
   setIsLoading: (hasLoading: boolean) => void
}

const IDLE_STYLES = { color: 'red' }

export const MyFormExample: React.FC<MyFormFieldPropsI> = ({
   isLoading, setIsLoading
}) => {
   const { handleSubmit, handleChange, values, handleReset } = useFormikContext<FieldExampleI>();
   const isDisabled = !values.firstField;
   const onClickResetHandler = (): void => {
      setIsLoading(true)
      setTimeout(() => {
         handleReset()
         setIsLoading(false)
      }, 500);
   }

   return (
      <form onSubmit={handleSubmit}>
         <label htmlFor="firstField">
            First field
            <input
               onChange={handleChange}
               type="number"
               name="firstField"
               value={values.firstField}
            />
         </label>
         <button
            type='button'
            onClick={onClickResetHandler}>
            X
         </button>
         <br />
         {
            isLoading
               ? 'Загрузка...'
               : <>
                  <label htmlFor="secondField">
                     Second field
                     <input
                        disabled={!values.secondField}
                        value={values.secondField}
                        name="secondField"
                        type="text"
                        onChange={handleChange}
                     />
                  </label>
                  <br />
                  <button
                     disabled={isDisabled}
                     type="submit"
                  >
                     Fill
                  </button>
                  {
                     isDisabled
                     && <span style={IDLE_STYLES}>
                        Fill in the first field
                     </span>
                  }
               </>
         }
      </form >
   );
};