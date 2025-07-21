import React from 'react'

function AgeCheckbox() {
    const state = useCheckboxSelector();
    const actions = useCheckboxActions();

    const handleChange = (e) => {
        // Business Logic: Toggle age status when checkbox is clicked
        actions.toggleAge();
    };

    return (
        <div className="mb-4">
            <h2 className="text-lg font-bold mb-2">
                Are you over 21 : {state.isOver21 ? 'Yes' : 'No'}
            </h2>
            <div className="flex items-center">
                <input
                    type="checkbox"
                    id="age"
                    checked={state.isOver21}
                    onChange={handleChange}
                    className="mr-2"
                />
                <label htmlFor="age">
                    Are you over 21?
                </label>
            </div>
        </div>
    );
};


export default AgeCheckbox
