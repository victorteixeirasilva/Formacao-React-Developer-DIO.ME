import React from 'react'
import { ItemRepoContainer } from './styles';

const ItemRepo = ({repo}) => {
  return (
    <ItemRepoContainer>
      <h3>{repo.name}</h3>
      <p>{repo.description}</p>
      <a href={repo.html_url} rel="noreferrer" target='_blank'>Ver Repositório</a><br />
      <a href="#" rel="noreferrer" target='_blank' className='remove'>Remover</a>
      <hr />
    </ItemRepoContainer>
  )
}

export default ItemRepo;
