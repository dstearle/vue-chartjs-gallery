<template>
    
    <ul class="nav nav-pills">
        
        <router-link to="/" tag="li" active-class="active" exact><button type="button" class="btn btn-outline-dark">Home</button></router-link>
                       
        <router-link to="/lineCharts" tag="li"><button type="button" class="btn btn-outline-success">Line Charts</button></router-link>

        <router-link to="/barCharts" tag="li"><button type="button" class="btn btn-outline-warning">Bar Charts</button></router-link>

        <router-link to="/pieCharts" tag="li"><button type="button" class="btn btn-outline-danger">Pie Charts</button></router-link>

        <router-link to="/miscCharts" tag="li"><button type="button" class="btn btn-outline-info">Misc Charts</button></router-link>

        <!--<router-link to="/listFive" tag="li"><button type="button" class="btn btn-outline-primary">List Five</button></router-link>

        <router-link to="/listSix" tag="li"><button type="button" class="btn btn-outline-dark">List Six</button></router-link> -->
                               
    </ul>
    
</template>