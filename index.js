

const pr = document.getElementById("btnn");
const ddd = document.getElementById("discount")

if(total>200){
  rs.classList.add('text');
  pr.disabled = false;
  pr.style.backgroundColor = '#61505d';
  pr.style.color = 'white';

}


if(total>0){
    pr.disabled = false;
    pr.style.color = 'red';
    pr.style.backgroundColor = 'purple';
    
}
if(total<200){
     ddd.style.visibility = 'hidden' 
}
else{
    ddd.classList.add('visible')
}
if(total>0){
    q.disabled = false;
    q.style.color = 'red';
    q.style.backgroundColor = 'purple';
    
}
 




var  total = 0;
 document.getElementById("divone").addEventListener('click',function(){

    var  taka = document.getElementById("taka");
    var names = document.getElementById("name");
    var namess = names.innerText;
   
    var takas = taka.innerText;
    total = parseFloat(total) + parseFloat(takas);
    

    var container = document.getElementById("container");
    var containers = document.getElementById("countainers");
   
    const li = document.createElement('p');
    li.innerText = namess;
    containers.appendChild(li)
    
    const count = container.childElementCount;
    li.innerText =count+1 + " " + namess;

  
    var p = document.createElement('p');
    p.innerText ="Total " + takas + "   TK";

    

   /*  let li = document.createElement('li'); */
    container.appendChild(p);
   /*  const firstTotal = document.getElementById("totalppp").innerText ="Total Taka" + total ;  */
   const coupon = document.getElementById("coupone");
   const cc = coupon.value;
 

    if(total>200){
        if(cc==="SELL200"){
            const p = ddd.innerText;
            const pp = (total *20)/100;
            const ps = document.createElement('p');
            ps.innerText ="Discount " +  pp + " TK";
            container.appendChild(ps);
            pr.disabled = false;
            pr.classList.add('ss')
            const ttp = total - pp;
            p.innerText = "Total pay" + (total -pp)+ "   TK";
            const firstTotal = document.getElementById("totalppp").innerText = "Total Pay :  " + ttp; 
          
           

        }else{
            const p = ddd.innerText;
      
            const ps = document.createElement('p');
            ps.innerText ="Discount " +  "00" + " TK";
            container.appendChild(ps);
            const ttp = total;
            p.innerText = "Total pay" + (total)+ "   TK";
            const firstTotal = document.getElementById("totalppp").innerText = "Total Pay :  " + ttp; 
    
            
        }
       
   
     
     
  
      
    }

    

   
});

var  total = 0;
document.getElementById("divtwo").addEventListener('click',function(){
    var  taka = document.getElementById("twotaka");
    var names = document.getElementById("name1");
    var namess = names.innerText;
   
   
    var takas = taka.innerText;
    total = parseFloat(total) + parseFloat(takas);

    var container = document.getElementById("container");
    var containers = document.getElementById("countainers");
   
    const li = document.createElement('p');
    li.innerText = namess;
    containers.appendChild(li)
    
    const count = container.childElementCount;
    li.innerText =count+1 + " " + namess;

  
    var p = document.createElement('p');
    p.innerText = takas + "   TK";

   /*  let li = document.createElement('li'); */
    container.appendChild(p);
    const firstTotal = document.getElementById("totalppp").innerText = total; 

     
    if(total>200){
        const p = ddd.innerText;
        const pp = (total *20)/100;
        const ps = document.createElement('p');
        ps.innerText ="Discount " +  pp + " TK";
        container.appendChild(ps);
        const ttp = total - pp;
        p.innerText = "Total pay" + (total -pp)+ "   TK";
        const firstTotal = document.getElementById("totalppp").innerText = "Total Pay :  " + ttp; 
      
       
        const couponcode = document.getElementById("coupone");
        const prss = couponcode.value ;
        console.log(prss)
      
     }else{
         const p = ddd.innerText;
       
         const ps = document.createElement('p');
         ps.innerText ="Discount " +  "00" + " TK";
         container.appendChild(ps);
         const ttp = total;
         p.innerText = "Total pay" + (total)+ "   TK";
         const firstTotal = document.getElementById("totalppp").innerText = "Total Pay :  " + ttp; 
 
     }
 
 

   
});

