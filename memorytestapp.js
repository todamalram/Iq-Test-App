//application
function memory_test()
{
    var str = "<table border =2 width = 500 bgcolor= white >";
    var small=["raj","ram","rohit","vaishnavi","mahi","snehal","krutika","gayatri","adim","akash"];
    var medium=["raj","ram","rohit","vaishnavi","mahi","snehal","krutika","gayatri","adim","akash","arati","anushka"];
    var large=["raj","ram","rohit","vaishnavi","mahi","snehal","krutika","gayatri","adim","akash","arati","anushka","punam","prashnat","meera"];
    var count=1;
    var ans=0;
    var r="";
    var p="";
    var s="";
    var a=new Array(); 
    if(document.getElementById("small").checked)
    {
        alert(""+small);
        for (var i=0;i<10;i++)
        {
            a.push(prompt("Enter the Array element"));
        }
        for (var i=0;i<10;i++)
        {
            for (var j=i+1;j<10;j++)
            {
                if(a[i]==a[j])                     
                {
                    count++; 
                    if(count>=2)
                    {
                        a[j]=0;
                    }
                }
            }
        }
        for (var i=0;i<10;i++)
        {
            for (var j=0;j<10;j++)
            {
                if(a[i]!=0 && a[i]==small[j])
                {
                    ans++;
                    r=r+a[i]+",";
                }
            }      
        }
        str=str+"<tr><td>Original Words</td><td>"+small+"</td></tr>";
        str=str+"<tr><td>Your Words</td><td>"+r+"</td></tr>";
        var percent=(ans/10)*100;
        if(percent>70)
        {
            GRADE=("GRADE A+"+percent);
        }
        if(percent>=60 && percent<70)
        {
            GRADE=("GRADE A"+percent);
        }
        if(percent>=50 && percent<60)
        {
            GRADE=("GRADE B"+percent);
        }
        if(percent>=40 && percent<50)
        {
            GRADE=("GRADE C"+percent);
        }
        if(percent>=30 && percent<40)
        {
            GRADE=("GRADE D"+percent);
        }
        if(percent<30)
        {
            GRADE=("fail");
        }
        str = str+"<tr><td bgcolor = green>Result</td><td bgcolor = green>"+GRADE+"</td></tr>";
        document.getElementById("ans").innerHTML = str;
    }
    if(document.getElementById("medium").checked)
    {
        alert(""+medium);
        for (var i=0;i<12;i++)
        {
            a.push(prompt("Enter the Array element"));
        }
        for (var i=0;i<12;i++)
        {
            for (var j=i+1;j<12;j++)
            {
                if(a[i]==a[j])                     
                {
                    count++; 
                    if(count>=2)
                    {
                        a[j]=0;
                    }
                }
            }
        }
        for (var i=0;i<12;i++)
        {
             for (var j=0;j<12;j++)
            {
                if(a[i]!=0 && a[i]==medium[j])
                {
                    ans++;
                    p=p+a[i]+",";
                }
            }      
        } 
        str=str+"<tr><td>Original Data</td><td>"+medium+"</td></tr>";
        str=str+"<tr><td>Your  Data</td><td>"+p+"</td></tr>";
        var percent=(ans/12)*100;
        if(percent>70)
        {
            GRADE=("GRADE A+"+percent);
        }
        if(percent>=60 && percent<70)
        {
            GRADE=("GRADE A"+percent);
        }
        if(percent>=50 && percent<60)
        {
            GRADE=("GRADE B"+percent);
        }
        if(percent>=40 && percent<50)
        {
            GRADE=("GRADE C"+percent);
        }
        if(percent>=30 && percent<40)
        {
            GRADE=(" GRADE D"+percent);
        }
        if(percent<30)
        {
            GRADE=("fail");
        }
        str = str+"<tr><td bgcolor = green>Result</td><td bgcolor = green>"+GRADE+"</td></tr>";
        document.getElementById("ans").innerHTML = str;
    }
    if(document.getElementById("large").checked)
    {
        alert(""+large);
        for (var i=0;i<15;i++)
        {
            a.push(prompt("Enter the Array element"));
        }
        for (var i=0;i<15;i++)
        {
            for (var j=i+1;j<15;j++)
            {
                if(a[i]==a[j])                     
                {
                    count++; 
                    if(count>=2)
                    {
                        a[j]=0;
                    }
                }
            }
        }
        for (var i=0;i<15;i++)
        {
             for (var j=0;j<15;j++)
            {
                if(a[i]!=0 && a[i]==large[j])
                {
                    ans++;
                    s=s+a[i]+",";
                }
            }      
        } 
        str=str+"<tr><td>original Words</td><td>"+large+"</td></tr>";
        str=str+"<tr><td>Your Words</td><td>"+s+"</td></tr>";
        var percent=(ans/15)*100;
        if(percent>70)
        {
            GRADE=("GRADE A+"+percent);
        }
        if(percent>=60 && percent<70)
        {
            GRADE=("GRADE A"+percent);
        }
        if(percent>=50 && percent<60)
        {
            GRADE=("GRADE B"+percent);
        }
        if(percent>=40 && percent<50)
        {
            GRADE=("GRADE C"+percent);
        }
        if(percent>=30 && percent<40)
        {
            GRADE=(" GRADE D"+percent);
        }
        if(percent<30)
        {
            GRADE=("fail");
        }
        str = str+"<tr><td bgcolor = green>Result</td><td bgcolor = green>"+GRADE+"</td></tr>";
        document.getElementById("ans").innerHTML = str;
    }
}