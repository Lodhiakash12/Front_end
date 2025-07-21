import React, { useState } from 'react';

function SimpleCheckboxApp() {

    const [isCitizen, setIsCitizen] = useState(false);
    const [isOver21, setIsOver21] = useState(false);


    const handleCitizenChange = (e) => {
        setIsCitizen(e.target.checked);
        console.log(`Citizen status changed to: ${e.target.checked ? 'Yes' : 'No'}`);
    };


    const handleAgeChange = (e) => {
        setIsOver21(e.target.checked);
        console.log(`Over 21 status changed to: ${e.target.checked ? 'Yes' : 'No'}`);
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-8 bg-white border border-gray-300 rounded-lg shadow-lg">
            <div className="space-y-6">


                <div className="space-y-2">
                    <h2 className="text-xl font-bold text-gray-800">
                        Are you a Citizen : {isCitizen ? 'Yes' : 'No'}
                    </h2>
                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            id="citizen"
                            checked={isCitizen}
                            onChange={handleCitizenChange}
                            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="citizen" className="text-gray-700 cursor-pointer">
                            Are you a Citizen?
                        </label>

                    </div>
                </div>


                <div className="space-y-2">
                    <h2 className="text-xl font-bold text-gray-800">
                        Are you over 21 : {isOver21 ? 'Yes' : 'No'}
                    </h2>
                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            id="age"
                            checked={isOver21}
                            onChange={handleAgeChange}
                            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="age" className="text-gray-700 cursor-pointer">
                            Are you over 21?
                        </label>

                    </div>
                </div>


                <div className="mt-6 p-4 bg-gray-50 rounded-lg border">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Current Status:</h3>
                    <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                            <span>Citizen:</span>
                            <span className={`font-medium ${isCitizen ? 'text-green-600' : 'text-red-600'}`}>
                                {isCitizen ? 'YES' : 'NO'}
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span>Over 21:</span>
                            <span className={`font-medium ${isOver21 ? 'text-green-600' : 'text-red-600'}`}>
                                {isOver21 ? 'YES' : 'NO'}
                            </span>
                        </div>
                    </div>
                </div>


                <div className={`p-3 rounded-lg text-center font-medium ${isCitizen && isOver21
                    ? 'bg-green-100 text-green-800 border border-green-200'
                    : 'bg-yellow-100 text-yellow-800 border border-yellow-200'
                    }`}>
                    {isCitizen && isOver21
                        ? '✅ Eligible for voting!'
                        : '⚠️ Not eligible for voting'}
                </div>


            </div>
        </div>
    );
};

export default SimpleCheckboxApp;