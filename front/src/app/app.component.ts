import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { SplashScreen } from '@capacitor/splash-screen';

const ATRASO_LOGO_MS = 2000;
// tela verde sozinha por esse tempo antes da marca (rosa + "ulbra gym")
// começar a aparecer
const DURACAO_MINIMA_MS = 3100;
// tempo total da splash (verde sozinho + marca aparecendo + um instante
// com a marca já visível) antes de começar a sair
const DURACAO_SAIDA_MS = 400;
// tempo do fade de saída, precisa bater com a transição no CSS

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [NgIf, IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {

  mostrarSplash = true;
  logoVisivel = false;
  saindo = false;

  ngOnInit() {
    setTimeout(() => {
      this.logoVisivel = true;
    }, ATRASO_LOGO_MS);

    setTimeout(() => {
      this.saindo = true;
      SplashScreen.hide().catch(() => {});
      // no navegador (fora do app nativo) essa chamada não faz nada —
      // só tem efeito quando roda dentro do app instalado via Capacitor

      setTimeout(() => {
        this.mostrarSplash = false;
      }, DURACAO_SAIDA_MS);
    }, DURACAO_MINIMA_MS);
  }
}
