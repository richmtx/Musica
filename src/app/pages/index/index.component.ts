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