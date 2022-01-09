/*
This happened on 08-Jan-2022
*/
/*
Q-1: Output Question - 
*/
console.log(' [1]');
setTimeout(() => console.log(" [2]"), 0);
setTimeout(() => console.log(" [3]"), 1);

const p = Promise.resolve();
for(let i = 0; i < 3; i++) {p.then(() => {
    setTimeout(() => {
        console.log(' [4]')
        setTimeout(() => console.log(" [5]"), 0);
        p.then(() => console.log(' [6]'));
    }, 0);
    console.log(" [7]");
})}

console.log(" [8]");

/*
Q-2: Add a method addEventListener to an array such that we can attach any event to it and pass a callback once the event is triggered
Also, you should have a method pushWithEvent which when called, should push the given element in the array and trigger all the events that
the array is attached to. In the following example, we are trying to add a push event on array and logging each item in it to the console.
pushWithEvent get 5 as an input and pushes it to the array and trigger "push" event on it (I'm still confused whether interviewer said we need
to call the event on every item of the array or only the item we are currently pushing to the array.
*/
array =[1,2,3];
array.addEventListener('push', (item) => {console.log(item);
})
array.pushWithEvent(5);

/*
Q-3 - Web vitals explain those
Answer - https://web.dev/vitals/
    1. LCP - Large Contentful Paint - measures loading performance. LCP should occur within 2.5 seconds.
    2. FID - First Input Delay - measures interactivity . Pages should have a FID of 100 ms or less.
    3. CLS - Cumulative Layout Shift - measure visual stability. Pages should maintain a CLS of 0.1 or less.
*/
