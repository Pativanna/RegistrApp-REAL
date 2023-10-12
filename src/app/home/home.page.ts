import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  correo: string = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Obtener el correo pasado en la navegación desde el estado
    const correoState = this.route.snapshot.paramMap.get('correo');

    if (correoState) {
      this.correo = correoState;
    }
  }
}
