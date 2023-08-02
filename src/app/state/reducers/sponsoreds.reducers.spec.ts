import * as fromReducer from './sponsoreds.reducers';
import { loadSponsoreds, loadedSponsoreds } from '../actions/sponsoreds.actions';
import { sponsoredsModel } from 'src/app/models/sponsoreds.model';
 
describe('Sponsored reducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const initialState = fromReducer.initialState;
      const action = {
        type: 'Unknown',
      };
      const state = fromReducer.sponsoredsReducer(initialState, action);
 
      expect(state).toBe(initialState);
    });
  });
 
  describe('retrievedSponsoredsList action', () => {

    it('init load in true', () => {
      const { initialState } = fromReducer;
      const action = loadSponsoreds();
      const state = fromReducer.sponsoredsReducer(initialState, action);
      expect(state).not.toBe(initialState);
      expect(state.loading).toBeTrue()
    })

    it('should retrieve all sponsoreds and update the state in an immutable way', () => {
      const { initialState } = fromReducer;
      const newState: Array<sponsoredsModel> = [
        {
            id: 1,
            name: 'Carlos',
            birth: new Date('05/12/2000'),
            description: 'My description',
            imgs: 
                ['img.png']            
        }
      ];

      const action = loadedSponsoreds({ sponsoreds: newState });
      const state = fromReducer.sponsoredsReducer(initialState, action);
 
      expect(state.sponsoredsList).toEqual(newState);
      expect(state).not.toBe(initialState);
      expect(state.loading).toBeFalse()
     });
    });
  });
