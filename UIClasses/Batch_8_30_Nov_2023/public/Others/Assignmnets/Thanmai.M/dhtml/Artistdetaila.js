var ArtistData = {
    //     getpf() {
    //         if(Asal>=200000){
    //             pf=(Asal*14)/100
    //         }else if(Asal<= 150000){
    //             pf=(Asal*10)/100
    //         }else if(Asal<=100000){
    //             pf= (Asal*5)/100
    //         }else (Asal<=50000){
    //             pf=0
    //         }
    
        
        
        
        displayArtistDetails (){
    
    
            console.log("Artist name is " + this.Aname);
            console.log("age " + this.Aage);
            console.log("gender " + this.Agender);
            console.log("Artist department " + this.Adept);
            console.log(" id " + this.Aid);
            console.log("Artist salary" + this.Asal);
    
            document.querySelector("#Aname").innerText =  this.Aname ;
            document.querySelector("#Aage").innerHTML = this.Aage;
            document.querySelector("#Agender").innerText = this.Agender;
            document.querySelector("#Adept").innerText = this.Adept;
            document.querySelector("#Asal").innerText = this.Asal;
        }
    }
    
    
    var readUserData = () => {
        ArtistData.name = document.querySelector("#Aname").value;
        ArtistData.age = document.querySelector("#Aage").value;
        ArtistData.Gender = document.querySelector("input[name=gender]:checked").value;
        ArtistData.dept = document.querySelector("#Adept").value;
        ArtistData.id = document.querySelector("#Aid").value;
        ArtistData.sal = document.querySelector("#Asal").value; 
       
    
    }
    console.log(ArtistDetails);
        ArtistData.displayArtistDetails();
        document.querySelector(".ArtistDetails").style.display = 'block';
        console.log(displayreadUserData)
    