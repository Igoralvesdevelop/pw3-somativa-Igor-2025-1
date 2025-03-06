import React from "react";
import style from './CreateBook.module.css'

import Input from "../form/input";
import Select from "../form/Select";
import Button from "../form/Button";
const CreateBook = ()=>{
    return(
        <section className={style.create_book_container}>
            <h1>CADASTRO DE LIVRO</h1>

            <Input 
                type='nome do livro'
                name='txt_livro'
                id='txt_livro'
                placeholder='Digite o seu livro'
            />
            
            <Input 
                type='autor do livro'
                name='txt_livro'
                id='txt_livro'
                placeholder='Digite o nome do autor'
            />
            
            <Input 
                type='descriçao do livro'
                name='txt_livro'
                id='txt_livro'
                placeholder='Digite a descrição do livro'
            />
            <Select
                name='slc_categoria'
                id='slc_categoria'
                text='Categoria do Livro'
            
            />
            <Button
                label='CADASTRAR LIVRO'/>
        </section>
    )
}

export default CreateBook