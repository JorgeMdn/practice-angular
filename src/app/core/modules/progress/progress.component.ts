import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProgressService } from './progress.service';

@Component({
  selector: 'dcc-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
  animations: [
    trigger('progressFadeAnimation', [
      state('in', style({ opacity: 1, display: 'flex' })),
      state('out', style({ opacity: 0, display: 'none' })),
      transition('out => in', [animate('.700ms')]),
      transition('in => out', [animate('.700ms')]),
    ]),
  ],
})
export class ProgressComponent implements OnInit {
  @Input() visible: boolean;
  private subscription: Subscription;

  constructor(private readonly progress: ProgressService) {
    this.visible = false;
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    this.subscription.add(this.progress.getProgress().subscribe((load) => (this.visible = load)));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
