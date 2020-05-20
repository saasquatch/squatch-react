import React, { useContext } from "react";
import squatch from "@saasquatch/squatch-js";
import useBrowserOnlyEffect from "./useBrowserOnlyEffect";

const APIContext = React.createContext(undefined);


/**
 * Provides the squatch.js API instance to be used by the children
 * 
 * @param props 
 */
export function Provider({ children, api }) {
    <APIContext.Provider value={api}>
        {children}
    </APIContext.Provider>
}

export function Embed() {

    const api = useApi();
    useBrowserOnlyEffect(() => {
        var initObj = {		//object containing the init parameters for squatch.js

            //the object for the user you want to upsert
            user: {
                id: 'abc_123',
                accountId: 'abc_123',
                email: 'john@example.com',
                firstName: 'John',
                lastName: 'Doe'
            },
            engagementMedium: 'EMBED',
            widgetType: 'p/referrals/w/referrerWidget',
            jwt: 'TODO'
        };
        squatch.widgets().upsertUser(initObj).then(function (response) {
            const user = response.user;
        }).catch(function (error) {
            console.log(error);
        });
    }, []);
    return <div className="squatchembed"></div>
}

export function useApi() {
    // TODO: Fallback to using the value from `window.squatch` if it exists?
    return useContext(APIContext);
}