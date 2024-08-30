import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

const DropdownForm = () => {
    // State to manage the visibility of the dropdown form
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    // React Hook Form setup
    const { control, handleSubmit } = useForm();

    // Handle form submission
    const onSubmit = (data) => {
        console.log("Form Data Submitted: ", data);
        // Logic to handle form data submission
    };

    // Toggle dropdown visibility
    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    return (
        <div>
            {/* Button to toggle dropdown form */}
            <button onClick={toggleDropdown}>
                {isDropdownVisible}
            </button>

            {/* Conditionally render dropdown form */}
            {isDropdownVisible && (
                <div className="dropdown-menu">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Example field: Destination Name */}
                        <div>
                            <label>Destination Name</label>
                            <Controller
                                name="destinationName"
                                control={control}
                                defaultValue=""
                                render={({ field }) => <input {...field} type="text" />}
                            />
                        </div>

                        {/* Example field: Duration */}
                        <div>
                            <label>Duration (Days)</label>
                            <Controller
                                name="duration"
                                control={control}
                                defaultValue=""
                                render={({ field }) => <input {...field} type="number" />}
                            />
                        </div>

                        {/* Example field: Description */}
                        <div>
                            <label>Description</label>
                            <Controller
                                name="description"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <textarea {...field} rows={4} placeholder="Enter description" />
                                )}
                            />
                        </div>

                        {/* Submit button */}
                        <button type="submit">Submit</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default DropdownForm;