var emp={id:123,name:"jorgc",salary:50000};

var emp2=new Object();
emp2.id=123;
emp2.name="jorgc";
emp2.salary=50000;

function emp (id,name,salary){
    this.id=id;
    this.name=name;
    this.salary=salary;

    this.changeSalary=changeSalary;  
    function changeSalary(otherSalary){  
    this.salary=otherSalary;  
}

emp3 = new emp(123,"jorgcc",5000);
emp3.changeSalary(1000000);