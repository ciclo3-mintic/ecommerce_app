<template>
    <div id="User">
        <div id="Textos">
        <h1>Informacion del usuario: <span> {{username}} </span></h1>
        <h1>Nombre: <span>{{name}}</span></h1>
        <h1>Apellidos:  <span>{{lastname}} {{secondLastname}}</span></h1>
        <h1>Direccion:  <span>{{address}} </span></h1>
        <h1>Celular:  <span>{{numberPhone}} </span></h1>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        name: "User",
        data:function(){
            return {
                username: "none",
                name: "", 
                lastname:"",
                secondLastName:"", 
                address: "", 
                numberPhone:0
            }
        },
        created: function(){
            this.username = this.$route.params.username; 
            let self = this; 
            axios
                .get("https://new-ecommerce-api.herokuapp.com/customer/fullName/"+this.username)
                .then(result => {
                    self.name=result.data.name; 
                    self.lastname=result.data.secondLastName; 
                    self.secondLastName=result.data.secondLastname; 
                    self.address=result.data.address; 
                    self.numberPhone=result.data.numberPhone;
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