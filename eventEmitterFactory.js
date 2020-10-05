function eventEmitterFactory(){
    
    var subscribeObj = {
        subscribe:  function(eventName, eventHandler) {    //one eventName with a lot of eventHandlers
            if(!this.eventHandlersMap.has(eventName)){
                this.eventHandlersMap.set(eventName, []);
            }
            this.eventHandlersMap.get(eventName).push(eventHandler);


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
emitter.subscribe('my-event', myEventHandler); 
emitter.emit('my-event', 'HELLO!'); 
