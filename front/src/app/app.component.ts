import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { SplashScreen } from '@capacitor/splash-screen';

const DURACAO_MINIMA_MS = 1300;
// tempo mínimo que a marca fica visível, mesmo se a checagem de sessão for
// instantânea — é isso que dá a sensação "iFood" (marca sempre com o mesmo
// ritmo, nunca pisca rápido demais nem trava)
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
    // deixa o navegador pintar o quadro antes de iniciar a animação, senão
    // o CSS de entrada às vezes não dispara (elemento já nasce "visível")
    requestAnimationFrame(() => requestAnimationFrame(() => {
      this.logoVisivel = true;
    }));

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
