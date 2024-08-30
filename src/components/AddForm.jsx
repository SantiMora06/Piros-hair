import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import classes from "../styles/form.module.css"

const DynamicFormWithHookForm = () => {
    const { control, handleSubmit, reset } = useForm();
    const [selectedOption, setSelectedOption] = useState("");
    const [formFields, setFormFields] = useState([]);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);


    const options = [
        {
            value: "Hotel&Flight",
            label: "Hotel & Flight",
            fields: [
                { name: "name", type: "text", placeholder: "Name" },
                { name: "image", type: "text", placeholder: "Image" },
                {
                    name: "radioField",
                    type: "radio",
                    placeholder: "Choose the category",
                    options: ["Exotic", "Adventure", "Luxury", "Offer"],
                },
                { name: "description", type: "text-area", placeholder: "Description" },
                { name: "price", type: "number", placeholder: "Price" },
                { name: "days", type: "number", placeholder: "Days" },
            ],
        },
        {
            value: "cruise",
            label: "Cruise",
            fields: [
                { name: "name", type: "text", placeholder: "Name" },
                { name: "image", type: "text", placeholder: "Image" },
                {
                    name: "radioField",
                    type: "radio",
                    placeholder: "Choose the category",
                    options: ["Atlantic", "Pacific-Indic", "Mediterranean", "America", "Africa"],
                },
                { name: "description", type: "text-area", placeholder: "Description" },
                { name: "price", type: "number", placeholder: "Price" },
                { name: "days", type: "number", placeholder: "Days" },
            ],
        },
        {
            value: "island",
            label: "Island",
            fields: [
                { name: "name", type: "text", placeholder: "Name" },
                { name: "image", type: "text", placeholder: "Image" },
                {
                    name: "radioField",
                    type: "radio",
                    placeholder: "Choose the category",
                    options: ["Europe", "Asia", "Oceania", "Africa", "America"],
                },
                { name: "description", type: "text-area", placeholder: "Description" },
                { name: "price", type: "number", placeholder: "Price" },
                { name: "days", type: "number", placeholder: "Days" },
            ],
        },
    ];

    // Handle option change
    const handleOptionChange = (e) => {
        const selected = e.target.value;
        setSelectedOption(selected);

        const selectedOptionFields = options.find((opt) => opt.value === selected)?.fields || [];
        setFormFields(selectedOptionFields);

        // Reset form fields when changing option
        reset();
    };

    // Handle form submission
    const onSubmit = async (data) => {
        console.log("Form data to submit:", data);

        let endpoint = "";
        switch (selectedOption) {
            case "island":
                endpoint = "http://localhost:5005/api/island";
                break;
            case "cruise":
                endpoint = "http://localhost:5005/api/cruise";
                break;
            case "plan":
                endpoint = "http://localhost:5005/api/plan";
                break;
            default:
                console.error("Invalid option selected");
                return;
        }

        try {
            const response = await fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data), // Send the form data as JSON
            });

            if (response.ok) {
                const result = await response.json();
                console.log("Successfully created item:", result);
                // Reset form after successful submission
                reset();
                setSelectedOption("");
                setFormFields([]);
            } else {
                console.error("Failed to create item:", response.statusText);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    return (

        <div className={classes.form}>
            <button onClick={toggleDropdown}>
                {isDropdownVisible}
            </button>
            <h2 className={classes.h2}>Add a route</h2>

            {/* Multi-select Dropdown */}
            <select value={selectedOption} onChange={handleOptionChange}>
                <option value="">Select an option</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>

            {/* Form Fields - Dynamic */}
            {formFields.length > 0 && (
                <form onSubmit={handleSubmit(onSubmit)}>
                    {formFields.map((field) => (
                        <div key={field.name}>
                            <label>{field.placeholder}</label>
                            {field.type === "select" ? (
                                // Multi-select dropdown for array of options
                                <Controller
                                    name={field.name}
                                    control={control}
                                    defaultValue={[]}
                                    render={({ field: inputField }) => (
                                        <select {...inputField} multiple>
                                            {field.options.map((option) => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                    )}
                                />
                            ) : field.type === "radio" ? (
                                // Radio buttons for single selection
                                <div className={classes.radio}>
                                    {field.options.map((option) => (
                                        <Controller
                                            key={option}
                                            name={field.name}
                                            control={control}
                                            defaultValue=""
                                            render={({ field: radioField }) => (
                                                <div>
                                                    <input
                                                        {...radioField}
                                                        type="radio"
                                                        value={option}
                                                        checked={radioField.value === option}
                                                        onChange={() => radioField.onChange(option)}
                                                    />
                                                    <label>{option}</label>
                                                </div>
                                            )}
                                        />
                                    ))}
                                </div>
                            ) : field.type === "text-area" ? (
                                // Text-area field
                                <Controller
                                    name={field.name}
                                    control={control}
                                    defaultValue=""
                                    render={({ field: textAreaField }) => (
                                        <textarea
                                            {...textAreaField}
                                            placeholder={field.placeholder}
                                            rows={4} // You can customize the number of rows
                                        />
                                    )}
                                />
                            ) : (
                                // Standard input fields
                                <Controller
                                    name={field.name}
                                    control={control}
                                    defaultValue=""
                                    render={({ field: inputField }) => (
                                        <input
                                            {...inputField}
                                            type={field.type}
                                            placeholder={field.placeholder}
                                        />
                                    )}
                                />
                            )}
                        </div>
                    ))}
                    <div className={classes.button}>
                        <button type="submit" >Submit</button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default DynamicFormWithHookForm;
