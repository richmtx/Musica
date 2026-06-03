import { AfterViewInit, Component, ElementRef, Inject, OnDestroy, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-listen',
  imports: [NavbarComponent],
  templateUrl: './listen.component.html',
  styleUrl: './listen.component.css'
})
export class ListenComponent implements AfterViewInit, OnDestroy {

  private observer!: IntersectionObserver;

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    // setTimeout garantiza que el DOM esté completamente pintado antes de observar
    setTimeout(() => {
      const elements = this.el.nativeElement.querySelectorAll(
        '.reveal, .reveal-card'
      );

      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
              this.observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0,           // dispara en cuanto 1px sea visible
          rootMargin: '0px'       // sin margen negativo que excluya elementos ya visibles
        }
      );

      elements.forEach((el: Element) => this.observer.observe(el));
    }, 100);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}