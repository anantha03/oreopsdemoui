const webpack =require('webpack');

module.exports={
    plugins:[
        new webpack.DefinePlugin({
            $ENV:{
                Backend_IP :JSON.stringify(process.env.Backend_IP ||"my_default_value" )
            }
        })
    ]
};