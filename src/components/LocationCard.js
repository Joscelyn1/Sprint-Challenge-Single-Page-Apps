import React from "react";
import { Icon, Card } from "semantic-ui-react";

export default function LocationCard(props) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Description>
          {props.type} {props.dimension}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          {props.numberOfResidents} Residents
        </a>
      </Card.Content>
    </Card>
  );
}
