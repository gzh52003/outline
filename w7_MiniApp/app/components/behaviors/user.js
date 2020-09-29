module.exports = Behavior({
    behaviors:[],
    data:{
        name:'component',
        test:10
    },
    methods:{
        bgetData(){

        }
    },
    lifetimes:{
        created(){
          console.log('created.Behavior=',this);
        },
    }
})