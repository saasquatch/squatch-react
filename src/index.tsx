import React, { useContext, useRef } from "react";
import {Widgets} from "@saasquatch/squatch-js";
import useBrowserOnlyEffect from "./useBrowserOnlyEffect";

const APIContext = React.createContext(undefined);


/**
 * Provides the squatch.js API instance to be used by the children
 * 
 * @param props 
 */
export function Provider({ children, config, user, jwt }) {

    const widgets = new Widgets(config);
    const value = {
        widgets,
        user,
        jwt
    }
    return <APIContext.Provider value={value}>
        {children}
    </APIContext.Provider>
}

export function Embed({widgetType="p/referrals/w/referrerWidget"}) {

    const {widgets, user, jwt} = useApi();
    const ref = useRef();
    useBrowserOnlyEffect(() => {
        if (ref.current) {
            var initObj = {		//object containing the init parameters for squatch.js
                //the object for the user you want to upsert
                user,
                engagementMedium: 'EMBED',
                element: ref.current,
                widgetType,
                jwt
            };
        }
        widgets.upsertUser(initObj).then(function (response) {
            const user = response.user;
        }).catch(function (error) {
            console.log(error);
        });
    }, [ref.current]);
    return <div ref={ref}></div>
}

export function useApi() {
    // TODO: Fallback to using the value from `window.squatch` if it exists?
    return useContext(APIContext);
}