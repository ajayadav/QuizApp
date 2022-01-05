import { SUBMIT_QUESTION , SKIP_QUESTION ,LOAD_QUIZ, SELECT_OPTION }from './type';

import {  } from "./type"

const appData = [
    {
        'no':1,
        'title':'Inside which HTML element do we put the JavaScript?',
        'options':['<javascript>','<js>','<scripting>','<script>'],
        'correctOption':3
    },{
        'no':2,
        'title':'How do you write "Hello World" in an alert box?',
        'options':['alertBox("Hello World")','msg("Hello World")','msgBox("Hello World")','alert("Hello World")'],
        'correctOption':3
    },{
        'no':3,
        'title':'What does CSS stand for?',
        'options':['Creative Style Sheets','Computer Style Sheets','Colourful Style Sheets','Cascading Style Sheets'],
        'correctOption':3
    },{
        'no':4,
        'title':'Which HTML tag is used to define an internal style sheet?',
        'options':['<style>','<css>','<script>','<html>'],
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