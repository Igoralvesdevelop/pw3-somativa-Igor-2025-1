import React from "react";
import { useState, useEffect } from "react";
import style from './CreateBook.module.css'

import Input from "../form/input";
import Select from "../form/Select";
import Button from "../form/Button";
import { data } from "react-router-dom";
const CreateBook = ()=>{
    /* Cria a Estrutura de state para dados de livros*/
    const [book, setBook] = useState({ });
 /* Cria a Estrutura de state para dados de catwgoria*/
    const [categories, setCategories] = useState({ });

    /*Captura dos dados do elemento da input */
    function handlerChangeBook(event){
        setBook({...book, [event.target.name] : event.target.value});
        console.log(book);
    }
    /*Captura dos dados do elemento select */
    function handlerChangeCategory(event){
        setBook({...book, cod_categoria : event.target.options[event.target.selectedIndex].text})
    }
    /* ENVIA OS DADOS PARA A API*/
    function submit(event){
        event.preventDefault();
        console.log(book);
    }
    /* recupera os dados de categoria da apirest*/
    useEffect(()=>{
        fetch('https://127.0.0.1.5000/istagemCateorias', {
            method: 'GET',
            headers:{
                'Content-Type':'',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Headers':'*'
            }

        }).then((response)=>
            response.json()
        ).then((categorias)=>{
            console.log(categorias.data)
        }).catch((error)=>{
            console.log('ERRO: ' + error)
        });
    }, []);
    return(
        <section className={style.create_book_container}>
            <h1>CADASTRO DE LIVRO</h1>
            <form onSubmit={submit}>

            <Input 
                type='nome do livro'
                name='nome_livro'
                id='nome_livro'
                placeholder='Digite o seu livro'
                handlerChange={handlerChangeBook}
            />
            
            <Input 
                type='autor do livro'
                name='autor_livro'
                id='autor_livro'
                placeholder='Digite o nome do autor'
                handlerChange={handlerChangeBook}
            />
            
            <Input 
                type='descriçao do livro'
                name='descricao_livro'
                id='descricao_livro'
                placeholder='Digite a descrição do livro'
                handlerChange={handlerChangeBook}
            />
            <Select
                name='cod_categoria'
                id='cod_categoria'
                text='Categoria do Livro'
                handlerChange={handlerChangeCategory}
            
            />
            <Button 
                label='CADASTRAR LIVRO'/>
            </form>
        </section>
    )
}

export default CreateBook