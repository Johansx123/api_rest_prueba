import  express  from 'express'; // importamos express
import indexRoutes from './routes//index.routes.js';
import employessRoutes from './routes/employes.routes.js' // importo las routes de la api

const app = express(); // renombramos express por app
app.use(express.json());

app.use(indexRoutes);
app.use(employessRoutes);

app.use((req,res,next)=> {
    res.status(404).json({
        message: 'endpoint not found'
    })
})


export default app;