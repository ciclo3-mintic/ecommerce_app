<template>
    <div id=all>
    <form v-on:submit.prevent="submitForm">
    <div id="container">
        <div id=right> 
            <div class="entrada">
                <label for="name">Digite su contraseña para validar los cambios</label>
                <input type="text" class="form-control" id="name" v-model="form.password">
            </div>
            </div>
        </div>
        <div id=left>
            <div class="entrada">
                <label for="name">Direccion</label>
                <input type="text" class="form-control" id="name" v-model="form.address">
            </div>
            <div class="entrada">
                <label for="name">Celular</label>
                <input type="text" class="form-control" id="name" v-model="form.numberPhone">
            </div>
        </div> 
        <button v-on:click="putcustomer" type="button" class="btn btn-outline-danger">Actualizar</button>
    </form>
    </div>
</template>


<script>
    import axios from "axios";
    export default {
        name: "User",
        data:function(){
            return {
                form:{
                username: localStorage.getItem('current_username'),
                password: "",
                address: "", 
                numberPhone:0,
                }, 
            }
        },
        methods: {
            putcustomer: function(){
            axios
                .put("https://new-ecommerce-api.herokuapp.com/customer/transaction",this.form)
                .then((result) => {
                    
                })
                .catch((error) => {
                    //alert("ERROR Servidor");
                    });
        },
      },
        created: function(){
            this.form["username"]=this.this.$route.params.username; 
            let self = this; 
        }
    }
</script>

<style>
    #all{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
    #container {
        margin: auto;
        /*background-color: blue;*/
        padding: 30px;
        display: flex;
        justify-content: space-between;
    }
    .entrada{
        display: flex;
        flex-direction: column;
        margin: 10px;
    }
    label{
        color: red;
    }
    input{
        border-radius: 20px;
        border: none;
        outline: none;
        padding: 5px 20px;
        background-color: white;
        color: red;
        font-weight: bold;
    }
</style>