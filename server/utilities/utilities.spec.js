/**
 * @jest-environment node
 */

const utilities = require("./utilities");

describe("it tests utility functions needed for building prescription results", () => {
  it("should build prescription results", async () => {
    const testPrescriptions = [
      {
        id: "564aab713032360003280000",
        medication_id: "564aab703032360003130000",
        created_at: "2015-11-17T04:22:09.752Z",
        updated_at: "2015-11-17T04:22:09.752Z"
      }
    ];
    const expected = [
      {
        medication_id: "564aab703032360003120000",
        prescription_id: "564aab713032360003280000"
      }
    ];
    const build = await utilities.buildPrescriptionResults(testPrescriptions);
    expect(build).toEqual(expected);
  });
});
