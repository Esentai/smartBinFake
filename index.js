let config = {
    apiKey: "hXBt2sTMhpV6Zq3OVZo4Il9zSlau2ByMHh5YDZCf",
    authDomain: "smartbin-4d89e-default-rtdb.firebaseapp.com",
    projectId: "smartbin-4d89e-default-rtdb",
    databaseURL: "https://smartbin-4d89e-default-rtdb.firebaseio.com",
};

firebase.initializeApp(config);

const database = firebase.database();


const vm = new Vue({

    el: "#root",

    data: () => {
        return {
            map: {},
            icons: [],
            k: 10
        };

    },

    created: function() {
        this.createMap();

    },
    methods: {
        createMap: function () {
            database.ref('1').on('value', this.saveData);
        },

        up: function () {
            let map = this.$data.map;
            var updates = {};
            updates['sign/sign1/icon'] = 'https://image.flaticon.com/icons/svg/515/515018.svg';
            database.ref().update(updates);
        },
        func: function(){
            console.log("work")
            var updates = {}; 
            setTimeout(() => {
                updates['1/completeness'] = this.$data.k;
                database.ref().update(updates);
                this.$data.k += 6;
            },500);
           

        },

        decFunc: function(){
            console.log("dd")
        },

        saveData: function (snapshot) {
            let value = snapshot.val();
            Object.entries(value).map(([key, v]) => {
                console.log(v);
            });
        },
    }
});