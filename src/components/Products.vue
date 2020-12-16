<template>
    <div id="User">
        <div id="Textos">
        <h1>{{inventario}}</h1>
        </div>
    </div>
</template> 


<script>
    import axios from "axios";
    export default {
        name: "User",
        data:function(){
            return {
                inventario: []
            }
        },
        created: function(){
            let self = this; 
            axios
                .get("https://new-ecommerce-api.herokuapp.com/productos")
                .then(result => {
                    self.inventario=result.data; 
                })
        }
    }
</script> 

<style>
#User{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
h1{
    color: white;
}

span {
   color:  #ff0000
}
</style>