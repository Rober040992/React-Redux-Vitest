import { describe, expect, test } from "vitest";
import { advertsLoadedFulfilled, authLoginPending } from "./actions";
describe("authLoginPending", () => {
  test("should return auth/login/pending action", () => {
    const action = {
      type: "auth/login/pending",
    };
    const result = authLoginPending();
    expect(result).toEqual(action);
  });
});

describe("AdvertsLoadedFulfilled", () => {
  test("should return adverts/loaded/fulfilled action", () => {
    const advertExample = [{
        id: "1",
        name: "string",
        sale: false,
        price: 1,
        tags: ["work"],
        photo: null,
        }]
    const action = {
      type: "advert/loaded/fulfilled",
      payload: advertExample,
    };
    const result = advertsLoadedFulfilled(advertExample);
    expect(result).toEqual(action);
  });
});
