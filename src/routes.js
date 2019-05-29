import Home from './components/Home.vue';
import Header from './components/Header.vue';

// Imports for the lists
import LineCharts from './components/charts/LineCharts.vue';
// import ListTwo from './components/lists/ListTwo.vue';
// import ListThree from './components/lists/ListThree.vue';
// import ListFour from './components/lists/ListFour.vue';
// import ListFive from './components/lists/ListFive.vue';

export const routes = [
    
    // Default page set by ''
    { path: '', component: Home},

    { path: '', component: Header},
    
    { path: '/lineCharts', component: LineCharts},

    // { path: '/listTwo', component: ListTwo},

    // { path: '/listThree', component: ListThree},

    // { path: '/listFour', component: ListFour},

    // { path: '/listFive', component: ListFive},
        
];