/*Name this external file gallery.js*/
function upDate(previewPic){
    /* In this function you should 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image*/
       let src=previewPic.getAttribute("src")
       document.getElementById("image").style.backgroundImage="url("+src+")"  
     /*  
       2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
       */
       var alttext=previewPic.getAttribute("alt")
       let texte=document.getElementById("image").innerHTML=alttext

      
       }
   
       function unDo(){
        /* In this function you should 
       1) Update the url for the background image of the div with the id = "image" 
       back to the orginal-image.  You can use the css code to see what that original URL was
       */
      let image=document.getElementById("image").style.backgroundImage=`url("")`
       /*
       2) Change the text  of the div with the id = "image" 
       back to the original text.  You can use the html code to see what that original text was
       */
       let texte=document.getElementById("image").innerHTML="Hover over an image below to display here."
           
       }
       function ajoutTab(){
        console.log("event triggerd")
        let tab = document.getElementsByTagName("img");
        for(let i=0;i<tab.length;i++){
          tab[i].setAttribute("tabindex", "0");
        }
       }
       document.addEventListener("DOMContentLoaded",ajoutTab)