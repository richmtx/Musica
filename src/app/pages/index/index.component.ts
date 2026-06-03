import {
  AfterViewInit, Component, ElementRef,
  Inject, OnDestroy, PLATFORM_ID, ViewChild
} from '@angular/core';
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
    { title: '20 años', artist: 'Luis Miguel', year: '1985', genre: 'Reggaetón / Pop', img: 'assets/20años.jpg' },
    { title: 'Afrodisiaco', artist: 'Rauw Alejandro', year: '2021', genre: 'Electronic / Reggaetón', img: 'assets/Afrodisiaco.jpg' },
    { title: 'ATP', artist: 'NSQK', year: '2023', genre: 'Synth Pop / Hypnagogic', img: 'assets/ATP.jpg' },
    { title: 'Playa Saturno', artist: 'Rauw Alejandro', year: '2023', genre: 'Reggaetón / Pop', img: 'assets/BarrioFino.jpg' },
    { title: 'DATA', artist: 'Tainy', year: '2022', genre: 'Electronic / Reggaetón', img: 'assets/BuscaUnaMujer.jpg' },
    { title: 'Visions', artist: 'Grimes', year: '2012', genre: 'Synth Pop / Hypnagogic', img: 'assets/Caifanes.jpg' },
    { title: 'Playa Saturno', artist: 'Rauw Alejandro', year: '2023', genre: 'Reggaetón / Pop', img: 'assets/cocktail.jpg' },
    { title: 'DATA', artist: 'Tainy', year: '2022', genre: 'Electronic / Reggaetón', img: 'assets/Contingente.jpg' },
    { title: 'Visions', artist: 'Grimes', year: '2012', genre: 'Synth Pop / Hypnagogic', img: 'assets/CosaNuestra.jpg' },
    { title: 'Playa Saturno', artist: 'Rauw Alejandro', year: '2023', genre: 'Reggaetón / Pop', img: 'assets/Currents.webp' },
    { title: 'DATA', artist: 'Tainy', year: '2022', genre: 'Electronic / Reggaetón', img: 'assets/DATA.jpg' },
    { title: 'Visions', artist: 'Grimes', year: '2012', genre: 'Synth Pop / Hypnagogic', img: 'assets/DawnFM.jpg' },
    { title: 'Playa Saturno', artist: 'Rauw Alejandro', year: '2023', genre: 'Reggaetón / Pop', img: 'assets/DebiTirarMasFotos.jpg' },
    { title: 'DATA', artist: 'Tainy', year: '2022', genre: 'Electronic / Reggaetón', img: 'assets/DemonDays.jpg' },
    { title: 'Visions', artist: 'Grimes', year: '2012', genre: 'Synth Pop / Hypnagogic', img: 'assets/Exodo.jpg' },
    { title: 'Playa Saturno', artist: 'Rauw Alejandro', year: '2023', genre: 'Reggaetón / Pop', img: 'assets/FlakkDaniels.jpg' },
    { title: 'DATA', artist: 'Tainy', year: '2022', genre: 'Electronic / Reggaetón', img: 'assets/Genesis.jpg' },
    { title: 'Visions', artist: 'Grimes', year: '2012', genre: 'Synth Pop / Hypnagogic', img: 'assets/GNX.jpg' },
    { title: 'Playa Saturno', artist: 'Rauw Alejandro', year: '2023', genre: 'Reggaetón / Pop', img: 'assets/GreenDay.jpg' },
    { title: 'DATA', artist: 'Tainy', year: '2022', genre: 'Electronic / Reggaetón', img: 'assets/Incomodo.jpg' },
    { title: 'Visions', artist: 'Grimes', year: '2012', genre: 'Synth Pop / Hypnagogic', img: 'assets/InTheZone.jpg' },
    { title: 'Playa Saturno', artist: 'Rauw Alejandro', year: '2023', genre: 'Reggaetón / Pop', img: 'assets/LastOneHome.jpg' },
    { title: 'DATA', artist: 'Tainy', year: '2022', genre: 'Electronic / Reggaetón', img: 'assets/MORnltalO.jpg' },
    { title: 'Visions', artist: 'Grimes', year: '2012', genre: 'Synth Pop / Hypnagogic', img: 'assets/Musica.jpg' },
    { title: 'Playa Saturno', artist: 'Rauw Alejandro', year: '2023', genre: 'Reggaetón / Pop', img: 'assets/NataMontana.jpg' },
    { title: 'DATA', artist: 'Tainy', year: '2022', genre: 'Electronic / Reggaetón', img: 'assets/NeverMind.jpg' },
    { title: 'Visions', artist: 'Grimes', year: '2012', genre: 'Synth Pop / Hypnagogic', img: 'assets/PiercetheVeil.jpg' },
    { title: 'Playa Saturno', artist: 'Rauw Alejandro', year: '2023', genre: 'Reggaetón / Pop', img: 'assets/PlanetHer.jpg' },
    { title: 'DATA', artist: 'Tainy', year: '2022', genre: 'Electronic / Reggaetón', img: 'assets/PlayaSaturno.jpg' },
    { title: 'Visions', artist: 'Grimes', year: '2012', genre: 'Synth Pop / Hypnagogic', img: 'assets/Purpose.jpg' },
    { title: 'Playa Saturno', artist: 'Rauw Alejandro', year: '2023', genre: 'Reggaetón / Pop', img: 'assets/SadBoyz4Life.jpg' },
    { title: 'DATA', artist: 'Tainy', year: '2022', genre: 'Electronic / Reggaetón', img: 'assets/Saturno.jpg' },
    { title: 'Visions', artist: 'Grimes', year: '2012', genre: 'Synth Pop / Hypnagogic', img: 'assets/Scarlet.jpg' },
    { title: 'Playa Saturno', artist: 'Rauw Alejandro', year: '2023', genre: 'Reggaetón / Pop', img: 'assets/SOS.jpg' },
    { title: 'DATA', artist: 'Tainy', year: '2022', genre: 'Electronic / Reggaetón', img: 'assets/SoyComoQuieroSer.jpg' },
    { title: 'Visions', artist: 'Grimes', year: '2012', genre: 'Synth Pop / Hypnagogic', img: 'assets/Swimming.jpg' },
    { title: 'Playa Saturno', artist: 'Rauw Alejandro', year: '2023', genre: 'Reggaetón / Pop', img: 'assets/TheBestOfSade.jpg' },
    { title: 'DATA', artist: 'Tainy', year: '2022', genre: 'Electronic / Reggaetón', img: 'assets/TheDivineFeminine.jpg' },
    { title: 'Visions', artist: 'Grimes', year: '2012', genre: 'Synth Pop / Hypnagogic', img: 'assets/TheLastDon.jpg' },
    { title: 'Playa Saturno', artist: 'Rauw Alejandro', year: '2023', genre: 'Reggaetón / Pop', img: 'assets/TheSlowRush.jpg' },
    { title: 'DATA', artist: 'Tainy', year: '2022', genre: 'Electronic / Reggaetón', img: 'assets/Ultraviolence.jpg' },
    { title: 'Visions', artist: 'Grimes', year: '2012', genre: 'Synth Pop / Hypnagogic', img: 'assets/UnVeranoSinTi.jpg' },
    { title: 'Playa Saturno', artist: 'Rauw Alejandro', year: '2023', genre: 'Reggaetón / Pop', img: 'assets/Utopia.jpg' },
    { title: 'DATA', artist: 'Tainy', year: '2022', genre: 'Electronic / Reggaetón', img: 'assets/Viceversa.jpg' },
    { title: 'Visions', artist: 'Grimes', year: '2012', genre: 'Synth Pop / Hypnagogic', img: 'assets/Visions.jpg' },
    { title: 'Playa Saturno', artist: 'Rauw Alejandro', year: '2023', genre: 'Reggaetón / Pop', img: 'assets/x100pre.jpg' },
  ];

  panelOpen = false;
  currentIdx = 0;
  panelBg = '#0a0a0a';

  get current(): Album { return this.albums[this.currentIdx]; }
  get panelNum(): string {
    return String(this.currentIdx + 1).padStart(2, '0') + ' / ' + String(this.albums.length).padStart(2, '0');
  }

  @ViewChild('colorCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit(): void { }

  ngOnDestroy(): void {
    this.closePanel();
  }

  openPanel(idx: number): void {
    this.currentIdx = idx;
    this.panelOpen = true;

    // ✅ Guard agregado aquí también
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = 'hidden';
      this.extractColor(this.albums[idx].img);
    }
  }

  closePanel(): void {
    this.panelOpen = false;
    this.panelBg = '#0a0a0a';

    // ✅ Guard agregado aquí
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = '';
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
    if (e.key === 'Escape') this.closePanel();
  }

  private extractColor(src: string): void {
    const canvas = this.canvasRef?.nativeElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 50;
    canvas.height = 50;

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      ctx.drawImage(img, 0, 0, 50, 50);
      const data = ctx.getImageData(0, 0, 50, 50).data;
      let r = 0, g = 0, b = 0, count = 0;
      for (let i = 0; i < data.length; i += 16) {
        r += data[i]; g += data[i + 1]; b += data[i + 2]; count++;
      }
      r = Math.round(r / count);
      g = Math.round(g / count);
      b = Math.round(b / count);

      const dark = `rgb(${Math.round(r * .22)},${Math.round(g * .22)},${Math.round(b * .22)})`;
      const mid = `rgb(${Math.round(r * .42)},${Math.round(g * .42)},${Math.round(b * .42)})`;
      this.panelBg = `radial-gradient(ellipse at 30% 50%, ${mid} 0%, ${dark} 60%, #060606 100%)`;
    };
    img.onerror = () => { this.panelBg = '#0a0a0a'; };
    img.src = src;
  }
}