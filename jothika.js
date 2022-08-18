bills=[bill1={a:1000,b:2000,c:1000},
    bill2={a:300,b:400,c:100,d:200},
    bill3={a:3000,b:100,d:200}]
    const averageFROMBILL=(amount)=>{
        l=[]
        for(i in amount){
            l.push(amount[i])
        }
        sum=0
        avgg=0
        len=l.length
        for(j of l){
            sum=sum+j
        }
           avgg=sum/len
     return avgg
    }
    const paidbyPEOPLE=(amount)=>{
        averagee=averageFROMBILL(amount)
        for(i in amount){
            amount[i]=amount[i]-averagee
        }
        return amount
    }
    for(i in bills){
        bills[i]=paidbyPEOPLE(bills[i])
    }                                                                          
    moneyto_SPLIT={}
    for(i=0;i<bills.length;i++){
        for(j in bills[i]){
            if(j in moneyto_SPLIT){
                moneyto_SPLIT[j]=moneyto_SPLIT[j]+bills[i][j]
            }
            else{
                moneyto_SPLIT[j]=bills[i][j]
            }
        }
    }
        
    get={}
    pay={}
    for(i in moneyto_SPLIT){
        if(moneyto_SPLIT[i]==0){
            console.log(i+" No Need to pay")
        }
        else if(moneyto_SPLIT[i]<0){
            pay[i]=moneyto_SPLIT[i]
        }
        else if(moneyto_SPLIT[i]>0){
            get[i]=moneyto_SPLIT[i]
        }
    }
    console.log("Amount have to get:",get)
    console.log("Amount have to pay:",pay)
    // Sorting the object in ascending order
    const sort_ASD=(Object)=>{
        l=[]
    for(i in Object){
        l.push(Object[i])
    }
    
    function sort(a,b){
        return a-b
    }
    l.sort(sort)
    persontopay={}
    for (e of l){
        for(i in Object){
            if(Object[i]==e){
                persontopay[i]=e
            }
        }
    }
    return(persontopay)
    }
    // Sorting the object in Descending order
    const sort_DES=(Object)=>{
        l=[]
    for(i in Object){
        l.push(Object[i])
    }
    
    function sort(a,b){
        return a-b
    }
    l.sort(sort)
    l.reverse()
    persontoget={}
    for (e of l){
        for(i in Object){
            if(Object[i]==e){
                persontoget[i]=e
            }
        }
    }
    return(persontoget)
    }
    
    balancetoget=sort_DES(get)
    balancetopay=sort_ASD(pay)
    console.log("Get:",balancetoget)
    console.log("Pay:",balancetopay)
    const money_SETTLED=(object)=>{
        paid={}
        for(i in object){
            if(object[i]!=0){
                paid[i]=object[i]
            }
        }
        return paid
    }
    
    for(g in balancetoget){
        for(p in balancetopay){
            if(balancetoget[g]>Math.abs(balancetopay[p])){
                console.log(p,"has to pay",balancetopay[p],"to",g)
                balancetoget[g]=(balancetoget[g])-(Math.abs(balancetopay[p]))
                balancetopay[p]=0
                balancetoget=money_SETTLED(balancetoget)
                balancetopay=money_SETTLED(balancetopay)
                
            }
            else if(balancetoget[g]<Math.abs(balancetopay[p])){
                console.log(p,"has to pay",balancetoget[g],"to",g)
                balancetopay[p]=((balancetoget[g]))-(Math.abs(balancetopay[p]))
                balancetoget[g]=0
                balancetoget=money_SETTLED(balancetoget)
                balancetopay=money_SETTLED(balancetopay)
                          
            }
            else if(balancetoget[g]==Math.abs(balancetopay[p])){
                console.log(p,"has to pay",balancetopay[p],"to",g)
                balancetoget[g]=0
                balancetopay[p]=0
                balancetoget=money_SETTLED(balancetoget)
                balancetopay=money_SETTLED(balancetopay)
            }
        }
    }