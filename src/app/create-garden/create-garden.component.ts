import { Component } from '@angular/core';

@Component({
    selector: 'create-garden',
    templateUrl: './create-garden.component.html',
    styleUrl: './create-garden.component.css'
})

export class CreateGardenComponent {
    newPost = '';
    enteredValue = '';
    
    onAddPost() {
        this.newPost = this.enteredValue;
    }
}