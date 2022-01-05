import { SUBMIT_QUESTION , SKIP_QUESTION ,LOAD_QUIZ, SELECT_OPTION }from './type';

import {  } from "./type"

const appData = [
    {
        'no':1,
        'title':'Test this question',
        'options':['test','test1','test2','test3'],
        'correctOption':1
    },{
        'no':2,
        'title':'Test this question 2',
        'options':['tsdfest','tesdfst1','tessdt2','tessdft3'],
        'correctOption':2
    },{
        'no':3,
        'title':'Test this question 3',
        'options':['test','test1','test2','test3'],
        'correctOption':3
    },{
        'no':4,
        'title':'Test this question 4',
        'options':['test','test1','test2','test3'],
        'correctOption':0
    }
]

export const loadQuiz = () => {
    return {
        type:LOAD_QUIZ,
        payload:appData
    }
}

export const skipQuestion = () => {    
    return {
        type:SKIP_QUESTION
    }
}

export const submitQuestion = () => {
    return {
        type:SUBMIT_QUESTION,
    }
}

export const selectOption = (option) => {
    return {
        type:SELECT_OPTION,
        payload:option
    }
}