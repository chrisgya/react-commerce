import React from 'react';
import { Formik, Form, Field, FieldProps } from 'formik';
import {
  Button,
  Intent,
  Card,
  Elevation,
  FormGroup,
  InputGroup,
} from '@blueprintjs/core';

import { login } from '../effects/auth.effects';

export const LoginComponent: React.FC<{}> = () => {
  return (
    <Card
      elevation={Elevation.TWO}
      style={{ margin: '3rem auto', width: '80%' }}>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={e => login(e.username, e.password)}
        render={() => (
          <Form style={{ display: 'flex', flexDirection: 'column' }}>
            <Field
              name="username"
              render={({ field }: FieldProps) => (
                <FormGroup label="Username" labelFor="username">
                  <InputGroup
                    {...field}
                    id="username"
                    placeholder="Enter username..."
                  />
                </FormGroup>
              )}
            />
            <Field
              name="password"
              render={({ field }: FieldProps) => (
                <FormGroup label="Password" labelFor="password">
                  <InputGroup
                    {...field}
                    id="password"
                    type="password"
                    placeholder="Enter password..."
                  />
                </FormGroup>
              )}
            />
            <Button type="submit" text="Submit" intent={Intent.PRIMARY} />
          </Form>
        )}
      />
    </Card>
  );
};
