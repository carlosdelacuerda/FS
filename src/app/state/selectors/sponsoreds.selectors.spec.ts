import { selectListSponsoreds } from "./sponsoreds.selectors";
import { AppState } from "../app.state";

describe("Selectors", () => {
  const initialState: AppState = {
    sponsoreds: 
        {
            loading: false,
            sponsoredsList: [{
                id: 1,
                name: 'string',
                birth: new Date,
                description: 'string',
                imgs: []
                },
            {
                id: 2,
                name: 'string 2',
                birth: new Date,
                description: 'string 2',
                imgs: []
        }
    ]}
  };

  it("should select the sponsored list", () => {
    const result = selectListSponsoreds.projector(initialState.sponsoreds);
    expect(result.length).toEqual(2);
    expect(result[1].id).toEqual(2);
  });
});