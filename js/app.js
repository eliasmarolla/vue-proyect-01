const app = Vue.createApp({
  data() {
    return {
        ingreso : true,
        ingresado : false,
        nombre : "",
       
        
    }
  },
  methods:{
    iniciar(nombre){
        this.ingreso = false;
        this.ingresado = true;
        this.nombre = nombre;
    }
  }
})

app.component('list-form',{
    data(){
        return{
            tituloSeccion:"Carguemos datos",
            introduccion1: "A continuacion te invitamos a que comiences a cargar los alimentos que tengas o a los que puedas acceder para armar tus platos",
            introduccion2: "Tambien necesitamos que elijas si este alimento es principal o acompañamiento",
            comida:null,
            tipo:null,
            opciones:[
                {opcion:"principal"},
                {opcion:"acompañamiento"}
                 ],
            comidas:[]
        }
    },
    methods:{
        agregarComida(){
            nuevoObj = {
                comida: this.comida,
                tipo: this.tipo,
               }
               this.comidas.push(nuevoObj)
               console.log(nuevoObj)
               }
        
    },
    template:`
    <h2>{{tituloSeccion}}</h2>
    <p>{{introduccion1}}</p>
    <p>{{introduccion2}}</p>
    <form @submit.prevent="agregarComida">
    <div>
        <label>Ingrese el alimento</label>
        <input type="text" v-model="comida" name="comida">
    </div> 
    <div>
        <select v-model="tipo">
            <option disabled value="">Seleccione el tipo de alimento</option>
            <option v-for="item in opciones" v-bind:value="item.opcion">{{item.opcion}}</option>
        </select>
     </div>
    
<button type="submit">Agregar alimento</button>
    <form>
    `
})
app.component('armar-plato',{
    data(){
        return{
            alimentos:[]
        }
    },
    template: `
    <div>
        <h3>test</h3>
    </div>
    `
})

app.mount('#app');