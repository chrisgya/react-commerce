import React from 'react';
import { Formik, Form, Field, FieldProps } from 'formik';
import {
  Button,
  Intent,
  Card,
  Elevation,
  FormGroup,
  InputGroup,
  Switch,
} from '@blueprintjs/core';

import { RegisterDTO } from '../models/auth.models';

interface Props {
  headerText: string;
  showSellerBox: boolean;
  onSubmit(e: RegisterDTO): void;
}

export const AuthComponent: React.FC<Props> = ({
  headerText,
  showSellerBox,
  onSubmit,
}) => {
  const initialValues: RegisterDTO = {
    username: '',
    password: '',
    seller: false,
  };

  return (
    <Card elevation={Elevation.TWO}>
      <Formik
        initialValues={initialValues}
        onSubmit={(e: RegisterDTO) => onSubmit(e)}
        render={() => (
          <Form style={{ display: 'flex', flexDirection: 'column' }}>
            <h2 style={{ marginTop: 0, alignSelf: 'center' }}>{headerText}</h2>
            <Field
              name='username'
              render={({ field }: FieldProps) => (
                <FormGroup label='Username' labelFor='username'>
                  <InputGroup
                    {...field}
                    id='username'
                    placeholder='Enter username...'
                  />
                </FormGroup>
              )}
            />
            <Field
              name='password'
              render={({ field }: FieldProps) => (
                <FormGroup label='Password' labelFor='password'>
                  <InputGroup
                    {...field}
                    id='password'
                    type='password'
                    placeholder='Enter password...'
                  />
                </FormGroup>
              )}
            />
            {showSellerBox && (
              <Field
                name='seller'
                render={({ field }: FieldProps) => (
                  <Switch
                    {...field}
                    style={{ alignSelf: 'center' }}
                    label='Seller?'
                  />
                )}
              />
            )}
            <Button type='submit' text='Submit' intent={Intent.PRIMARY} />
          </Form>
        )}
      />
    </Card>
  );
};
