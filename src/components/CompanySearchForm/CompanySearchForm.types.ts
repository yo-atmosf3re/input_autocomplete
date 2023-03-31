export interface CompanyInfo {
   name: string;
   address: string;
   phone: string;
   email: string;
   website: string;
}

export type EntrepreneurUnitType = {
   "ИНН": string,
   "ОГРН": string,
   "ФИОПолн": string,
   "ДатаРег": string,
   "Статус": string,
   "ДатаПрекр": string,
   "АдресПолн": string,
   "ОснВидДеят": string,
   "ГдеНайдено": string
}

export type CompanyUnitType = {
   "АдресПолн": string
   "ГдеНайдено": string
   "ДатаОГРН": string
   "ДатаПрекр": string
   "ИНН": string
   "НаимПолнЮЛ": string
   "НаимСокрЮЛ": string
   "ОГРН": string
   "Статус": string
}

export interface ResponseResultSearch {
   items: EntrepreneurUnitType[] | CompanyUnitType[]
   filter?: string
   nextpage?: boolean
   filter_any_count?: number
   Count: number
}

export interface CompanySearchFormPropsI {
   isFetching: boolean
   setIsFetching: (isFethcing: boolean) => void
}

export interface FieldExampleI {
   inn: string
   address: string
   whereFound: string
   dateOGRN: string
}