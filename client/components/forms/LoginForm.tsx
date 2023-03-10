"use client";
import { Formik, Field, Form } from "formik";
import React from "react";
import FormCard from "./FormCard";
import TextInput from "components/TextInput";
import Checkbox from "components/Checkbox";
import Button from "components/Button";
import TextLink from "components/TextLink";
import { LoginFormValues, LoginErrorValues } from "types/form";

const LoginForm: React.FC = () => {
  const initialValues: LoginFormValues = {
    usernameOrEmail: "",
    password: "",
  };
  const validateRequired = (values: LoginFormValues) => {
    const errors: LoginErrorValues = {} as LoginErrorValues;

    if (!values.usernameOrEmail) {
      errors.usernameOrEmail = "Field is required";
    }

    if (!values.password) {
      errors.password = "Field is required";
    }

    return errors;
  };
  return (
    <Formik
      initialValues={initialValues}
      validate={validateRequired}
      onSubmit={(values: LoginFormValues) =>
        alert(JSON.stringify(values, null, 2))
      }
    >
      <FormCard label="Login">
        <Form className="flex w-full flex-col gap-6">
          <div className="flex w-full flex-col justify-center gap-2">
            <div className="flex flex-col">
              <Field
                name="usernameOrEmail"
                label="Username or email"
                type="text"
                placeholder="Username or email"
                component={TextInput}
              />
            </div>
            <div className="flex flex-col">
              <Field
                name="password"
                label="Password"
                type="password"
                placeholder="Password"
                component={TextInput}
              />
            </div>
          </div>
          <div className="ml-1 flex items-center justify-start gap-2">
            <Field
              name="rememberMe"
              label="Remember me"
              type="checkbox"
              component={Checkbox}
            />
          </div>

          {/* <div className="h-10 w-full rounded-md bg-purple-700 transition-all hover:bg-purple-800"> */}
          <Button
            className="h-10 w-full rounded-md bg-purple-700 font-bold text-white transition-all hover:bg-purple-800"
            value="Log in"
            handleClick={() => console.log("ello")}
            type="submit"
          />
        </Form>
        <div>
          Not a member? <TextLink value="Sign up" href="/register" />
        </div>
      </FormCard>
    </Formik>
  );
};

export default LoginForm;
