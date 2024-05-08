export const informationRockets = async(country, description)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("class", "icono_pais")
    img.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/4830/4830734.png")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3_2 = document.createElement('h3');
    let h3 = document.createElement('h4');
    let img__2 = document.createElement('img');
    img__2.setAttribute("class", "estados_unidos")
    img__2.setAttribute("src", "https://diocesanos.es/blogs/equipotic/wp-content/uploads/sites/2/2015/10/Cohetes.jpg")

    
    h3_2.textContent = "COUNTRY: "
    h3.textContent = country
    let small = document.createElement('small');
    small.textContent = description
    divLast.append(h3_2, h3, small, img__2);
    
      
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <small>Lorem ipsum dolor sit amet...</small>
    //     </div>
    // </div>
}
export const informationLaunchCostRocket = async(cost_per_launch)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("class", "icono_dinero")
    img.setAttribute("src", "https://cdn.icon-icons.com/icons2/403/PNG/512/cash_40532.png")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "The estimated cost per rocket launch"
    let small = document.createElement('small');
    let money = new Intl.NumberFormat('cop').format(cost_per_launch)
    small.textContent = `$ ${money}`
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <small>Lorem ipsum dolor sit amet...</small>
    //     </div>
    // </div>
}
export const informationFirstFlightRocket = async(first_flight)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("class", "icono_fecha")
    img.setAttribute("src", "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/calendar-1024.png")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "The date of the first flight of the rocket"
    let small = document.createElement('small');
    small.textContent = first_flight
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <small>Lorem ipsum dolor sit amet...</small>
    //     </div>
    // </div>
}
export const informationWebRocket = async(wikipedia)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("class", "icono_wiki")
    img.setAttribute("src", "https://www.freepnglogos.com/uploads/wikipedia-logo-png/file-wikipedia-svg-logo-free-download-4.png")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Read more about the Rocket"
    let a = document.createElement('a');
    let img__wiki = document.createElement('img');
    img__wiki.setAttribute("class", "img_wiki");
    img__wiki.setAttribute("src", "https://creazilla-store.fra1.digitaloceanspaces.com/icons/7916148/click-icon-md.png")

    a.setAttribute("href", wikipedia)
    a.setAttribute("target", "_blank")
    a.textContent = "Wikipedia"
    a.append(img__wiki);
    divLast.append(h3, a);
    div.append(divFirst, divLast);
    let description__item = document.querySelector("#description__item")
    description__item.append(div)

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <a href="#" target="_blank">Lorem</a>
    //     </div>
    // </div>
}