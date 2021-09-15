import React from "react";
import {Form, Field, FormikProps, withFormik} from "formik";
import {SELECT_OPTIONS} from "../../../../utils/constants/selectOprions/selectOptions";
import {IFormValues, IFormProps} from "../../../../utils/interface/submitForm/submitForm";
import {FormModel} from "../../../../utils/models/ContactForm/FormModel";
import {useDispatch} from "react-redux";
import {contactUs} from "../../../../store/contactUs/sagas/contactUsActions";
import * as Yup from "yup";


export function ContactsUs() {
    const dispatch = useDispatch();

    const selectOptions = SELECT_OPTIONS.map((item, index) => (
        <option key={index} value={item.label}>{item.label}</option>
    ));

    const ContactForm = ({errors, touched}: FormikProps<IFormValues>) => {
        return (
            <Form>
                <div className="row mx-0">
                    <div className="col-12 col-md-6">
                        <div className="field-box">
                            <Field type="text" name="name" placeholder="Name"/>
                            {touched.name && errors.name && <span className="field-box__warning">{errors.name}</span>}
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="field-box">
                            <Field component="select" name="category">
                                <option value="" disabled defaultValue="">Category</option>
                                {selectOptions}
                            </Field>
                            {touched.category && errors.category &&
                            <span className="field-box__warning">{errors.category}</span>}
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="field-box">
                            <Field type="tel" name="phone" placeholder="Phone"/>
                            {touched.phone && errors.phone &&
                            <span className="field-box__warning">{"invalid phone number"}</span>}
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="field-box">
                            <Field component="select" name="city">
                                <option value="" disabled defaultValue="">City</option>
                                {selectOptions}
                            </Field>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="field-box">
                            <Field type="email" name="email" placeholder="E-mail"/>
                            {touched.email && errors.email &&
                            <span className="field-box__warning">{errors.email}</span>}
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="field-box">
                            <Field component="textarea" name="message" placeholder="Message"/>
                        </div>
                    </div>
                </div>
                <button type="submit" className="contact__btn">Contact us</button>
            </Form>
        )
    }

    const EnhancedContactForm = withFormik<IFormProps, IFormValues>({
        mapPropsToValues: props => {
            const form = new FormModel(props);
            return form.readyData()
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().min(3, 'Name to short').required('required field'),
            email: Yup.string().required('required field'),
            category: Yup.string().required('required filed'),
            phone: Yup.number().min(7, 'phone to short').required("required field")
        }),
        handleSubmit: (values) => {
            dispatch(contactUs(values));
            return values;
        }
    })(ContactForm);


    return (
        <section className="contact">
            <div className="container">
                <div className="row">

                    <div className="contact__text">
                        <h2 className="contact__title">Contact us</h2>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam
                        </p>
                    </div>
                    <EnhancedContactForm/>
                </div>
            </div>
        </section>
    )
}