import React from 'react';
import { Formik, Form, Field, FieldProps } from 'formik';
import {
  Button,
  EditableText,
  Intent,
  Card,
  Elevation,
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
            <h1 style={{ margin: 0 }}>Login</h1>
            <Field
              name="username"
              render={({ field }: FieldProps) => <EditableText {...field} />}
            />
            <Field
              name="password"
              render={({ field }: FieldProps) => (
                <EditableText type="password" {...field} />
              )}
            />
            <Button type="submit" text="Submit" intent={Intent.PRIMARY} />
          </Form>
        )}
      />
    </Card>
  );
};
