import React from 'react';
import Button from './common/Button';
import Paragraph from './common/Paragraph';

interface IData {
  fact?: string;
  length?: number;
  name?: string;
  imgUrl?: string;
  id: number;
}

const Card = ({
  fact,
  length,
  name,
  imgUrl = 'https://placehold.co/300',
  id,
}: IData) => {
  return (
    <React.Fragment key={id}>
      <img className="card-image" src={imgUrl} alt="" />
      <p>{fact}</p>
      <Paragraph text={name} />
      <Button className="raise" buttonText="Tesztelek" />
    </React.Fragment>
  );
};

export default Card;
