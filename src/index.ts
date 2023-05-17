/**
 * 1. sumUp
 */
function sumUp(a: number, b: number): number {
    return a + b;
}

let summaryResult: number = sumUp(33, 3);
console.log('summaryResult', summaryResult); // Outputs: 3

/**
 * 1. Interface
 * Typescript is smart enough to infer the data types when you help it narrow them down.
 */
enum CounterActionType {
    Increment = 'INCREMENT',
    IncrementBy = 'INCREMENT_BY',
}

interface IncrementAction {
    type: CounterActionType.Increment;
}

interface IncrementByAction {
    type: CounterActionType.IncrementBy;
    payload: number;
}

type CounterAction = IncrementAction | IncrementByAction;

function reducer(state: number, action: CounterAction) {
    switch (action.type) {
        case CounterActionType.Increment:
            // TS infers that the action is IncrementAction
            // & has no payload
            return state + 1;
        case CounterActionType.IncrementBy:
            // TS infers that the action is IncrementByAction
            // & has a number as a payload
            return state + action.payload;
        default:
            return state;
    }
}
const initialState: number = 0;
const incrementByAction: IncrementByAction = {
    type: CounterActionType.IncrementBy,
    payload: 5, // Increment the counter by 5
};
const newState: number = reducer(initialState, incrementByAction);
let counter: number = initialState;
counter = newState; // Counter value is now incremented by 5
console.log('counter', counter);

/**
 * 2. Literal Types
 * Often you need specific values for a variable, that's where literal types come in handy.
 */
type Status = 'idle' | 'loading' | 'success' | 'error';
let currentStatus: Status = 'idle';
console.log('currentStatus', currentStatus); // Output: "idle"

/**
 * 3. Type Guards
 * Type guards are another method to narrow down the type of a variable:
 */
function isNumber(value: any): value is number {
    return typeof value === 'number';
}

const validateAge = (age: number) => {
    if (isNumber(age)) {
        console.error('The age has been validated.');
    } else {
        console.error('The age must be a number');
    }
};
validateAge(18);

/**
 * 4. Index Signature
 * When you have dynamic keys in an object, you can use an index signature to define its type:
 */
enum PaticipationStatus {
    Joined = 'JOINED',
    Left = 'LEFT',
    Pending = 'PENDING',
}

interface ParticipantData {
    [id: string]: PaticipationStatus;
}

const participants: ParticipantData = {
    id1: PaticipationStatus.Joined,
    id2: PaticipationStatus.Left,
    id3: PaticipationStatus.Pending,
};
console.log('participants', participants);

/**
 * 5. Generics
 * Generics are a powerful tool to make your code more reusable. It allows you to define a type that will be determined by the use of your function.
 * In the following example, T is a Generic type:
 */
const clone = <T>(object: T) => {
    const clonedObject: T = JSON.parse(JSON.stringify(object));
    return clonedObject;
};

const obj = {
    a: 1,
    b: {
        c: 3,
    },
};

const obj2 = clone(obj);
console.log('obj2', obj2);

/**
 * 6. Immutable Types
 * You can make your types immutable by adding as const. This ensures that you don't end up accidentally changing the values.
 */
const ErrorMessages = {
    InvalidEmail: 'Invalid email',
    InvalidPassword: 'Invalid password',
} as const;
// This will throw an error
// ErrorMessages.InvalidEmail = "New error message";
console.log('ErrorMessages', ErrorMessages);

/**
 * 7. Partial, Pick, Omit & Required Types
 * Often while working with server & local data, you need to make some properties optional or required.
 * Instead of defining hundreds of interfaces with slightly altered versions of the same data. You can do that using Partial, Pick, Omit & Required types.
 */
interface User {
    name: string;
    age?: number;
    email: string;
}

type PartialUser = Partial<User>;
type PickUser = Pick<User, 'name' | 'age'>;
type OmitUser = Omit<User, 'age'>;
type RequiredUser = Required<User>;

// PartialUser is equivalent to:
// interface PartialUser {
//   name?: string;
//   age?: number;
//   email?: string;
// }

// PickUser is equivalent to:
// interface PickUser {
//   name: string;
//   age?: number;
// }

// OmitUser is equivalent to:
// interface OmitUser {
//   name: string;
//   email: string;
// }

// RequiredUser is equivalent to:
// interface RequiredUser {
//   name: string;
//   age: number;
//   email: string;
// }
