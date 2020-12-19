<template>
    <div id=all>
    <form v-on:submit.prevent="submitForm">
    <div id="container">
        <div id=right> 
            <div class="entrada">
                <label for="name">Username</label>
                <input type="text" class="form-control" id="name" v-model="form.username">
            </div>
            <div class="entrada">
                <label for="name">Contraseña</label>
                <input type="text" class="form-control" id="name" v-model="form.password">
            </div>
            </div>
            
        </div>
        <button type="submit" class="btn btn-outline-danger entrada">Iniciar Sesion</button>
        
    </form>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        name: "CustomerAuth",
        data:function(){
            return {
                form:{
                    username: "",
                    password: ""
                }, 
            }
        },
        methods: {
            submitForm: function(){
                var self = this
            axios
                .post("https://new-ecommerce-api.herokuapp.com/customer/auth/",self.form)
                .then((result) => {
                    //alert("Autenticación Exitosa"+self.form.username);
                    self.$emit('logeado', self.form.username)
                })
                .catch((error) => {
                    if (error.response.status == "404")
                        alert("ERROR 404: Usuario no encontrado.");
                    
                    if (error.response.status == "403")
                        alert("ERROR 403: Contraseña Erronea.");  
                });
        },
      },
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