import React from 'react';
import Image from './Image';

export default function Project({title, desc, link, urlText, imageFile}) {
  return (
    <li className='projectCard'>
      <figure>
        <Image filename={imageFile} />
        <figcaption><h3>{title}</h3></figcaption>
      </figure>
        <p>
          {desc}
        </p>
        <a href={link}>{urlText}</a>
    </li>
  )
}
