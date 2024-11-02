import React from 'react'

import { ItemContainer } from './styles';
function ItemRepo() {
  return (
    <ItemContainer>
        <h3>Gabriela</h3>
        <p>GabsDonato</p>
        <a href='#'>Ver repositório</a>
        <br />
        <a href='#' className="remover">Remover</a>
        <hr></hr>
        </ItemContainer>
  )
}


export default  ItemRepo;