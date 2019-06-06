import Home from './components/Home.vue';
import Header from './components/Header.vue';

// Imports for the lists
import LineCharts from './components/charts/linecharts/LineChartsIndex.vue';
import BarCharts from './components/charts/barCharts/BarChartsIndex.vue';
import PieCharts from './components/charts/pieCharts/PieChartsIndex.vue';
import MiscCharts from './components/charts/miscCharts/MiscChartsIndex.vue';
// import ListFive from './components/lists/ListFive.vue';

export const routes = [
    
    // Default page set by ''
    { path: '', component: Home},

    { path: '', component: Header},
    
    { path: '/lineCharts', component: LineCharts},

    { path: '/barCharts', component: BarCharts},

    { path: '/pieCharts', component: PieCharts},

    { path: '/miscCharts', component: MiscCharts},

    // { path: '/listFive', component: ListFive},
        
];