var  total = 0;
document.getElementById("divthree").addEventListener('click',function(){
    var  taka = document.getElementById("threetaka");
    var names = document.getElementById("name2");
    var namess = names.innerText;
   
    var takas = taka.innerText;
    total = parseFloat(total) + parseFloat(takas);

    var container = document.getElementById("container");
    var containers = document.getElementById("countainers");
   
    const li = document.createElement('p');
    li.innerText = namess;
    containers.appendChild(li)
    
    const count = container.childElementCount;
    li.innerText =count+1 + " " + namess;

  
    var p = document.createElement('p');
    p.innerText = takas + "   TK";

   /*  let li = document.createElement('li'); */
    container.appendChild(p);
    const firstTotal = document.getElementById("totalppp").innerText = total; 

      
    if(total>200){
        const p = ddd.innerText;
        const pp = (total *20)/100;
        const ps = document.createElement('p');
        ps.innerText ="Discount " +  pp + " TK";
        container.appendChild(ps);
        const ttp = total - pp;
        p.innerText = "Total pay" + (total -pp)+ "   TK";
        const firstTotal = document.getElementById("totalppp").innerText = "Total Pay :  " + ttp; 
      
       
      
      
     }else{
         const p = ddd.innerText;
       
         const ps = document.createElement('p');
         ps.innerText ="Discount " +  "00" + " TK";
         container.appendChild(ps);
         const ttp = total;
         p.innerText = "Total pay" + (total)+ "   TK";
         const firstTotal = document.getElementById("totalppp").innerText = "Total Pay :  " + ttp; 
 
     }
 
 
   


});
var  total = 0;
document.getElementById("divfour").addEventListener('click',function(){
    var  taka = document.getElementById("fourtaka");
    var names = document.getElementById("name3");
    var namess = names.innerText;
   
    var takas = taka.innerText;
    total = parseFloat(total) + parseFloat(takas);

    var container = document.getElementById("container");
    var containers = document.getElementById("countainers");
   
    const li = document.createElement('p');
    li.innerText = namess;
    containers.appendChild(li)
    
    const count = container.childElementCount;
    li.innerText =count+1 + " " + namess;

  
    var p = document.createElement('p');
    p.innerText = takas + "   TK";

   /*  let li = document.createElement('li'); */
    container.appendChild(p);
    const firstTotal = document.getElementById("totalppp").innerText = total; 
  
   
    if(total>200){
        const p = ddd.innerText;
        const pp = (total *20)/100;
        const ps = document.createElement('p');
        ps.innerText ="Discount " +  pp + " TK";
        container.appendChild(ps);
        const ttp = total - pp;
        p.innerText = "Total pay" + (total -pp)+ "   TK";
        const firstTotal = document.getElementById("totalppp").innerText = "Total Pay :  " + ttp; 
      
       
      
      
     }else{
         const p = ddd.innerText;
       
         const ps = document.createElement('p');
         ps.innerText ="Discount " +  "00" + " TK";
         container.appendChild(ps);
         const ttp = total;
         p.innerText = "Total pay" + (total)+ "   TK";
         const firstTotal = document.getElementById("totalppp").innerText = "Total Pay :  " + ttp; 
 
     }
 
 
 

});

var  total = 0;
document.getElementById("divfive").addEventListener('click',function(){
    var  taka = document.getElementById("fivetaka");
    var names = document.getElementById("name4");
    var namess = names.innerText;
   
    var takas = taka.innerText;
    total = parseFloat(total) + parseFloat(takas);

    var container = document.getElementById("container");
    var containers = document.getElementById("countainers");
   
    const li = document.createElement('p');
    li.innerText = namess;
    containers.appendChild(li)
    
    const count = container.childElementCount;
    li.innerText =count+1 + " " + namess;

  
    var p = document.createElement('p');
    p.innerText = takas + "   TK";

   /*  let li = document.createElement('li'); */
    container.appendChild(p);
    const firstTotal = document.getElementById("totalppp").innerText = total; 
   
    if(total>200){
        const p = ddd.innerText;
        const pp = (total *20)/100;
        const ps = document.createElement('p');
        ps.innerText ="Discount " +  pp + " TK";
        container.appendChild(ps);
        const ttp = total - pp;
        p.innerText = "Total pay" + (total -pp)+ "   TK";
        const firstTotal = document.getElementById("totalppp").innerText = "Total Pay :  " + ttp; 
      
       
      
      
     }else{
         const p = ddd.innerText;
       
         const ps = document.createElement('p');
         ps.innerText ="Discount " +  "00" + " TK";
         container.appendChild(ps);
         const ttp = total;
         p.innerText = "Total pay" + (total)+ "   TK";
         const firstTotal = document.getElementById("totalppp").innerText = "Total Pay :  " + ttp; 
 
     }
 
 

});
var  total = 0;
document.getElementById("divsix").addEventListener('click',function(){
    var  taka = document.getElementById("sixtaka");
    var names = document.getElementById("name5");
    var namess = names.innerText;
   
    var takas = taka.innerText;
    total = parseFloat(total) + parseFloat(takas);



    var container = document.getElementById("container");
    var containers = document.getElementById("countainers");
   
    const li = document.createElement('p');
    li.innerText = namess;
    containers.appendChild(li)
    
    const count = container.childElementCount;
    li.innerText =count+1 + " " + namess;

  
    var p = document.createElement('p');
/*     p.innerText = takas + "   TK"; */


   /*  let li = document.createElement('li'); */
    container.appendChild(p);
    const firstTotal = document.getElementById("totalppp").innerText = total;  
    const rsss = p.innerText;
   

   
    if(total>200){
      
        const p = ddd.innerText;
        const pp = (total *20)/100;
        const ps = document.createElement('p');
        ps.innerText ="Discount " +  pp + " TK";
        container.appendChild(ps);
        const ttp = total - pp;
        p.innerText = "Total pay" + (total -pp)+ "   TK";
        const firstTotal = document.getElementById("totalppp").innerText = "Total Pay :  " + ttp; 

      
       
      
      
     }else{

        
   

         const ps = document.createElement('p');
         ps.innerText ="Discount " +  "00" + " TK";
         container.appendChild(ps);
         const ttp = total;
         p.innerText = "Total pay" + (total)+ "   TK";
         const firstTotal = document.getElementById("totalppp").innerText = "Total Pay :  " + ttp; 
 
     }
 
 

   
    


   
});

















