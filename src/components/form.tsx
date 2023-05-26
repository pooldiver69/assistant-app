import React from "react";
import { useState, useEffect } from "react";
export const Form = () => {

    // const [agent, setAgent] = useState('');
    // const questionFields = {
    //     "Market Research Assistant": {
    //         label: "Input a list of competitors for your business",
    //         placeholder: "ex. Google, Amazon, Mircosoft"
    //     },
    //     "Social Media Assistant": [{
    //         label: "Input a short description of a product or event",
    //         placeholder: "ex. An online marketing event take place in TikTok..."
    //     }],
    // }
    const onSubmit = (event: any) => {
        event.preventDefault();
        // Validate form data
        // ...
 
        const target = event.target;
        const data = {
            role: target.role.value,
            content: target.content.value,
        };
 
        console.log(data);
    };
    
    // useEffect(() => {
    //     // declare the data fetching function
    //     const fetchData = async () => {
    //       const data = await fetch('https://yourapi.com');
    //     }
      
    //     // call the function
    //     fetchData()
    //       // make sure to catch any error
    //       .catch(console.error);
    //   }, [agent])

    return (
        <form className="form" onSubmit={onSubmit}>
            <div className="field" style={{ marginBottom: '.5rem' }} >
                <label htmlFor="role">I would act as </label>
                <select id='role' name='role' >
                    <option value="Market Research Assistant">Market Research Assistant</option>
                    <option value="Lead Generation Assistant">Lead Generation Assistant</option>
                    <option value="Automated Sales Outreach Assistant">Automated Sales Outreach Assistant</option>
                    <option value="Social Media Assistant">Social Media Assistant</option>
                </select>
            </div>
            <div className="field" style={{ marginBottom: '.5rem' }} >
                <label htmlFor="content">Question</label>
                <br />
                <textarea name="content" />
            </div>
            <button type="submit">GET RESULT</button>
        </form>
    );
};