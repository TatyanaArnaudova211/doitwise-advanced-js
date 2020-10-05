function eventEmitterFactory(){
    
    var subscribeObj = {
        subscribe:  function(eventName, eventHandler) {    //one eventName with a lot of eventHandlers
            if(!this.eventHandlersMap.has(eventName)){
                this.eventHandlersMap.set(eventName, []);
            }
            this.eventHandlersMap.get(eventName).push(eventHandler);

            function unsubscribe(){
                var handlers = subscribeObj.eventHandlersMap.get(eventName);
                for(var i = 0; i < handlers.length; i++){
                    var handler = handlers[i];
                    if(handler == eventHandler){
                        handlers.splice(i, 1);
                    }
                }
            }
            return unsubscribe;
        },
        emit: function(eventName, someData){
            if(this.eventHandlersMap.has(eventName)){
                var handlers = this.eventHandlersMap.get(eventName);  // handlers = array of functions
                for(var handler of handlers){                         // handler = function
                    handler(someData);
                }
            }
        },
        eventHandlersMap: new Map(),

    }
    return subscribeObj;
};

function myEventHandler (data) {
     console.log('my-event was called with data:', data); 
}

var emitter = eventEmitterFactory();
emitter.subscribe('my-event', myEventHandler); //Adds key + value to map(eventHandlersMap) - eventHandlersMaps = data after this line = key 'my-event' value(array of funcs) = [myEventHandler]
var unsub = emitter.subscribe('my-event', console.log); //Adds key + value to map(eventHandlersMap) - eventHandlersMaps = data after this line = key 'my-event' value(array of funcs) = [myEventHandler, console.log]
unsub();//removes console.log
emitter.emit('my-event', 'HELLO!'); //calls every value of eventHandlersMap.get('my-event') - [myEventHandler, console.log] by providing them data 'HELLO!'
