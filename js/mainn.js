// 9. Input : [3,4,5,6]
//     Output : [3,5,7,9]
// How to achieve this output?


let a=[3,4,5,6]
let b=[]
let c

        for(i=0;i<a.length;++i){
         c=a[i]+i;
         b.push(c)      
        }
        
console.log(b)

// 11.const price = [35,66,234,56,88,90,22]
// How to find minimum value?


let d=[50,70,20,90,10]
for(i=0;i<a.length;i++){
    for(j=i+1;j<d.length;j++){
        if(d[i]>d[j]){
            let temp;
            temp=d[j];
            d[j]=d[i];
            d[i]=temp;
    
        }
    }
   
}
console.log(d)
console.log(d[0])


// 13.Output : ["Naresh","Prem"];
// Write a code ....

var employee =[{
        name : "Karuppasamy",
        age : 24,
        Salary : 25000,
        level : "junior"
        },
        {
        name : "Samy",
        age : 21,
        Salary : 20000,
        level : "junior"
        },{
        name : "Kaviya",
        age : 22,
        Salary : 18000,
        level : "junior"
        },{
        name : "Naresh",
        age : 45,
        Salary : 100000,
        level : "senior"
        },{
        name : "Prem",
        age : 24,
        Salary : 50000,
        level : "senior"
        }];
        
  let emp=employee.filter((val,ind)=>{
        return val.level=="senior";
  })
  
  console.log(emp)
let aa=[]
aa.push(emp[0].name,emp[1].name)
console.log(aa)

       
let rem = 0
rem++;
rem++;
console.log(rem);

var num = 0;
console.log(num++);
console.log(num++);
console.log(++num);
console.log(num);


let obj1 = {
        "name" : "Monisha"
        }
        let obj = Object.assign({},obj1);
        obj1.position = "QAE"
        console.log(obj,obj1); 



// 17. Solve the armstrong logic in async/await
       

// let n = parseInt(prompt('Enter the number '));
  let n=153   
  let p=n;
        let f=n;
        
        function arm(){
                return new Promise((res,rej) => {
                        let z=0;
                        while (n>0)
                        {
                                let rem = n % 10;
                                n= (n-rem)/10;
                                z++
                
                        }
                        res(z)
                })
        }
                function arm2(l){
                        return new Promise((i,j) => {
                                let sum=0;
                
                while (f>0)
            {
                let rem1 = f % 10;
                        f= (f-rem1)/10;
                        sum=sum+(rem1**l)
        
            }
                i(sum)
        })
                }
        function check(m){
                return new Promise((u,v) =>{
                        if(m==p){
                                u("given number is armstrong")
                                
                 }
                        else{
                                v("not armstrong")
                        }
        })
        
        }
        
        async function armstrong(){
                try{
                        let l=await arm();
                        let m=await arm2(l);
                        let q=await check(m)
                        console.log(q)
                }
                catch(a){
                        console.log("error",a)
                }
        }
        armstrong()


