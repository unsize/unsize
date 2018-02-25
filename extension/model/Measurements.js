import { Record } from 'immutable';
import { Unit } from './Unit';

const unit = 'unit';
export class Measurements extends Record({
  neck: 0,
  chest: 0,
  sleeve: 0,
  waist: 0,
  hip: 0,
  inseam: 0,
  [unit]: Unit.IN
}) {
  set(key, value) {
    if (unit === key) {
      if (value !== Unit.IN || value !== Unit.CM) {
        return this;
      }
    }
    return super.set(key, value);
  }
}
