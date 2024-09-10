import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  form: FormGroup
  formData?: Data;
  title = 'ngReactiveFormsForm';
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      animal: ['', [Validators.required, this.monValidatorAnimal]],
      infoAnimal: ['', [Validators.required, this.monValidatorInfoAnimal]]
    }, { validators: this.formValidator })



  }
  ngOnInit(): void {
    // À chaque fois que les valeurs changent, notre propriétés formData sera mise à jour
    this.form.valueChanges.subscribe(() => {
      this.formData = this.form.value;
    });
  }


  monValidatorAnimal(form: AbstractControl): ValidationErrors | null {
    // On récupère les valeurs de nos champs textes
    const animal = form.value;
    if (!animal) {
      return null;
    }
    // On fait notre validation
    let formValid = animal == "chat" ? true : false;
    // Si le formulaire est invalide on retourne l'erreur
    // Si le formulaire est valide on retourne null  
    return !formValid ? { chat: true } : null;
  }

  monValidatorInfoAnimal(form: AbstractControl): ValidationErrors | null {
    const infoAnimal = form.value;
    if (!infoAnimal) {
      return null;
    }
    // On fait notre validation
    let formValid = infoAnimal == "oui" ? true : false;
    return !formValid ? { chatInfo: true } : null;
  }

  formValidator(form: AbstractControl): ValidationErrors | null {
    const animal = form.get('animal')?.value;
    const infoAnimal = form.get('infoAnimal')?.value;
    if (!infoAnimal || !animal) {
      return null;
    }
    // On fait notre validation

    let formValid = infoAnimal == "oui" && animal == "chat" ? true : false;

    return !formValid ? { pasBon: true } : null;
  }
}



interface Data {
  email?: string | null;
  name?: string | null;
}







