import React from "react";
import { List, Icon, Card, Image } from "semantic-ui-react";

export default function CharacterCard(props) {
  return (
    <Card>
      <Image src={props.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Description>
          {props.species} {props.status}
        </Card.Description>
        <List>
          <List.Item>Location: {props.location}</List.Item>
          <List.Item>Origin: {props.origin}</List.Item>
        </List>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          Episodes
        </a>
      </Card.Content>
    </Card>
  );
}
