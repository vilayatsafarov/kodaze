import React from 'react';
import '../styles/mcFormStyles.module.css'
import CustomForm from './CustomForm';
import MailchimpSubscribe from "react-mailchimp-subscribe";

const MailchimpFormContainer = props => {
    const postUrl=`https://kodaze.us14.list-manage.com/subscribe/post?u=4b01deab4d54f7b004236768d&id=a1e3f07ae0`
    return (
        <div className="mc__form-container">
            <MailchimpSubscribe url={postUrl} 
             render={({ subscribe, status, message }) => (
                <CustomForm
                    status={status} 
                    message={message}
                    onValidated={formData => subscribe(formData)}
                />
            )} />
        </div>
    );
};

export default MailchimpFormContainer;