import { render, fireEvent, waitFor, getByRole } from "@testing-library/react";
import React from "react";
import AsyncCounter from "./AsyncCounter";

describe("Testing asynchronous counter functionality", () => {
    it("increments the counter value 0.5 seconds after increment button is clicked", async() => {
        const { getByRole} = render(<AsyncCounter/>);
        fireEvent.click(getByRole("button"));
        const counter =  getByRole("heading");
        await waitFor(() =>expect(counter).toHaveTextContent("1"));
    })
})