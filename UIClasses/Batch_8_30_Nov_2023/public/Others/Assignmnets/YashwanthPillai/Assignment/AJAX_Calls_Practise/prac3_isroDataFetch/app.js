




var getData = () =>{
    axios.get("https://isro.vercel.app/api/spacecrafts").then((response)=>{
        console.log(response)
        renderDetails(response.data.spacecrafts)
        $(".tables").show()
        
    
    }).catch((error)=>{
    
    })
}


var renderDetails = (list)=>{
    list.forEach((item,index)=>{
        var tr1 = $("<tr/>")
        var td1 = $("<td/>").text(item.id)
        tr1.append(td1)
        var td2 = $("<td/>").text(item.name)
        tr1.append(td2)
        
        $("tbody").append(tr1)
    })
}






// https://isro.vercel.app/api/spacecrafts