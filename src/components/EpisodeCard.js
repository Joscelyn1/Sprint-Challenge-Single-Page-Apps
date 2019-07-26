import React from "react";
import { List, Card } from "semantic-ui-react";

export default function EpisodeCard(props) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Description>
          <List>
            <List.Item>Air Date: {props.airDate}</List.Item>
            <List.Item>Episode Number: {props.episode}</List.Item>
          </List>
        </Card.Description>
      </Card.Content>
    </Card>
  );
}
