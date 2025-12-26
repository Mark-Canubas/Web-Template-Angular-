import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class FormValidators {
  static username(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return { required: true };
      }
      if (control.value.length < 2) {
        return {
          minLength: { requiredLength: 2, actualLength: control.value.length },
        };
      }
      return null;
    };
  }

  static password(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return { required: true };
      }
      if (control.value.length < 2) {
        return {
          minLength: { requiredLength: 2, actualLength: control.value.length },
        };
      }
      return null;
    };
  }
}
