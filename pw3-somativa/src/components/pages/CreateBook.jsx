import React from "react";
import { useState } from "react";
import style from './CreateBook.module.css'

import Input from "../form/input";
import Select from "../form/Select";
import Button from "../form/Button";
const CreateBook = ()=>{
    /* Cria a Estrutura de state para dados de livros*/
    const [book, setBook] = useState({ });

    /*Captura dos dados do eemento select */
    function handlerChangeBook(event){
        setBook({...book, [event.target.name] : event.target.value});
        console.log(book);
    }
    /*Captura dos dados do eemento select */
    function handlerChangeCategory(event){
        setBook({...book, category : event.target.options[event.target.selectedIndex].text})
    }
    /* ENVIA OS DADOS PARA A API*/
    function submit(event){
        event.preventDefault();
        console.log(book);
    }

    return(
        <section className={style.create_book_container}>
            <h1>CADASTRO DE LIVRO</h1>
            <form onSubmit={submit}>

            <Input 
                type='nome do livro'
                name='txt_livro'
                id='txt_livro'
                placeholder='Digite o seu livro'
                handlerChange={handlerChangeBook}
            />
            
            <Input 
                type='autor do livro'
                name='txt_autor'
                id='txt_autor'
                placeholder='Digite o nome do autor'
                handlerChange={handlerChangeBook}
            />
            
            <Input 
                type='descriçao do livro'
                name='txt_descriçao'
                id='txt_descriçao'
                placeholder='Digite a descrição do livro'
                handlerChange={handlerChangeBook}
            />
            <Select
                name='slc_categoria'
                id='slc_categoria'
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