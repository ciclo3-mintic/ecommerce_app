<template>
    <div id="User">
        <div id="myFadeCarousel" class="carousel slide carousel-fade imagenes" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="../assets/ps5.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/seriex-x.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/switch.png" class="d-block w-100" alt="...">
                    </div>
                </div>
                <a class="carousel-control-prev" href="#myFadeCarousel" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#myFadeCarousel" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        <div id="Textos">
           <ul >
               <li v-for="(value,index) in inventario" v-bind:key="index" id="lalista">
                   <h3>Nombre: {{value["name"]}}, 
                       price: {{value["price"]}},
                       discount: {{value["discount"]}},
                       total_price: {{value["total_price"]}}</h3>             
                   <button v-on:click="update-customer" type="button" class="btn btn-outline-danger">Detalles</button>
                   
                </li>
                <br>
            </ul>
        </div>
    </div>
</template> 


<script>
    import 'bootstrap';
    import axios from "axios";
    export default {
        name: "Products",
        data:function(){
            return {
                inventario: []
            }
        },
        created: function(){
            let self = this; 
            axios
                .get("https://new-ecommerce-api.herokuapp.com/productos")
                .then((result) => {
                    self.inventario=result.data; 
                }).catch((error) => {
                    alert("ERROR Servidor");
                    });
        }
    }
</script> 

<style>
.imagenes{
    margin-bottom: 1%;
}
#User{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
}
h3{
    color: red;
    font-size: 1.5ch;
}
button{
    margin: 1ch 0px;
}
span {
   color:  #ff0000
}
</style>