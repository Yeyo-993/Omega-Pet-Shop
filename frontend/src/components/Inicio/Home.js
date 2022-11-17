import axios from 'axios'

//HOOKS --> GANCHOS --> Gestionar los estados del componente
import {useState, useEffect} from 'react'
import { Router } from 'react-router-dom'

import {Link} from 'react-router-dom'
import { Title } from '../styles'

const CompHome = ()=>{
    return(
        <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="#!" src="https://turbologo.com/designs/16472507">Omega Pet Shop</a>
                

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <Link to={'/'} className="nav-item"><i class="nav-link">Home</i></Link>
                        <Link to={'/listar'} className="nav-item"><i class="nav-link">Productos</i></Link>
                        <Link to={'/producto/crear'} className="nav-item"><i class="nav-link">Registrarse</i></Link>
                        <Link to={'/producto/crear'} className="nav-item"><i class="nav-link">Iniciar Sesion</i></Link>
                    </ul>
                </div>
            </div>
        </nav>
        <header class="py-5 bg-info border-bottom mb-4">
            <div class="container">
                <div class="text-center my-5">
                    <h1 class="fw-bolder">Welcome to Omega Pet Shop!</h1>
                    <p class="lead mb-0">Desarrollador por Grupo 5 U-26</p>
                </div>
            </div>
        </header>
    
        <div class="container">
            <div class="row">
             
                <div class="col-lg-8">
                    
                    <div class="card mb-4">
                        <a href="#!"><img class="card-img-top" src="https://www.dogalize.com/wp-content/uploads/2017/06/La-sverminazione-e-la-pulizia-del-cucciolo-del-cane-2-800x400-800x400.jpg" alt="..." /></a>
                        <div class="card-body">
                            <div class="small text-muted">January 1, 2022</div>
                            <h2 class="card-title">Featured Post Title</h2>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
                            <a class="btn btn-primary" href="#!">Read more →</a>
                        </div>
                    </div>
                   
                    <div class="row">
                        <div class="col-lg-6">
                           
                            <div class="card mb-4">
                                <a href="#!"><img class="card-img-top" src="https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/2021-10/los-mejores-juegos-de-perritos-cachorros-por-mes-de-edad.png?itok=c_7ZTNtv" alt="..." /></a>
                                <div class="card-body">
                                    <div class="small text-muted">January 1, 2022</div>
                                    <h2 class="card-title h4">Post Title</h2>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                                    <a class="btn btn-primary" href="#!">Read more →</a>
                                </div>
                            </div>
                          
                            <div class="card mb-4">
                                <a href="#!"><img class="card-img-top" src="https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/purina-10-datos-curiosos-sobre-los-gatos.png?itok=88pMyzkl" alt="..." /></a>
                                <div class="card-body">
                                    <div class="small text-muted">January 1, 2022</div>
                                    <h2 class="card-title h4">Post Title</h2>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                                    <a class="btn btn-primary" href="#!">Read more →</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                        
                            <div class="card mb-4">
                                <a href="#!"><img class="card-img-top" src="https://cdn.shopify.com/s/files/1/0410/2199/7206/products/Dog-Chow-Salud-Visible-Adultos-Medianos-y-Grandes.png?v=1597237400" alt="..." /></a>
                                <div class="card-body">
                                    <div class="small text-muted">January 1, 2022</div>
                                    <h2 class="card-title h4">Post Title</h2>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                                    <a class="btn btn-primary" href="#!">Read more →</a>
                                </div>
                            </div>
                         
                            <div class="card mb-4">
                                <a href="#!"><img class="card-img-top" src="https://simaro.co/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/P/u/Purina-ONE-Licitacin-Selecciona-Mezcla-con-el-Real-Pollo-Premium-de-Comida-para-gatos-22-lb-Bolsa_5.jpeg" alt="..." /></a>
                                <div class="card-body">
                                    <div class="small text-muted">January 1, 2022</div>
                                    <h2 class="card-title h4">Post Title</h2>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam.</p>
                                    <a class="btn btn-primary" href="#!">Read more →</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <nav aria-label="Pagination">
                        <hr class="my-0" />
                        <ul class="pagination justify-content-center my-4">
                            <li class="page-item disabled"><a class="page-link" href="#" tabindex="-1" aria-disabled="true">Newer</a></li>
                            <li class="page-item active" aria-current="page"><a class="page-link" href="#!">1</a></li>
                            <li class="page-item"><a class="page-link" href="#!">2</a></li>
                            <li class="page-item"><a class="page-link" href="#!">3</a></li>
                            <li class="page-item disabled"><a class="page-link" href="#!">...</a></li>
                            <li class="page-item"><a class="page-link" href="#!">15</a></li>
                            <li class="page-item"><a class="page-link" href="#!">Older</a></li>
                        </ul>
                    </nav>
                </div>
               
                <div class="col-lg-4">
                   
                    <div class="card mb-4">
                        <div class="card-header">Buscar</div>
                        <div class="card-body">
                            <div class="input-group">
                                <input class="form-control" type="text" placeholder="Enter search term..." aria-label="Enter search term..." aria-describedby="button-search" />
                                <button class="btn btn-primary" id="button-search" type="button">Go!</button>
                            </div>
                        </div>
                    </div>
                    
                    {/* <div class="card mb-4">
                        <div class="card-header">Categories</div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-6">
                                    <ul class="list-unstyled mb-0">
                                        <li><a href="#!">Web Design</a></li>
                                        <li><a href="#!">HTML</a></li>
                                        <li><a href="#!">Freebies</a></li>
                                    </ul>
                                </div>
                                <div class="col-sm-6">
                                    <ul class="list-unstyled mb-0">
                                        <li><a href="#!">JavaScript</a></li>
                                        <li><a href="#!">CSS</a></li>
                                        <li><a href="#!">Tutorials</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> */}
                 
                    <div class="card mb-4">
                        <div class="card-header">Omega Pet Shop</div>
                        <div class="card-body">Encuentra todos los productos para tu mascota en un solo lugar!!</div>
                    </div>
                </div>
            </div>
        </div>
      
        <footer class="py-5 bg-dark">
            <div className="container"><p class="m-0 text-center text-white">Copyright &copy; Your Website 2022</p></div>
        </footer>
     </div>
 
    )
}
export default CompHome