import React from 'react'
import { ItemRepoContainer } from './styles';

const ItemRepo = () => {
  return (
    <ItemRepoContainer>
      <h3>Victor</h3>
      <p>Descrição</p>
      <a href="#">Ver Repositório</a><br />
      <a href="#" className='remove'>Remover</a>
      <hr />
    </ItemRepoContainer>
  )
}

export default ItemRepo;
