import {v1} from "uuid";


export type StateType = {
    input: InputType
    history: HistoryType
}
export type InputType = {
    h3: string[]
}
export type HistoryType = PersonType[]
type PersonType ={
    id: string
    name: string
    tech: string
    dateOfReceipt: string
    returnDate: string
}
export const state = {
    input: {
        h3: ['Фамилия','Техника' ,'Дата приёма','Дата возврата']
    },
    history:[
        {id: v1(), name: 'Андрей', tech: 'HP', dateOfReceipt: '20.10.2021', returnDate: '20.10.2020'},
        {id: v1(), name: 'Sanya', tech: 'HP', dateOfReceipt: '20.10.2021', returnDate: '20.10.2020'}
    ]
}