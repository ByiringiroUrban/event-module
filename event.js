
import { error } from 'console';
import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

function greetingHandler(name) {
  console.log('Hello Mr ' + name);
}

function goodByeHandler (name) { 
  console.log('Goodbye Mr ' + name);
}

//  Register event listeners

myEmitter.on('greet',greetingHandler );
myEmitter.on('goodbye',goodByeHandler );

// Emit events
myEmitter.emit('greet', 'Lena');
myEmitter.emit('goodbye', 'Kazeneza');

// Error handling
myEmitter.on('error', (err) => {
  console.log('An Error Occures')
});

// simulate error

myEmitter.emit('error', new Error ('Something went wrong'))
