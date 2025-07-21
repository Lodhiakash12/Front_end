import React from 'react'

function CitizenCheckbox() {

    const state = useCheckboxSelector();
    const actions = useCheckboxActions();

    const handleChange = (e) => {
        // Business Logic: Toggle citizen status when checkbox is clicked
        actions.toggleCitizen();
    };

    return (
        <div className="mb-4">
            <h2 className="text-lg font-bold mb-2">
                Are you a Citizen : {state.isCitizen ? 'Yes' : 'No'}
            </h2>
            <div className="flex items-center">
                <input
                    type="checkbox"
                    id="citizen"
                    checked={state.isCitizen}
                    onChange={handleChange}
                    className="mr-2"
                />
                <label htmlFor="citizen">
                    Are you a Citizen?
                </label>
            </div>
        </div>
    );


}

export default CitizenCheckbox
