class observable {

    constructor() {

        this.subs = [];
        this.state = 0;
    }



    publish() {

        this.subs.map((eachsub) => eachsub(this.state))

    }

    subscribe(subscriber) {
        this.subs.push(subscriber)

        subscriber(this.state);
    }
    
    

    changingState(value) {


        this.state = value;
        this.publish();
    }
}


const consumer = new observable();



consumer.subscribe(state => {
    console.log("subscriber hit ", state);
})

consumer.changingState(50)