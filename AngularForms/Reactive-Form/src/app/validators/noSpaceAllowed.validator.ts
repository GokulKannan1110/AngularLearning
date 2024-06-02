import { AbstractControl, FormControl } from "@angular/forms";

// const noSpaceAllowed = (control: FormControl) => {
//     if(control != null && control.value.indexOf(' ') != -1){
//         return {noSpaceAllowed: true};
//     }
//     return null;
// }

export class CustomValidators{
    static noSpaceAllowed(control: FormControl){
        if(control != null && control.value != null && control.value?.indexOf(' ') != -1){
            return {noSpaceAllowed: true};
        }
        return null;
    }

    static checkUserName(control: AbstractControl): Promise<any>{
        return usernameAllowed(control.value);
    }
}

function usernameAllowed(username: string) {
    const takenUsernames = ['jhonsmith', 'gokulkannan'];

    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            console.log(username);
            console.log('inside Set timeout');
            if(takenUsernames.includes(username))
            {
                console.log('includes');
                resolve({checkUserName: true});
            }
            else{
                console.log('not includes');
                resolve(null);
            }
        }, 5000);
    })
} 