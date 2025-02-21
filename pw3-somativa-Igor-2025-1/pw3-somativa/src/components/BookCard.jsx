import Button from './Button'

import style from './BookCard.module.css'

const BookCard = ({titulo, autor, imagem})=>{
  return(
    <div className={style.bookCard}>
      <h3 className={style.title}>{titulo}</h3>
      <p className={style.actor}>{autor}</p>
      <img src={imagem} alt="Capa: as cavernas de Aço" />
    <Button label="DETALHE" />
    </div>
  )
}
export default BookCard 