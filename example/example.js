import React from "react";
import ReactDOM from "react-dom";
import { Provider, Embed } from "../src";


function App() {

    const config = {
        tenantAlias: "test_avxqn8tccqj0e"
    }
    const user = {
        id: 'abc_123',
        accountId: 'abc_123',
        email: 'john@example.com',
        firstName: 'John',
        lastName: 'Doe'
    };
    const jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiYWJjXzEyMyIsImFjY291bnRJZCI6ImFiY18xMjMiLCJlbWFpbCI6ImpvaG5AZXhhbXBsZS5jb20iLCJmaXJzdE5hbWUiOiJKb2huIiwibGFzdE5hbWUiOiJEb2UifX0.xRI-UfqVY5V6bnJ690wqvjGyNmYxsmdofq0tH7Cm6wM";
    const props = {
        config,
        user,
        jwt
    }
    return <div>
        <h4>Outside</h4>
        <Provider  {...props}>

            <h3>This is a Squatch.js component</h3>

            <Embed widgetType="p/new-referral-program/w/referrerWidget" />
        </Provider>
    </div>
}
const el = document.getElementById("root");
console.log("Loading", el);
ReactDOM.render(<App />, el)