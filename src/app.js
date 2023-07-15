import  express  from 'express'; // importamos express
import indexRoutes from './routes//index.routes.js';
import employessRoutes from './routes/employes.routes.js' // importo las routes de la api
import services from './routes/services.routes.js'
import comments from './routes/comment.routes.js'
import users from './routes/users.routes.js'
import requestservices from './routes/requestservice.routes.js'
import cors from 'cors';



const app = express(); // renombramos express por app
app.use(express.json());
app.use(cors());

app.use(services,indexRoutes,employessRoutes,comments,users,requestservices);

app.use((req,res,next)=> {
    res.status(404).json({
        message: 'endpoint not found'
    })
})


export default app;