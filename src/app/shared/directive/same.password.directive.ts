import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function samePassword(): ValidatorFn {
    //Check is password same
    return (control: AbstractControl): ValidationErrors | null => {
        const password = control.get('password');
        const confirmPassword = control.get('confirmPassword');

        return password && confirmPassword
        && password.value === confirmPassword.value ? null : { isNotSame: true };
    }
}