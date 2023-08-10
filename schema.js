const axios = require('axios')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
 } = require('graphql')


//hardcoded data

const reports =[
    {id: 1, txversion: '$txversion', diagnostics: 'host', txSystemLog: ''},   
]


//customer type
const reportType = new GraphQLObjectType({
    name: 'report',
    fields: () =>({
        id: {type:GraphQLString},
        txversion: {type:GraphQLString},
        diagnostics: {type:GraphQLString},
        txSystemLog: {type: GraphQLInt}
    })
})

//Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        report: {
            type:reportType,
            args:{
                id: {type:GraphQLString}
            },
            resolve(parentValue,args){
               
                for(let i =0; i<reports.length; i++){
                    if(reports[i].id == args.id){
                        return  reports[i]
                    }
                }
           
              
            }
        },

        reports:{
            type: new GraphQLList(reportType),
                resolve(parentValue,args){
                   
                    return reports
                }   
        }
    }
    
});
//mutation
const mutation = new GraphQLObjectType({
    name: 'mutation',
    fields:{
        addreport:{
            type:reportType,
            args:{
                id: {type: new GraphQLNonNull(GraphQLInt)},
                txversion: {type: new GraphQLNonNull(GraphQLString)},
                diagnostics: {type: new GraphQLNonNull(GraphQLString)},
                txSystemLog: {type: new GraphQLNonNull(GraphQLInt)}
                
            },
            resolve(parentValue,args){
              
                // add to the list
              return reports
            }
        },
        deleteReport:{
            type:reportType,
            args:{
                id:{type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(parentValue,args){
                return axios.delete('http://localhost:3000/reports/'+args.id)
                .then(res => res.data);
            }
        },
        editReport:{
            type:reportType,
            args:{
                id:{type: new GraphQLNonNull(GraphQLString)},
                txversion:{type: GraphQLString},
                diagnostics:{type:GraphQLString},
                txSystemLog:{type: GraphQLString}
            },
            resolve(parentValue,args){
                return axios.patch('http://localhost:3000/reports/'+args.id,args)
                .then(res => res.data);
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation
});