import React from 'react';
import { Container, Grid, Button, Icon, Label, Input } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFan, faTintSlash } from '@fortawesome/free-solid-svg-icons'
import './App.css';

function App() {
  return (
    <Container style={{ marginTop: '1em' }}>
      <Grid>
        <Grid.Column width={16} textAlign='right'>
          <Label size='large'>AC Remote 2: Electric Boogaloo</Label>
        </Grid.Column>

        <Grid.Column width={16} stretched>
          <Button.Group size='large'>
            <Button><FontAwesomeIcon icon={faFan} /></Button>
            <Button icon='snowflake outline' primary />
            <Button><FontAwesomeIcon icon={faTintSlash} /></Button>
          </Button.Group>
        </Grid.Column>

        <Grid.Column width={16} stretched>
          <Button.Group size='large'>
            <Button icon={<FontAwesomeIcon icon={faFan} style={{ fontSize: '0.7em' }} />} />
            <Button icon={<FontAwesomeIcon icon={faFan} style={{ fontSize: '0.8em' }} />} />
            <Button icon={<FontAwesomeIcon icon={faFan} style={{ fontSize: '1em' }} />} />
            <Button icon={<FontAwesomeIcon icon={faFan} style={{ fontSize: '1.2em' }} />} />
            <Button icon={<FontAwesomeIcon icon={faFan} style={{ fontSize: '1.4em' }} />} />
          </Button.Group>
          <Button.Group size='large'>
            <Button icon='moon' />
            <Button content='Auto' primary />
          </Button.Group>
        </Grid.Column>

        <Grid.Column width={16} stretched >
          <Input size='big' type='number' labelPosition='right'>
            <Label icon='thermometer' />
            <input value='23' />
            {/* <Label content='°C' /> */}
            <Button.Group size='big'>
              <Button icon='plus' />
              <Button icon='minus' />
            </Button.Group>
          </Input>
        </Grid.Column>

        <Grid.Column width={8} stretched >
          <Button size='large' icon='resize vertical' />
        </Grid.Column>
        <Grid.Column width={8} stretched >
          <Button size='large' icon='resize horizontal' />
        </Grid.Column>

        <Grid.Column width={16} stretched>
          <Button color='red' icon='power' />
        </Grid.Column>

      </Grid>
    </Container >
  );
}

export default App;
