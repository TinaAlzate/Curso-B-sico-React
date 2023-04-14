import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Models
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

const Formikcreate = () => {

    let task = new Task();

    const initialValues = {
        name: '',
        description: '',
        completed: false,
        level: LEVELS.NORMAL
    }

    const createSchema = Yup.object().shape(
        {
            name: Yup.string()
                .min(6, 'Name too short')
                .max(12, 'Name too long')
                .required('Name is required'),
            description: Yup.string()
                .required('Description is required'),
            completed: Yup.boolean(),
            role: Yup.string()
                .oneOf([LEVELS.NORMAL, LEVELS.BLOCKING, LEVELS.URGENT], 'You must select a LEVEL: Normal / Blocking / Urgent')
            }
    )

    const submit = (values) => {
        alert('Create task')
    }

    return (
        <div>
            <h4>Create Formik</h4>
            <Formik
                initialValues = {initialValues}
                // *** Yup Validation Schema ***
                validationSchema = {createSchema}
                // ** onSubmit Event
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2))
                }}
            >

            {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                        <Form>
                            <label htmlFor="name">Name</label>
                            <Field id="name" type="text" name="name" placeholder="name task" />
                            
                            {/* Name Errors */}
                            {
                                errors.name && touched.name && 
                                (
                                    <ErrorMessage name="name" component='div'></ErrorMessage>
                                )
                            }

                            <label htmlFor="description">Description</label>
                            <Field id="description" type="description" name="description" placeholder="Description task" />

                            {/* Description Errors */}
                            {
                                errors.description && touched.description && 
                                (
                                    <ErrorMessage name="description" component='div'></ErrorMessage>
                                )
                            }

                            <label htmlFor="level">Level</label>
                            <select defaultValue={LEVELS.NORMAL} id='level' name="level">
                                <option value={ LEVELS.NORMAL }>Normal</option>
                                <option value={ LEVELS.URGENT }>Urgent</option>
                                <option value={ LEVELS.BLOCKING }>Blocking</option>
                            </select>

                            {/* Levels Errors */}
                            {
                                errors.level && touched.level && 
                                (
                                    <ErrorMessage name="level" component='div'></ErrorMessage>
                                )
                            }

                            <button type="submit">Create task</button>
                            {isSubmitting ? (<p>Sending your task...</p>): null}

                        </Form>
                    )
            }
            </Formik>
        </div>
    );
}

export default Formikcreate;
