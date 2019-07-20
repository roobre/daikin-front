import React from 'react';
import { Container, Grid, Button, Icon, Header, Label } from 'semantic-ui-react'
import './App.css';

function App() {
  return (
    <Container>
      <Grid>
        <Grid.Column width={16} floated='right'>
          <Header>Daikin</Header>
        </Grid.Column>

        <Grid.Row columns='equal'>
          <Grid.Column stretched>
            <Button icon={<Icon size='small' name='spinner' />} />
          </Grid.Column>
          <Grid.Column stretched>
            <Button icon={<Icon size='large' name='spinner' />} />
          </Grid.Column>
          <Grid.Column stretched>
            <Button icon={<Icon size='big' name='spinner' />} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={11} stretched>
            <Label size='massive'>
              <Header size='massive' icon='temp'> 23 C</Header>
            </Label>
          </Grid.Column>
          <Grid.Column width={5} stretched>
            <Grid>
              <Grid.Column width={16} stretched>
                <Button icon='angle up' />
              </Grid.Column>
              <Grid.Column width={16} stretched>
                <Button icon='angle down' />
              </Grid.Column>
            </Grid>
          </Grid.Column>
        </Grid.Row>

        <Grid.Column width={16} stretched>
          <Button color='red' icon='power' />
        </Grid.Column>
      </Grid>
    </Container>
  );
}

export default App;
