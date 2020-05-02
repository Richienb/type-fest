import { expectType, expectError } from 'tsd';
import { FixedLengthArray } from '..';

let value: FixedLengthArray<3> = [1, "b", {}];

expectError(() => {
	value = [1, 2, 3, 4]
})

expectType(() => {
	value[2] = 3
})
