import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'br.com.extremus.academia',
  appName: 'Extremus Academia',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      // fica visível até o app chamar SplashScreen.hide() manualmente —
      // isso dá tempo do AppComponent decidir quando a splash "web"
      // (com a mesma marca) assume, sem piscar entre a nativa e a nossa
      launchAutoHide: false,
      backgroundColor: '#0a2f6b'
    }
  }
};

export default config;
