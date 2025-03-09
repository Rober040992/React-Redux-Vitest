import { describe, expect, test } from "vitest";
import { auth } from "./reducers";

describe("auth reducer", () => {
    test("should return true ", () => {
        const state = undefined

        const result = auth(state, { type: "auth/login/fulfilled" });
        expect(result).toBe(true);
    });
})