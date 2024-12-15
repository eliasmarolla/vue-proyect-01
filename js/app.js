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
            comida:null,
            tipo:null,
            opciones:[
                {texto:"principal", value:'A'},
                {texto:"acompañamiento", value:'B'}
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
    props:[nombre],
    template:`
    <div>Bienvenido {</div>
    <form @submit.prevent="agregarComida">
    <div>
        <label>Ingrese el alimento</label>
        <input type="text" v-model="comida" name="comida">
    </div> 
    <div>
        <select v-model="tipo">
            <option disabled value="">Seleccione el tipo de alimento</option>
            <option v-for="item in opciones" v-bind:value="item.value">{{item.texto}}</option>
        </select>
     </div>
    
<button type="submit">Agregar comida</button>
    <form>
    `
})
app.component('armar-plato',{
    data(){
        return{

        }
    },
    template: `
    <div>
        <h3>test</h3>
    </div>
    `
})

app.mount('#app');