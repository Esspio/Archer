import { messages } from './../../utils/Messages_json';
import { Component, input } from '@angular/core';
import { ProgressBar } from '../progress-bar/progress-bar';
import { MatIcon } from '@angular/material/icon';
import { MoodIconValue } from '../../utils/ProgressBarMoodIcon';

@Component({
  selector: 'app-sequencia-presenca',
  imports: [ProgressBar, MatIcon],
  templateUrl: './sequencia-presenca.html',
  styleUrl: './sequencia-presenca.scss',
})
export class SequenciaPresenca {
  moodIcon = input.required<MoodIconValue>();
  messages = messages;
  progressBarValue = input.required<number>();
  quantidadeDiasTreinados = input.required<number>();
}
