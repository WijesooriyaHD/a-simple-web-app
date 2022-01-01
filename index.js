let count=0;

function dataObject(){

    this.date=null;
    this.time=null;
    this.amount=null;
    
}

let dataArray=[];

let currentValue=document.getElementById("val");

function increment(){

    count=count+1;
    currentValue.innerText=count;
    console.log(currentValue);
}

function decrement(){

    count=count-1;
    currentValue.innerText=count;
    console.log(currentValue);

}

function setZero(){

    count=0;
    
    currentValue.innerText=count;
    console.log(currentValue);
    //console.log("cl");
}

function saveData(){

    let item=new dataObject();
    item.amount=currentValue;
    console.log("amount : ",item.amount);

    let currentDate=new Date();

    let hour=currentDate.getHours();
    let min=currentDate.getMinutes();
    let sec=currentDate.getSeconds();

    item.time=hour+ ":"+min+":"+sec;
    console.log("time "+item.time);
    

    
    let month=currentDate.getMonth()+1;
    item.date=currentDate.getDate()+"/"+month+"/"+currentDate.getFullYear();
    console.log("date : " +item.date);

   let i=dataArray.length;
   console.log(" size : "+i);

   dataArray[i]=item;

   //console.log("array : "+);



}

/*

function showDetails(){

    currentValue.innerText=" ";

    for(let i=0;i<dataArray.length;i++){

        currentValue.innerText=currentValue.innerText+" "+ dataArray[i].amount;
    }
}

*/