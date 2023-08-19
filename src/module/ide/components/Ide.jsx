import React from 'react';
import { useRef } from 'react';
import Editor from '@monaco-editor/react';
import Button from '@mui/material/Button';
import { ApiClient } from '../../../shared/services/ApiClient';


const Ide = () => {

    
    const editorRef = useRef(null);

    const mount = (editor) => {
        editorRef.current = editor;
    }

    const getCode = async() => {
        const code = editorRef.current.getValue();
        console.log("Code is " , code);

        // Generating the Json Object to send Code to backend
        const jsonObject = {'code ' : code};

        try {
            const response = await ApiClient.post(process.env.REACT_APP_CODE_URL , jsonObject);
            console.log("Response is : " , response);
        }
        catch(err){
            throw err;
        }
    }
    

    const SkeletonCode = `class A {
    public static void main(String args[]){

    }
}`;


    return (
        <>
    <Editor
        height="82vh"
        defaultLanguage="java"
        defaultValue={SkeletonCode}
        onMount={mount}
    />
    <Button onClick={getCode} variant="contained">Submit</Button>
    </>
)
}

export default Ide
