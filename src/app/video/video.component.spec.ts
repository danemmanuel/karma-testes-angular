import { VideoComponent } from './video.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { VideoService } from './video.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('VideoComponent', () => {
  let component: VideoComponent;
  let fixture: ComponentFixture<VideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoComponent],
      providers: [VideoService, HttpClient, HttpHandler]
    });

    fixture = TestBed.createComponent(VideoComponent);
    component = fixture.componentInstance;

    const cards: any[] = [
      {
        cardTitle: 'titulo',
        descricao: 'desc'
      }
    ];

    component.listCards = cards;
  });

  it('deve criar', () => {
    expect(component).toBeDefined();
  });

  describe('verifica conteudo html', () => {
    it('deve criar um titulo', () => {
      fixture.detectChanges();
      fixture = TestBed.createComponent(VideoComponent);

      const result = fixture.nativeElement.querySelector('h1');
      expect(result.id).toEqual('ddd');
    });
  });

  describe('verifica Funções', () => {
    it('deve chamar a função cardSelect()', () => {
      expect(component.setColor('EXCLUÍDO PELA DEF-4')).toBe('#ffa3a4');
    });
  });
});
