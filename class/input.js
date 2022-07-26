export class Input{
    constructor(label,inputType,placeholder){
        this.label = label;
        this.placeholder = placeholder;
        this.inputType = inputType;
    }

   render(){
    const wrapper = document.createElement('div');
    wrapper.classList.add('input-group','mb-3','border','border-2','border-secondary','bg-secondary');
    const label = document.createElement('label');
    label.classList.add('form-label','pt-2','px-2','fs-5');
    label.innerHTML = this.label;
    
   const input = document.createElement('input');
    input.classList.add('form-control','border-2','border-start','border-end-0','border-top-0','border-bottom-0','border-secondary');
    input.setAttribute('type',this.inputType);
    input.setAttribute('placeholder',this.placeholder);
    input.setAttribute('required','');
    wrapper.append(label,input);
    return wrapper;
    }
}