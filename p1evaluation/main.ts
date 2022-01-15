interface validationConfig{
    //one interface for an object
    [property:string]:{
        [validationProperty:string]:string[];
       
    };
}
const validationObj: validationConfig={}

function Required(target:any,name:string){
    console.log(target)
    const className = target.constructor.name;
    //retreving all properties in an array
      validationObj[className]={
          ...validationObj[className],[name]:['required'],//spread operator to append data
      };
      

      console.log(validationObj);
}

function validate(obj:any){
    let validatorName=validationObj[obj.constructor.name];

    if(!validatorName){
        return true;
    }
    let isValid =  true;
    for(const prop in validatorName){
        for(const validator of validatorName[prop]){
            console.log(validator);
        switch(validator){
            case 'required':
                isValid = isValid && !!obj[prop]
                break;
            }
        }
        
    }
    return isValid;
}
class Filter{

    @Required
    plan:string; 
    constructor(_plan:string){
        this.plan=_plan;
    }
}
const form = document.querySelector('form')!;
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    //get all elements
    const planE1 = document.getElementById('plan_search') as HTMLInputElement;
    const plan = planE1.value;

    const courseObj = new Filter(plan);
    if(!validate(courseObj)){
        alert('Please enter something first to searchss');
        return;
    }
    console.log(courseObj)

})