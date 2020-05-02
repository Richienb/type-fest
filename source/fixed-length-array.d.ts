type ArrayLengthMutationKeys = 'splice' | 'push' | 'pop' | 'shift' | 'unshift'

type InnerFixedLengthArray<Length extends number, ValueType, ArrayType = [ValueType, ...Array<ValueType>]> =
	Pick<ArrayType, Exclude<keyof ArrayType, ArrayLengthMutationKeys>>
	& {
		readonly length: Length
		[I: number]: ValueType
		[Symbol.iterator]: () => IterableIterator<ValueType>
	}

/**
Create a type that limits the amount of values in an array.

Use-case: You want to restrict the length of an array.

@example
```
import {FixedLengthArray} from 'type-fest';

const myArray: FixedLengthArray<3, number> = [1, 2, 3]

const [a, b, c] = myArray // Ok
const [a, b, c, d] = myArray // Invalid index error
```
*/
export type FixedLengthArray<Length extends number, ValueType = unknown> = InnerFixedLengthArray<Length, ValueType>
