import {describe, expect, test } from "vitest";

import { authLoginPending } from "./actions";
describe("authLoginPending", () => {
    test("should return auth/login/pending action", () => {
        const action = {
            type: "auth/login/pending",
        }
        const result = authLoginPending()
        expect(result).toEqual(action)
    })
})