import express from 'express'
import path from 'path';

interface Options{
    port: number
    public_path?: string
}


export class Server {

    private app = express();
    private port:number;
    private publicPath:string

    constructor(options: Options){
        const{port, public_path = 'public'}=options
        this.port = port
        this.publicPath = public_path;
    }

   
    async start(){

        //*Middlewares



        //* Public Folder
        this.app.use(express.static(this.publicPath))

        this.app.get('/{*splat}',(req, res)=> {
            const indexPath = path.join( __dirname + `../../../${this.publicPath}/index.html`)
            res.sendFile(indexPath);    
        })


        this.app.listen(this.port, ()=> {
            console.log(`Server Running on port ${this.port} `)
        })
    }
}