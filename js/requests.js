get_products=()=>{
    const url = "http://localhost/projetL3/server/get_products.php";
    const method = "GET";

    const ajax = new XMLHttpRequest();
    ajax.onload = function() {
        const res =JSON.parse(this.response);

        let output = "";
        for (let i = 0; i < res.length; i++) {
            output += '<div class="col-sm-4">'+
                        '<div class="card card-price">'+
                    
                            '<div class="card-img">'+
                            '<a href="#">'+
                            '<img src="'+res[i].image+'" class="img-responsive">'+
                            '</a>'+
                            '</div>'+

                            '<div class="card-body">'+
                            '<div class="lead">'+res[i].name+'</div>'+
                            '<div class="price">'+res[i].price+' DZD<small>each</small></div>'+
                            '<ul class="details">'+
                            '<li>'+res[i].description+'</li>'+
                            '</ul>'+
                            '<a href="#" class="buy-now">'+
                            'Buy now <span class="glyphicon glyphicon-triangle-right"></span>'+
                            '</a>'+
                            '</div>'+
                       
                            '</div>'+
                      '</div>'
        }

        const element = document.getElementById('ProductsRes');
        element.innerHTML = output;
    }   

    ajax.open(method, url);
    ajax.send();
}

get_products();



