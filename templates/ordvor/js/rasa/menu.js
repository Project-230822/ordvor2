document.addEventListener("DOMContentLoaded",()=>{
function rasa_menu(){
	if(document.querySelector('.main-nav.done')){
		document.querySelector('.main-nav.done').classList.remove("done");
	}
    let node = document.querySelector('.main-na .submenu.level2');
    let Items = document.querySelectorAll('.main-na .submenu.level2>.submenu-item.parent-item');
    let imgHeight = 200;
    if(node){
    let nodeProps = node.getBoundingClientRect();
    // аждый раз при изменении делаем все блоки видимыми
    Items.forEach((item)=>{
        if(item.classList.contains("off")){
            item.classList.remove("off");  
        }
    });
    //ѕроизводим просчЄт выходит ли блок за пределы меню
    Items.forEach((item)=>{
        let positon = item.getBoundingClientRect();
        if(positon["left"]>nodeProps["right"] || positon["right"]>nodeProps["right"]){
            item.classList.add("off");
        }
    });
	//–азворачиваем меню если дочерний блок выходит за пределы меню
    Items.forEach((item)=>{
		let elem = item.querySelector('.submenu.level4 .picture');
        item.classList.remove("right");
        item.querySelector('.submenu.level3').style.display="block";
        item.querySelector('.submenu-container').style.display="block";
		item.querySelector('.submenu.level4').style.display = "block";
		if(elem){
        	if(elem.getBoundingClientRect()["right"]>nodeProps["right"]){
            	item.classList.add("right");
        	}
		}
		else{
			if(item.querySelector('.submenu.level4').getBoundingClientRect()["right"]>nodeProps["right"]){
            	item.classList.add("right");
        	}
		}

	// ƒобавл€ем минимальную высоту если блок меньше картинки, иначе нельз€ перейдти
    	let containerHeight = item.querySelector('.submenu-container');
	    let elemsEdit = item.querySelectorAll('.submenu.level4');
		elemsEdit.forEach((it)=>{
			if(it.offsetHeight<containerHeight.offsetHeight){
				it.style.minHeight = containerHeight.offsetHeight +"px";
				if(containerHeight.offsetHeight<imgHeight){
					it.style.minHeight = imgHeight +"px";
					containerHeight.style.minHeight=imgHeight +"px";
				}				
			}
		});
        
        item.querySelector('.submenu.level3').style.display="";
        item.querySelector('.submenu-container').style.display="";
		item.querySelector('.submenu.level4').style.display = "";
		if(elem){
	        elem.parentElement.style.display = "";	
		}
    });
    }
}



function rasa_resize(){
    let a = document.querySelector('.main-na') || document.querySelector('.main-nav');
    if(window.innerWidth <=990){
        a.classList="main-nav";
    }
    else{
        a.classList="main-na";
    }
}
rasa_resize();
window.onresize = ()=>{
	rasa_resize();
    rasa_menu();
};
rasa_menu();
});