<template>
<div>
    <h2>{{customTitle}}</h2>
    <p>{{count}}<sup>2</sup> = {{squareCounter}}</p> 
    <p data-test-id="counter">{{count}}</p>
    <div class="container-vue">        
        <button @click="increaseCounter">+1</button>
        <button @click="decreaseCounter">-1</button>
    </div>
</div>
</template>

<script>

export default {
    props: {
        title: String,
        start: {
            type: Number,
            default: 100,
            validator(value){
                return value > 0
            }
        }
    },
    data() {
        return {
            count: this.start
        }
    },
    methods: {
        getSquareCount(){
            return this.count * this.count
        },
        increaseCounter(){
            return this.count++;
        },
        decreaseCounter(){
            return this.count--;
        }
    },
    computed: {
        squareCounter(){
            return this.count * this.count
        },
        customTitle(){
            return this.title || 'Counter'
        }
    }
}
</script>

<style>
    button{
        background-color: #64B687;
        border-radius: 5px;
        border: 1px solid #fff;
        color: #fff;
        cursor: pointer;
        margin: 0 5px;
        padding: 5px 15px;
        transition: 0.3s ease-in-out;
    }
    button:hover{
        background-color: #5aa67b;
        transition: 0.3s ease-in-out;
    }
</style>