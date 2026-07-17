import { AfterViewInit, Component, ElementRef, Inject, OnDestroy, PLATFORM_ID, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';

export interface Album {
  title: string;
  artist: string;
  year: string;
  genre: string;
  img: string;
}

@Component({
  selector: 'app-index',
  imports: [NavbarComponent, CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements AfterViewInit, OnDestroy {

  albums: Album[] = [
    { title: '20 Años', artist: 'Luis Miguel', year: '1985', genre: 'Pop Latino', img: 'assets/20años.jpg' },
    { title: 'Afrodisíaco', artist: 'Rauw Alejandro', year: '2021', genre: 'Electronic / Reggaetón', img: 'assets/Afrodisiaco.jpg' },
    { title: 'ATP', artist: 'NSQK', year: '2024', genre: 'Synth Pop / Hypnagogic', img: 'assets/ATP.jpg' },
    { title: 'Barrio Fino', artist: 'Daddy Yankee', year: '2004', genre: 'Reggaetón', img: 'assets/BarrioFino.jpg' },
    { title: 'Busca Una Mujer', artist: 'Luis Miguel', year: '1988', genre: 'Pop Latino / Balada', img: 'assets/BuscaUnaMujer.jpg' },
    { title: 'Caifanes', artist: 'Caifanes', year: '1988', genre: 'Rock en Español', img: 'assets/Caifanes.jpg' },
    { title: 'Cocktail', artist: 'Belanova', year: '2003', genre: 'Electro / Indie', img: 'assets/cocktail.jpg' },
    { title: 'Contingente', artist: 'Junior H', year: '2022', genre: 'Urbano latino', img: 'assets/Contingente.jpg' },
    { title: 'Cosa Nuestra', artist: 'Rauw Alejandro', year: '2024', genre: 'Reggaetón / Salsa', img: 'assets/CosaNuestra.jpg' },
    { title: 'Currents', artist: 'Tame Impala', year: '2015', genre: 'Psychedelic Pop', img: 'assets/Currents.webp' },
    { title: 'DATA', artist: 'Tainy', year: '2023', genre: 'Electronic / Reggaetón', img: 'assets/DATA.jpg' },
    { title: 'Dawn FM', artist: 'The Weeknd', year: '2022', genre: 'Synth Pop / R&B', img: 'assets/DawnFM.jpg' },
    { title: 'Debí Tirar Más Fotos', artist: 'Bad Bunny', year: '2025', genre: 'Reggaetón / Pop', img: 'assets/DebiTirarMasFotos.jpg' },
    { title: 'Demon Days', artist: 'Gorillaz', year: '2005', genre: 'Alternative / Hip-Hop', img: 'assets/DemonDays.jpg' },
    { title: 'Éxodo', artist: 'Peso Pluma', year: '2024', genre: 'Regional Mexicana / Trap Latino', img: 'assets/Exodo.jpg' },
    { title: 'Flakk Daniels', artist: 'Rels B', year: '2018', genre: 'Pop / Urban', img: 'assets/FlakkDaniels.jpg' },
    { title: 'Génesis', artist: 'Peso Pluma', year: '2023', genre: 'Regional Mexicana / Trap Latino', img: 'assets/Genesis.jpg' },
    { title: 'GNX', artist: 'Kendrick Lamar', year: '2024', genre: 'Hip-Hop / Rap', img: 'assets/GNX.jpg' },
    { title: 'American Idiot', artist: 'Green Day', year: '2004', genre: 'Punk Rock', img: 'assets/GreenDay.jpg' },
    { title: 'Incómodo', artist: 'Tito Double P', year: '2024', genre: 'Urbano latino', img: 'assets/Incomodo.jpg' },
    { title: 'In the Zone', artist: 'Britney Spears', year: '2003', genre: 'Pop / Dance', img: 'assets/InTheZone.jpg' },
    { title: 'Last One Home', artist: 'Organic Audio', year: '1999', genre: 'Electronic', img: 'assets/LastOneHome.jpg' },
    { title: 'Mor No Le Temas a la Oscuridad', artist: 'Feid', year: '2023', genre: 'Reggaetón / Urban', img: 'assets/MORnltalO.jpg' },
    { title: 'MUSICA <3', artist: 'Junior H', year: '2020', genre: 'Regional Mexicana', img: 'assets/Musica.jpg' },
    { title: 'Nata Montana', artist: 'Natanael Cano', year: '2023', genre: 'Corridos Tumbados', img: 'assets/NataMontana.jpg' },
    { title: 'Nevermind', artist: 'Nirvana', year: '1991', genre: 'Grunge / Rock', img: 'assets/NeverMind.jpg' },
    { title: 'Collide with the Sky', artist: 'Pierce the Veil', year: '2012', genre: 'Post-Hardcore', img: 'assets/PiercetheVeil.jpg' },
    { title: 'Planet Her', artist: 'Doja Cat', year: '2021', genre: 'Pop / R&B', img: 'assets/PlanetHer.jpg' },
    { title: 'Playa Saturno', artist: 'Rauw Alejandro', year: '2023', genre: 'Reggaetón / Pop', img: 'assets/PlayaSaturno.jpg' },
    { title: 'Purpose', artist: 'Justin Bieber', year: '2015', genre: 'Pop / R&B', img: 'assets/Purpose.jpg' },
    { title: 'Sad Boyz 4 Life II', artist: 'Junior H', year: '2023', genre: 'Regional Mexicana', img: 'assets/SadBoyz4Life.jpg' },
    { title: 'Saturno', artist: 'Rauw Alejandro', year: '2022', genre: 'Reggaetón / Pop', img: 'assets/Saturno.jpg' },
    { title: 'Scarlet', artist: 'Doja Cat', year: '2023', genre: 'Hip-Hop / Pop', img: 'assets/Scarlet.jpg' },
    { title: 'SOS', artist: 'SZA', year: '2022', genre: 'R&B / Soul', img: 'assets/SOS.jpg' },
    { title: 'Soy Como Quiero Ser', artist: 'Luis Miguel', year: '1987', genre: 'Pop Latino / Balada', img: 'assets/SoyComoQuieroSer.jpg' },
    { title: 'Swimming', artist: 'Mac Miller', year: '2018', genre: 'Hip-Hop / R&B', img: 'assets/Swimming.jpg' },
    { title: 'The Best of Sade', artist: 'Sade', year: '1994', genre: 'Soul / Jazz', img: 'assets/TheBestOfSade.jpg' },
    { title: 'The Divine Feminine', artist: 'Mac Miller', year: '2016', genre: 'Hip-Hop / R&B', img: 'assets/TheDivineFeminine.jpg' },
    { title: 'The Last Don', artist: 'Don Omar', year: '2003', genre: 'Reggaetón', img: 'assets/TheLastDon.jpg' },
    { title: 'The Slow Rush', artist: 'Tame Impala', year: '2020', genre: 'Psychedelic Pop', img: 'assets/TheSlowRush.jpg' },
    { title: 'Ultraviolence', artist: 'Lana Del Rey', year: '2014', genre: 'Indie Pop / Dream Pop', img: 'assets/Ultraviolence.jpg' },
    { title: 'Un Verano Sin Ti', artist: 'Bad Bunny', year: '2022', genre: 'Reggaetón / Pop', img: 'assets/UnVeranoSinTi.jpg' },
    { title: 'Utopía', artist: 'Travis Scott', year: '2023', genre: 'Hip-Hop / Trap', img: 'assets/Utopia.jpg' },
    { title: 'Viceversa', artist: 'Rauw Alejandro', year: '2021', genre: 'Reggaetón / Pop', img: 'assets/Viceversa.jpg' },
    { title: 'Visions', artist: 'Grimes', year: '2012', genre: 'Synth Pop / Hypnagogic', img: 'assets/Visions.jpg' },
    { title: 'X 100PRE', artist: 'Bad Bunny', year: '2018', genre: 'Reggaetón / Trap', img: 'assets/x100pre.jpg' },
  ];

  panelOpen = false;
  expanded = false;
  currentIdx = 0;
  panelBg = '#0a0a0a';

  private fsHandler = () => {
    // Sincroniza el estado si el usuario sale con Esc o F11
    if (isPlatformBrowser(this.platformId)) {
      this.expanded = !!document.fullscreenElement;
    }
  };

  get current(): Album { return this.albums[this.currentIdx]; }
  get panelNum(): string {
    return String(this.currentIdx + 1).padStart(2, '0') + ' / ' + String(this.albums.length).padStart(2, '0');
  }

  @ViewChild('colorCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('panelEl') panelRef!: ElementRef<HTMLDivElement>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      document.addEventListener('fullscreenchange', this.fsHandler);
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      document.removeEventListener('fullscreenchange', this.fsHandler);
    }
    this.closePanel();
  }

  openPanel(idx: number): void {
    this.currentIdx = idx;
    this.panelOpen = true;

    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = 'hidden';
      this.extractColor(this.albums[idx].img);
    }
  }

  closePanel(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (document.fullscreenElement) {
        document.exitFullscreen().catch(() => { });
      }
      document.body.style.overflow = '';
    }
    this.panelOpen = false;
    this.expanded = false;
    this.panelBg = '#0a0a0a';
  }

  async toggleExpand(): Promise<void> {
    if (!isPlatformBrowser(this.platformId)) return;
    const el = this.panelRef?.nativeElement;
    if (!el) return;

    try {
      if (!document.fullscreenElement) {
        await el.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (err) {
      console.warn('Fullscreen no disponible:', err);
    }
  }

  prev(): void {
    this.openPanel((this.currentIdx - 1 + this.albums.length) % this.albums.length);
  }

  next(): void {
    this.openPanel((this.currentIdx + 1) % this.albums.length);
  }

  onKeydown(e: KeyboardEvent): void {
    if (!this.panelOpen) return;
    if (e.key === 'ArrowRight') this.next();
    if (e.key === 'ArrowLeft') this.prev();
    if (e.key === 'f' || e.key === 'F') this.toggleExpand();
    // Esc lo maneja el navegador cuando está en fullscreen
    if (e.key === 'Escape' && !document.fullscreenElement) this.closePanel();
  }

  private extractColor(src: string): void {
    const canvas = this.canvasRef?.nativeElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const S = 64;
    canvas.width = S;
    canvas.height = S;

    const img = new Image();
    img.crossOrigin = 'anonymous';

    img.onload = () => {
      ctx.drawImage(img, 0, 0, S, S);
      const data = ctx.getImageData(0, 0, S, S).data;

      const bins = new Map<number, { r: number; g: number; b: number; n: number }>();

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i], g = data[i + 1], b = data[i + 2];
        const max = Math.max(r, g, b), min = Math.min(r, g, b);
        const sat = max === 0 ? 0 : (max - min) / max;

        if (max < 24 || min > 240) continue;
        if (sat < 0.10 && max < 80) continue;

        const key = ((r >> 4) << 8) | ((g >> 4) << 4) | (b >> 4);
        const bin = bins.get(key);
        if (bin) { bin.r += r; bin.g += g; bin.b += b; bin.n++; }
        else bins.set(key, { r, g, b, n: 1 });
      }

      const candidates = [...bins.values()]
        .map(v => {
          const r = v.r / v.n, g = v.g / v.n, b = v.b / v.n;
          const hsl = this.toHsl(r, g, b);
          return { ...hsl, score: v.n * (0.4 + hsl.s * 1.2) };
        })
        .sort((a, b) => b.score - a.score);

      // ← Diversidad de matiz: descarta colores muy parecidos a los ya elegidos
      const palette: { h: number; s: number }[] = [];
      const MIN_HUE_DIST = 28;

      for (const c of candidates) {
        if (palette.length >= 4) break;
        const tooClose = palette.some(p => {
          const d = Math.abs(p.h - c.h);
          return Math.min(d, 360 - d) < MIN_HUE_DIST;
        });
        if (!tooClose) palette.push({ h: c.h, s: c.s });
      }

      // Rellena si la portada es monocromática: rota el matiz manualmente
      while (palette.length < 4 && palette.length > 0) {
        const base = palette[0];
        palette.push({ h: (base.h + 40 * palette.length) % 360, s: base.s * 0.8 });
      }

      if (!palette.length) { this.panelBg = '#0a0a0a'; return; }

      const c = (i: number, l: number, a: number) => {
        const p = palette[i % palette.length];
        const s = Math.min(0.85, p.s * 1.1 + 0.15);
        return `hsl(${p.h.toFixed(0)} ${(s * 100).toFixed(0)}% ${(l * 100).toFixed(0)}% / ${a})`;
      };

      this.panelBg = [
        `radial-gradient(circle at 18% 20%, ${c(0, 0.34, 0.95)} 0%, transparent 55%)`,
        `radial-gradient(circle at 82% 25%, ${c(1, 0.26, 0.85)} 0%, transparent 52%)`,
        `radial-gradient(circle at 25% 82%, ${c(2, 0.22, 0.80)} 0%, transparent 50%)`,
        `radial-gradient(circle at 85% 78%, ${c(3, 0.28, 0.75)} 0%, transparent 52%)`,
        `linear-gradient(160deg, ${c(0, 0.14, 1)} 0%, ${c(1, 0.09, 1)} 100%)`
      ].join(', ');
    };

    img.onerror = () => { this.panelBg = '#0a0a0a'; };
    img.src = src;
  }

  private toHsl(r: number, g: number, b: number): { h: number; s: number; l: number } {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    const l = (max + min) / 2;
    const d = max - min;
    let h = 0;
    const s = d === 0 ? 0 : d / (1 - Math.abs(2 * l - 1));

    if (d !== 0) {
      if (max === r) h = ((g - b) / d) % 6;
      else if (max === g) h = (b - r) / d + 2;
      else h = (r - g) / d + 4;
      h *= 60;
      if (h < 0) h += 360;
    }
    return { h, s, l };
  }

  /** Sube la saturación y fija la luminosidad → color vivo tipo Apple Music */
  private punch(r: number, g: number, b: number, lightness: number): string {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0;
    const l = (max + min) / 2;
    const d = max - min;
    let s = d === 0 ? 0 : d / (1 - Math.abs(2 * l - 1));

    if (d !== 0) {
      if (max === r) h = ((g - b) / d) % 6;
      else if (max === g) h = (b - r) / d + 2;
      else h = (r - g) / d + 4;
      h *= 60;
      if (h < 0) h += 360;
    }

    s = Math.min(1, s * 1.75 + 0.25);   // ← realce de saturación
    return `hsl(${h.toFixed(0)} ${(s * 100).toFixed(0)}% ${(lightness * 100).toFixed(0)}%)`;
  }
}