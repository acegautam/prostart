(()=>{
    var now = moment().format('MMMM Do YYYY, h:mm:ss a');
    console.log(`Time now is ${now}`);

    // lodash example
    var players = [
        {id:1, name:'Gautam', sports:['soccer', 'cricket', 'pingpong'], loc: {state: 'CA'}},
        {id:2, name:'Sameer', sports:['cricket'], loc: {state: 'IR'}},
        {id:3, name:'Nitin', sports:['football', 'golf'], loc: {state: 'NC'}},
        {id:4, name:'Krish', sports:['baseball', 'cricket', 'swimming'], loc: {state: 'CA'}}
    ];

    var cricketers = _(players)
        .filter((item) => _.includes(item.sports, "golf"))
        .map('name');

    console.log(cricketers.value());

})();
