import { Fragment } from "react";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup';

const CustomForms = () => {

    const formInitialSchema = {
        fname: '',
        lname:'',
        email: '',
        password: '',
        confirmPassword: "",        
        termsAndCond: false,
        
        
    }

    const formValidationSchema = yup.object().shape({
        fname: yup.string().required('Name is required'),
        lname: yup.string().required('Name is required'),
        email: yup.string().required('Email is required').email("Please enter Valid email"),
        password: yup.string().required('Password is required'),
        confirmPassword: yup.string().oneOf([yup.ref('password')], "Passwords don't match").required('Confirm Password is required'),
        termsAndCond: yup.boolean().oneOf([true], "Terms and condition is required"),
    });


    const handleFormSubmit = (values) => {
        console.log("Submitted values", values)
    }

    return (
        <Fragment>

            <div className="container">
                <div className="col-md-12">
                    <h1 className="text-center"> Sign Up</h1>
                </div>

                <div className="col-md-8 offset-md-2 card shadow p-5">
                    <Formik initialValues={formInitialSchema}
                        validationSchema={formValidationSchema}
                        onSubmit={(values => handleFormSubmit(values))}>
                        {({ values }) =>
                            <Form>
                                <div className="col-md-12 mt-4">
                                    <Field type="text"
                                        name="fname"
                                        placeholder="Enter your First Name"
                                        className="form-control" />

                                    <p className="text-danger">
                                        <ErrorMessage name="fname" />
                                    </p>
                                </div>
                                <div className="col-md-12 mt-4">
                                    <Field type="text"
                                        name="lname"
                                        placeholder="Enter your LastName"
                                        className="form-control" />

                                    <p className="text-danger">
                                        <ErrorMessage name="lname" />
                                    </p>
                                </div>
                                <div className="col-md-12 mt-4">
                                    <Field type="text"
                                        name="email"
                                        placeholder="Enter your Email"
                                        className="form-control" />
                                    <p className="text-danger">
                                        <ErrorMessage name="email" />
                                    </p>
                                </div>
                                

                                


                                <div className="col-md-12 mt-4">
                                    <Field type="text"
                                        name="password"
                                        placeholder="Enter your Password"
                                        className="form-control" />
                                    <p className="text-danger">
                                        <ErrorMessage name="password" />
                                    </p>
                                </div>

                                <div className="col-md-12 mt-4">
                                    <Field type="text"
                                        name="confirmPassword"
                                        placeholder="Enter your Password"
                                        className="form-control" />
                                    <p className="text-danger">
                                        <ErrorMessage name="confirmPassword" />
                                    </p>
                                </div>

                               
                                

                                


                                <div className="col-md-12 mt-4">
                                    <button className="btn btn-primary btn-block"
                                        type="submit"
                                    >
                                        Submit Details
                                    </button>
                                </div>


                            </Form>
                        }

                    </Formik>
                </div>


            </div>


        </Fragment >

    )
}

export default CustomForms