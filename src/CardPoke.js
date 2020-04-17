import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/row'

function CardPoke(props) {
  const a = (
    <Row>
      {props.pokeInfoOrganized.map((num) => {
        return (
          <div key={num.toString()}>
            <Card style={{ width: '10rem' }}>
              <Card.Img variant="top" src={num[0]} />
              <Card.Body>
                <Card.Title>{num[1]}</Card.Title>
                <Card.Text>
                  <br />
                  <b>weight:</b>
                  {num[2]}
                  <br />
                  <b>base exp:</b>
                  {num[3]}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        )
      })}
    </Row>
  )
  return a
}

export default CardPoke
