import { produce } from "immer";
// Let us consider an object
let a = {
    b: "Sadiq",
    c: {
        d: {
            e: 5,
        }
    }
};
console.log(a);

// Now if we want to modify the e value in the object, we need to create a new object and copy the 'a' values into it
// We need to copy it because the object is immutable
let f = {
    ...a,
    c: {
        ...a.c,
        d: {
            ...a.c.d,
            e: 6,
        }
    }
};
console.log(f);

// Suppose if we use Immer for modifying the object (throws an error if we don't have installed immer)
a.c.d.e = 7; // This line will internally run the same as copying the object and modifying it as shown above
console.log(a);

// Best way to use Immer (Making Object Mutable is to use Immer.produce --> Immer is inbulit but need to import produce)
const g = produce(a, (draft) => {
    draft.c.d.e = 8;
    draft.b = "Mohammad";
});
console.log(g);
