import React from "react";
import {Field, FormikProps, withFormik} from "formik";
import {SELECT_OPTIONS} from "../../../../utils/constants/selectOprions/selectOptions";

interface IFormValues {
    name: string;
    category: string;
    phone: string;
    city: string;
    mail: string;
    message: string;
}

interface IFormProps {
    name?: string;
    category?: string;
    phone?: string;
    city?: string;
    mail?: string;
    message?: string;
}

export function ContactsUs() {

    const selectOptions = SELECT_OPTIONS.map((item, index) => (
        <option key={index} value={item.label}>{item.label}</option>
    ))


    const ContactForm = (
        {
            values,
            handleSubmit,
            handleChange,
            handleBlur
        }: FormikProps<IFormValues>) => {
        return (
            <form onSubmit={handleSubmit}>
                <div className="row mx-0">
                    <div className="col-12 col-md-6 pt-3">
                        <Field type="text" name="name" placeholder="name"/>
                    </div>

                    <div className="col-12 col-md-6 pt-3">
                        <Field component="select" name="category" placeholder="name">
                            <option defaultValue={"test-value"} value="test-value">test value</option>
                            {selectOptions}
                        </Field>
                    </div>

                    <div className="col-12 col-md-6 pt-3">
                        <Field type="phone" name="phone" placeholder="+038 145 52 31"/>
                    </div>

                    <div className="col-12 col-md-6 pt-3">
                        <Field component="select" name="city" placeholder="name">
                            <option defaultValue={"test-value"} value="test-value">test value"</option>
                            {selectOptions}
                        </Field>
                    </div>

                    <div className="col-12 pt-3">
                        <Field type="email" name="mail" placeholder="mail@example.com"/>
                    </div>

                    <div className="col-12 pt-3">
                        <textarea name="message" placeholder="message"/>
                    </div>
                </div>
                <button className="contact__btn">Contact us</button>
            </form>
        )
    }

    const EnhancedContactForm = withFormik<IFormProps, IFormValues>({
        mapPropsToValues: props => {
            return {
                name: props.name || "",
                category: props.category || "",
                phone: props.phone || "",
                city: props.city || "",
                mail: props.mail || "",
                message: props.message || "",
            }
        },

        handleSubmit: (values) => {
            console.log(values);
            return values
        }
    })(ContactForm)
    return (
        <section className="contact">
            <div className="contact__text">
                <h2 className="contact__title">Contact us</h2>
                <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam
                </p>
            </div>
            <EnhancedContactForm/>
        </section>
    )
}