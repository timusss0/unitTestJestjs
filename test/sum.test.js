import { sum } from "../src/sum";

test("test sum func", () => {
    const result = sum(1, 2)


     expect(result).toBe(3)

})