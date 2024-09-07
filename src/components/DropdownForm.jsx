import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

const DropdownForm = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const { control, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log("Form Data Submitted: ", data);
    };

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    return (
        <div>
            <button onClick={toggleDropdown}>
                {isDropdownVisible}
            </button>

            {isDropdownVisible && (
                <div className="dropdown-menu">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div>
                            <label>Destination Name</label>
                            <Controller
                                name="destinationName"
                                control={control}
                                defaultValue=""
                                render={({ field }) => <input {...field} type="text" />}
                            />
                        </div>


                        <div>
                            <label>Duration (Days)</label>
                            <Controller
                                name="duration"
                                control={control}
                                defaultValue=""
                                render={({ field }) => <input {...field} type="number" />}
                            />
                        </div>


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